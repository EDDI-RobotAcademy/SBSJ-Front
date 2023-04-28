import {
    COMMIT_IS_AUTHENTICATED,
    REQUEST_MY_PAGE_MEMBER_INFO
} from './mutation-types'

import mainRequest from '@/api/mainRequest';
import router from '@/router';

export default {
    reqSignUpToSpring({}, payload) {
        const { name, userId, password, email, birthday, phoneNumber } = payload;
        return mainRequest.post("/member/sign-up", { name, userId, password, email, birthday, phoneNumber })
            .then(() => {
                alert("회원 가입 완료!");
                router.push("/sign-in");
            })
            .catch((res) => {
                alert("회원 가입 실패!\n다시 시도해주세요!"+ res.data);
            })
    },
    reqSignUpCheckUserIdToSpring({}, userId) {
        return mainRequest.post(`/member/sign-up/check-userId/${userId}`)
            .then((res) => {
                return res.data
            })
    },
    async reqSignUpCheckEmailToSpring({}, email) {
        return await mainRequest.post(`/member/sign-up/check-email/${email}`)
            .then((res) => {
                return res.data;
            })
    },
    reqSignUpCheckPhoneNumberToSpring({}, phoneNumber) {
        return mainRequest.post(`/member/sign-up/check-phoneNumber/${phoneNumber}`)
            .then((res) => {
                return res.data;
            })
    },

    reqSignInToSpring({ commit }, payload) {
        const { userId, password } = payload;
        return mainRequest.post("/member/sign-in", { userId, password })
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
                        router.push({ name: 'home' });
                    }
                })()
            })
            .catch(() => {
                alert("로그인에 실패했습니다.\n다시 시도해주세요.");
            })
    },
    async reqSignOutToSpring({ commit }, userInfo) {
        return await mainRequest.post("/member/logout", userInfo)
            .then(() => {
                alert("로그아웃 완료");
                localStorage.removeItem("userInfo");

                commit(COMMIT_IS_AUTHENTICATED, false);
            })
    },
    reqResignToSpring({ commit }, userInfo) {
        return mainRequest.post("/member/resign", userInfo)
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
        const { memberId, password } = payload

        return await mainRequest.post("/member/mypage/check-password", { memberId, password })
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

    reqMyPageMemberInfoToSpring({ commit }, memberId) {
        return mainRequest.post(`/member/mypage/memberInfo/${memberId}`)
            .then((res) => {
                commit(REQUEST_MY_PAGE_MEMBER_INFO, res.data);
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    reqMyPageUpdateMemberInfoToSpring({ }, payload) {
        const { memberId, name, birthday, email, phoneNumber, newPassword } = payload
        return mainRequest.post(`/member/mypage/memberInfo/update/${memberId}`, 
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