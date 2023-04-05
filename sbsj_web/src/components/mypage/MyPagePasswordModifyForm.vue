<template>
    <v-layout justify-end>
        <v-dialog v-model="dialog" persistent max-width="800" max-height="1000">
            <template v-slot:activator="{on}">
                <v-btn color="#c7d6cd" dark v-on="on">비밀번호 수정</v-btn>
            </template>

            <v-card height="550" class="rounded-xl">
                <v-card-title class="headline d-flex justify-center" style="padding: 50px 0 25px 0;">
                    비밀번호 수정
                </v-card-title>
                <br>
                <v-card-text style="padding: 0 50px 0 50px">
                    <v-col class="text-h5">
                    <v-text-field v-model="password" label="현재 비밀번호" type="password" ref="password"
                        :rules="password_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-lock-outline" class="mb-2"/>
                    </v-col>
                    <v-col class="text-h5">
                    <v-text-field v-model="newPassword" label="새로운 비밀번호" type="password" ref="password"
                        :rules="newPassword_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-lock-outline" class="mb-2"/>
                    </v-col>
                    <v-col class="text-h5">
                    <v-text-field v-model="newPasswordConfirm" label="새로운 비밀번호 확인" type="password" ref="password"
                        :rules="newPassword_confirm_rule" :disabled="false" required outlined color="green" prepend-icon="mdi-lock-outline" class="mb-2"/>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal darken-1" text @click="btnCancel">취소</v-btn>
                    <v-btn color="teal darken-1" text @click="btnModify">비밀번호 수정</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

const accountModule = 'accountModule'

export default {
    name: 'MyPagePasswordModifyForm',
    data() {
        return {
            dialog: false,
            password: '',
            newPassword: '',
            newPasswordConfirm: '',

            password_rule: [
                // v => !!v || '패스워드를 입력해주세요.',
                v => this.password === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
                v => !(v && v.length < 4) || '패스워드는 4자 이상 입력해야 합니다.',
                v => !(v && v.length > 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
            ],
            newPassword_rule: [
                // v => !!v || '패스워드를 입력해주세요.',
                v => this.newPassword === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
                v => !(v && v.length < 4) || '패스워드는 4자 이상 입력해야 합니다.',
                v => !(v && v.length >= 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
            ],
            newPassword_confirm_rule: [
                // v => !!v || '패스워드를 확인해주세요.',
                v => !(v && v.length < 4) || '패스워드는 4자 이상 입력해야 합니다.',
                v => !(v && v.length >= 12) || '패스워드는 12자 이상 입력할 수 없습니다.',
                v => v === this.newPassword || '패스워드가 일치하지 않습니다.'
            ],
        }
    },
    methods: {
        ...mapActions(accountModule, [('reqMyPageCheckPasswordToSpring')]),

        btnCancel() {
            this.password = '';
            this.newPassword = '';
            this.newPasswordConfirm = '';
            this.dialog = false
        },
        async btnModify() {
            if(this.password === '' || this.newPassword === '' || this.newPasswordConfirm === '') {
                alert("수정할 비밀번호를 입력해주세요.")
            } else {
                if(this.$refs.password.validate()) {
                    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                    let memberId = userInfo.memberId;
                    let password = this.password;
                    let checkPassword = await this.reqMyPageCheckPasswordToSpring({ memberId, password })
                    
                    if(checkPassword) {
                        if(password == this.newPassword) {
                            alert("현재 비밀번호와 같습니다. 다른 비밀번호를 입력해주세요.");
                            return;
                        }
                        alert("수정 완료!");
                        this.$emit('passwordConfirm', this.newPassword);
                        this.password = '';
                        this.newPassword = '';
                        this.newPasswordConfirm = '';
                        this.dialog = false;
                    }
                } else {
                    alert('형식에 맞게 입력해주세요!')
                }
            }
        }
    }
}
</script>

<style>

</style>