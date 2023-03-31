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
    reqSignUpCheckIdToSpring({}, id) {
        return axiosInst.post(`/member/sign-up/check-id/${id}`)
            .then((res) => {
                return res.data
            })
    },
    reqSignUpCheckEmailToSpring({}, email) {
        return axiosInst.post(`/member/sign-up/check-email/${email}`)
            .then((res) => {
                return res.data;
            })
    },
    reqSignUpCheckPhoneNumberToSpring({}, phoneNumber) {
        return axiosInst.post(`/member/sign-up/check-phoneNumber/${phoneNumber}`)
            .then((res) => {
                return res.data;
            })
    },

    reqSignInToSpring({ commit }, payload) {
        const { id, password } = payload;
        return axiosInst.post("/member/sign-in", { id, password })
            .then((res) => {
                (async () => {
                    let returnData = JSON.stringify(res.data);
                    console.log("1이건 뭔데: "+ returnData);
                    let token = JSON.stringify(res.data.token);
                    console.log("2얘는 token: "+ token);
                    
                    if(token == JSON.stringify("incorrect")) {
                        alert("아이디 혹은 비밀번호가 틀렸습니다.");
                    } else if(token == JSON.stringify("no")) {
                        alert("가입되지 않은 사용자입니다.");
                    } else if((token != JSON.stringify("incorrect")) && (token != JSON.stringify("no"))) {
                        alert("로그인 성공!");
                        localStorage.setItem("userInfo", JSON.stringify(res.data));
                        commit(COMMIT_IS_AUTHENTICATED, true);
                        router.push("/");
                    }
                })()
            })
            .catch(() => {
                alert("로그인에 실패했습니다.\n다시 시도해주세요.");
            })
    },
    async reqSignOutToSpring({ commit }, token) {
        return await axiosInst.post("/member/logout", token)
            .then(() => {
                alert("로그아웃 완료");
                localStorage.removeItem("userInfo");

                commit(COMMIT_IS_AUTHENTICATED, false);
            })
    },
    reqResignToSpring({ commit }, token) {
        return axiosInst.post("/member/resign", token)
            .then(() => {
                alert("회원탈퇴 완료");
                localStorage.removeItem("userInfo");
                // this.$cookies.remove("userInfo");
                
                commit(COMMIT_IS_AUTHENTICATED, false);
            })
    },
    commitIsAuthenticated({ commit }, payload) {
        commit(COMMIT_IS_AUTHENTICATED, payload);
    },

}