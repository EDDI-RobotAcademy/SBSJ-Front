import {
    COMMIT_IS_AUTHENTICATED,
} from './mutation-types'

export default {
    [COMMIT_IS_AUTHENTICATED] (state, passingData) {
        state.isAuthenticated = passingData;
    },
}   