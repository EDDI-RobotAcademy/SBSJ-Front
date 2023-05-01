<template>
    <v-layout>
        <v-dialog v-model="dialog" persistent max-width="800" max-height="1000">
            <template v-slot:activator="{on}">
                <v-btn class="w-10 me-2" color="#692498" outlined v-on="on">수정</v-btn>
                <v-btn class="w-10" color="grey" outlined @click="deleteDelivery()">삭제</v-btn>
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
                            <v-text-field :value="localDelivery.addressName" label="배송지명 ex) 우리집" id="addressName"
                                :rules="addressName_rule" color="#692498" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field :value="localDelivery.addressType" label="배송지 분류" id="addressType"
                                :rules="addressType_rule" color="#692498" required/>
                        </div>
                        <div class="d-flex">
                            <v-text-field :value="localDelivery.recipientName" label="수령인 이름" id="recipientName"
                                :rules="recipientName_rule" required color="#692498"/>
                        </div>
                        <div class="d-flex">
                            <v-text-field :value="localDelivery.phoneNumber" label="전화번호 ex) 010-1234-5678" id="phoneNumber"
                                :rules="phoneNumber_rule" required color="#692498"/>
                        </div>

                        <div class="d-flex">
                            <v-text-field :value="localDelivery.road" label="도로명" :disabled="true" required id="road"/>
                        </div>

                        <div class="d-flex">
                            <v-text-field :value="localDelivery.addressDetail" label="상세 주소" color="#692498" required id="addressDetail"/>
                        </div>
                        
                        <div class="d-flex">
                            <v-text-field :value="localDelivery.zipcode" label="우편번호" :disabled="true" required id="zipcode"/>
                            
                            <v-btn text large outlined style="font-size: 13px"
                                class="mt-3 ml-5" color="purple lighten-1"
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
                            <v-btn type="submit" width="610px" x-large rounded dark
                                    class="mt-6" color="#692498">
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
                
                const addressName = document.getElementById("addressName").value;
                const addressType = document.getElementById("addressType").value;
                const recipientName = document.getElementById("recipientName").value;
                const phoneNumber = document.getElementById("phoneNumber").value;
                const road = document.getElementById("road").value;
                const addressDetail = document.getElementById("addressDetail").value;
                const zipcode = document.getElementById("zipcode").value;

                if(defaultAddress === "기본 배송지" && this.delivery.defaultAddress === "") {
                    let checkDefaultAddress =  await this.reqMyPageCheckDefaultAddressToSpring({ memberId, defaultAddress });
                    if(checkDefaultAddress) {
                        let changeDefaultAddress = confirm("기본 배송지가 이미 설정되어있습니다.\n이 배송지를 기본 배송지로 설정하시겠습니까?");
                        if(!changeDefaultAddress) {
                            defaultAddress = "";
                        } else {
                            let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));
                            var foundDelivery = lsDeliveryList.find(e => e.defaultAddress === "기본 배송지");
                            foundDelivery.defaultAddress = '';
                            localStorage.setItem("lsDeliveryList", JSON.stringify(lsDeliveryList));
                        }
                    }
                }

                let successRegister = await this.reqMyPageModifyDeliveryToSpring({ addressId, memberId, addressName, addressType, 
                                                recipientName, phoneNumber, road, addressDetail, zipcode, defaultAddress });
                
                let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));
                if(successRegister != null) {
                    lsDeliveryList.forEach((delivery, index) => {
                        if(delivery.addressId === successRegister.addressId) {
                            lsDeliveryList.splice(index, 1);
                        }
                    })
                    lsDeliveryList.push(successRegister);

                    localStorage.setItem("lsDeliveryList", JSON.stringify(lsDeliveryList));
                }
                
                this.dialog = false;
                window.location.reload(true);
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
                
                let lsDeliveryList = JSON.parse(localStorage.getItem("lsDeliveryList"));
                lsDeliveryList.forEach((delivery, index) => {
                    if(delivery.addressId === this.delivery.addressId) {
                        lsDeliveryList.splice(index, 1);
                    }
                })
                
                localStorage.setItem("lsDeliveryList", JSON.stringify(lsDeliveryList));
                window.location.reload(true);
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