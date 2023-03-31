import {
    COMMIT_IS_AUTHENTICATED,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject.js';
import router from '@/router';

export default {
    reqSignUpToSpring({}, payload) {
        const { name, id, password, email, birthday, phoneNumber } = payload;
        return axiosInst.post("/member/sign-up", { name, id, password, email, birthday, phoneNumber })
            .then(() => {
                alert("회원 가입 완료!");
                router.push("/sign-in");
            })
            .catch((res) => {
                alert("회원 가입 실패!\n다시 시도해주세요!"+ res.data);
            })
    },
