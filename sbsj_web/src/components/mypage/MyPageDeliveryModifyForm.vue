<template>
    <v-layout>
        <v-dialog v-model="dialog" persistent max-width="800" max-height="1000">
            <template v-slot:activator="{on}">
                <v-btn class="w-10 me-2" v-on="on">수정</v-btn>
                <v-btn class="w-10" @click="deleteDelivery()">삭제</v-btn>
            </template>

            <v-form @submit.prevent="onSubmit" ref="form">
                <v-card height="850" class="rounded-xl">
                    <div class="d-flex justify-end">
                        <v-icon class="mt-6 me-6 mb-0" @click="btnCancel()">mdi-close</v-icon>
                    </div>
                    <v-card-title class="headline d-flex justify-center" style="padding: 15px 0 25px 0;">
                        배송지 수정
                    </v-card-title>
                    <br>
                    <v-card-text style="padding: 0 100px 0 100px">
                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.addressName" label="배송지명 ex) 우리집"
                                :rules="addressName_rule" color="green" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.addressType" label="배송지 분류"
                                :rules="addressType_rule" color="green" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.recipientName" label="수령인 이름"
                                :rules="recipientName_rule" required color="green"/>
                        </div>
                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.phoneNumber" label="전화번호 ex) 010-1234-5678"
                                :rules="phoneNumber_rule" required color="green"/>
                        </div>

                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.city" label="도시" :disabled="true" required/>
                        </div>

                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.street" label="기본 주소" :disabled="true" required/>
                        </div>

                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.addressDetail" label="상세 주소" color="green" required/>
                        </div>
                        
                        <div class="d-flex">
                            <v-text-field v-model="localDelivery.zipcode" label="우편번호" :disabled="true" required/>
                            
                            <v-btn text large outlined style="font-size: 13px"
                                class="mt-3 ml-5" color="blue lighten-1"
                                @click="callDaumAddressApi">
                                주소 확인
                            </v-btn>
                        </div>
                        <div class="form-check">
                            <input v-if="localDelivery.defaultAddress === ''" class="form-check-input" type="checkbox" id="defaultAddress">
                            <input v-else class="form-check-input" type="checkbox" id="defaultAddress" checked>
                            <label class="form-check-label ms-1" for="defaultAddress" >기본 배송지로 설정</label>
                        </div>
                    </v-card-text>
                    <div class="d-flex justify-center">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="submit" width="610px" x-large rounded
                                    class="mt-6" color="#c7d6cd">
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

import { mapActions } from 'vuex';

const orderModule = 'orderModule';

export default {
    name: "MyPageDeliveryModifyForm",
    props: {
        delivery: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            dialog: false,
            streetPass: false,
            localDelivery: {},
            
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
    created() {
        this.localDelivery = this.delivery;
    },
    methods: {
        ...mapActions(orderModule, ['reqMyPageDeleteDeliveryToSpring',
                                    'reqMyPageModifyDeliveryToSpring',
                                    'reqMyPageCheckDefaultAddressToSpring']),

        async onSubmit() {
            if(this.$refs.form.validate()) {
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                let memberId = userInfo.memberId;
                let addressId = this.delivery.addressId;

                let checkedDefaultAddress = document.getElementsByClassName("form-check-input")[0].checked;
                let defaultAddress = checkedDefaultAddress === true ? "기본 배송지" : "";
                
                const { addressName, addressType, recipientName, phoneNumber, 
                        city, street, addressDetail, zipcode } = this.localDelivery;
                
                if(defaultAddress === "기본 배송지" && this.delivery.defaultAddress === "") {
                    let checkDefaultAddress =  await this.reqMyPageCheckDefaultAddressToSpring(defaultAddress);
                    if(checkDefaultAddress) {
                        let changeDefaultAddress = confirm("기본 배송지가 이미 설정되어있습니다.\n이 배송지를 기본 배송지로 설정하시겠습니까?");
                        if(!changeDefaultAddress) {
                            defaultAddress = "";
                        }
                    }
                }

                await this.reqMyPageModifyDeliveryToSpring(
                    { addressId, memberId, addressName, addressType, recipientName, phoneNumber, 
                      city, street, addressDetail, zipcode, defaultAddress });
                
                this.dialog = false;
                // window.location.reload(true);
            } else {
                alert('형식에 맞게 입력해주세요!')
            }
        },
        btnCancel() {
            this.dialog = false;
        },
        async deleteDelivery() {
            let checkDelete = confirm("이 배송지를 삭제하시겠습니까?");
            if(checkDelete) {
                await this.reqMyPageDeleteDeliveryToSpring(this.delivery.addressId);
                // window.location.reload(true);
            }
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

                this.localDelivery.city = data.sido;
                this.localDelivery.zipcode = data.zonecode;
                this.localDelivery.street = data.sigungu + ' ' + fullRoadAddr;

                this.streetPass = true
                }
            }).open()
        }
    }
}

</script>

<style>

</style>