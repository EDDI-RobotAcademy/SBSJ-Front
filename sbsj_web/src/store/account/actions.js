import {
    COMMIT_IS_AUTHENTICATED,
    REQUEST_MY_PAGE_MEMBER_INFO
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
    async reqSignUpCheckEmailToSpring({}, payload) {
        let email = JSON.stringify(payload);
        return await axiosInst.post("/member/sign-up/check-email", email)
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
                
                commit(COMMIT_IS_AUTHENTICATED, false);
            })
    },
    commitIsAuthenticated({ commit }, payload) {
        commit(COMMIT_IS_AUTHENTICATED, payload);
    },

    async reqMyPageCheckPasswordToSpring({}, payload) {
        const { memberNo, password } = payload

        return await axiosInst.post("/member/mypage/check-password", { memberNo, password })
            .then((res) => {
                if(res.data == false) {
                    alert("비밀번호가 맞지 않습니다. 다시 입력해주세요.");
                }
                return res.data;
            })
            .catch((res) => {
                alert("문제 발생!");
                return res.data;
            })
    },

    reqMyPageMemberInfoToSpring({ commit }, memberNo) {
        return axiosInst.post(`/member/mypage/memberInfo/${memberNo}`)
            .then((res) => {
                commit(REQUEST_MY_PAGE_MEMBER_INFO, res.data);
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    reqMyPageUpdateMemberInfoToSpring({ }, payload) {
        const { memberNo, name, birthday, email, phoneNumber, newPassword } = payload
        return axiosInst.post(`/member/mypage/memberInfo/update/${memberNo}`, 
               { name, birthday, email, phoneNumber, newPassword })
            .then((res) => {
                alert("회원 정보를 성공적으로 수정하였습니다.");
                return res;
            })
            .catch(() => {
                alert('문제 발생!');
            })
    },
    

}