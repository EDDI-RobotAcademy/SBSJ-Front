import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {
    async requestProductListToSpring({commit}) {
        return await axiosInst.get('/category/default')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
            }).catch((err) => {
                console.log(err);
            })
    }
}