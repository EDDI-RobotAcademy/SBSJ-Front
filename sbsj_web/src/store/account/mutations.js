import {
    REQUEST_ACCOUNT_LIST_TO_SPRING,
    REQUEST_ACCOUNT_TO_SPRING
    COMMIT_IS_AUTHENTICATED,
} from './mutation-types'

export default {
[REQUEST_ACCOUNT_LIST_TO_SPRING] (state, passingData) {
    state.accounts = passingData
},

[REQUEST_ACCOUNT_TO_SPRING] (state, passingData) {
    state.account = passingData
},
}        state.isAuthenticated = passingData;
    },

