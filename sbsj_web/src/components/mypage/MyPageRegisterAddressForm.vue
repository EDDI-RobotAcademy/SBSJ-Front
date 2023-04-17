<template>
    <v-layout justify-end>
        <v-dialog v-model="dialog" persistent max-width="800" max-height="1000">
            <template v-slot:activator="{on}">
                <v-btn class="w-10" color="#c7d6cd" v-on="on">배송지 등록</v-btn>
            </template>

            <v-form @submit.prevent="onSubmit" ref="form">
                <v-card height="850" class="rounded-xl">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel">mdi-close</v-icon>
                    </div>
                    <v-card-title class="headline d-flex justify-center" style="padding: 15px 0 25px 0;">
                        배송지 등록
                    </v-card-title>
                    <br>
                    <v-card-text style="padding: 0 100px 0 100px">
                        <div class="d-flex">
                            <v-text-field v-model="addressName" label="배송지명 ex) 우리집"
                                :rules="addressName_rule" color="green" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="addressType" label="배송지 분류"
                                :rules="addressType_rule" color="green" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="recipientName" label="수령인 이름"
                                :rules="recipientName_rule" required color="green"/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="phoneNumber" label="전화번호 ex) 010-1234-5678"
                                :rules="phoneNumber_rule" required color="green"/>
                        </div>

                        <div class="d-flex">
                            <v-text-field v-model="road" label="도로명 주소" :disabled="true" required/>
                        </div>

                        <div class="d-flex">
                            <v-text-field v-model="addressDetail" label="상세 주소" color="green" required/>
                        </div>

                        
                        <div class="d-flex">
                            <v-text-field v-model="zipcode" label="우편번호" :disabled="true" required/>
                            
                            <v-btn text large outlined style="font-size: 13px"
                                class="mt-3 ml-5" color="blue lighten-1"
                                @click="callDaumAddressApi">
                                주소 확인
                            </v-btn>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="defaultAddress">
                            <label class="form-check-label ms-1" for="defaultAddress" >기본 배송지로 설정</label>
                        </div>
                        
                    </v-card-text>
                    <div class="d-flex justify-center">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="submit" width="610px" x-large rounded
                                    class="mt-6" color="#c7d6cd"
                                    :disabled="this.streetPass == false">
                                배송지 등록
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-form>
        </v-dialog>
    </v-layout>
</template>

<script>

import { mapActions } from 'vuex'

const orderModule = 'orderModule'

export default {
    name: "MyPageRegisterAddressForm",
    data() {
        return {
            dialog: false,

            addressName: '',
            addressType: '',
            recipientName: '',
            phoneNumber: '',
            road: '',
            addressDetail: '',
            zipcode: '',
            streetPass: false,
            
            addressName_rule: [
                v => !!v || '배송지명을 입력 해주세요.',
            ],
            addressType_rule: [
                v => !!v || '배송지 분류를? 입력 해주세요.',
            ],
            recipientName_rule: [
                v => !!v || '수령인 이름을 입력 해주세요.',
            ],
            phoneNumber_rule: [
                v => !!v || '전화번호를 입력 해주세요.',
                v => {
                    const replaceV = v.replace(/(\s*)/g, '')
                    const pattern = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/
                    return pattern.test(replaceV) || '010-1234-5678 형식의 번호를 입력해주세요.'
                }
            ]
        }
    },
    methods: {
        ...mapActions(orderModule, ['reqMyPageCheckDefaultAddressToSpring']),

        async onSubmit() {
            if(this.$refs.form.validate()) {
                if(this.streetPass) {
                    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                    let memberId = userInfo.memberId;

                    let checkedDefaultAddress = document.getElementsByClassName("form-check-input")[0].checked;
                    let defaultAddress = checkedDefaultAddress === true ? "기본 배송지" : "";

                    const { addressName, addressType, recipientName, phoneNumber, 
                            road, addressDetail, zipcode } = this;

                    if(defaultAddress === "기본 배송지") {
                        let checkDefaultAddress =  await this.reqMyPageCheckDefaultAddressToSpring({ memberId, defaultAddress });
                        if(checkDefaultAddress) {
                            let changeDefaultAddress = confirm("기본 배송지가 이미 설정되어있습니다.\n이 배송지를 기본 배송지로 설정하시겠습니까?");
                            if(!changeDefaultAddress) {
                                defaultAddress = "";
                            }
                        }
                    }
                    
                    this.$emit("submit", { memberId, addressName, addressType, recipientName, phoneNumber, 
                                           road, addressDetail, zipcode, defaultAddress });
                    
                    this.addressName = '';
                    this.addressType = '';
                    this.recipientName = '';
                    this.phoneNumber = '';
                    this.road = '';
                    this.addressDetail = '';
                    this.zipcode = '';
                    checkedDefaultAddress = false;
                    this.dialog = false;
                }
            } else {
                alert('형식에 맞게 입력해주세요!')
            }
        },
        btnCancel() {
            let checkedDefaultAddress = document.getElementsByClassName("form-check-input")[0].checked;

            this.addressName = '';
            this.addressType = '';
            this.recipientName = '';
            this.phoneNumber = '';
            this.road = '';
            this.addressDetail = '';
            this.zipcode = '';
            checkedDefaultAddress = false;
            this.dialog = false;
        },
        callDaumAddressApi () {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    let fullRoadAddr = data.roadAddress;
                    let extraRoadAddr = '';

                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraRoadAddr += data.bname;
                    }

                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }

                    if (extraRoadAddr !== '') {
                        extraRoadAddr = ' (' + extraRoadAddr + ')';
                    }

                    if (fullRoadAddr !== '') {
                        fullRoadAddr += extraRoadAddr;
                    }

                    this.road = data.roadAddress;
                    this.zipcode = data.zonecode;
                    
                    this.streetPass = true
                }
            }).open()
        }
    }
}

</script>

<style>

</style>