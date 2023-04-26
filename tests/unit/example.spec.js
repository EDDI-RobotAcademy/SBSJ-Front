import { shallowMount } from '@vue/test-utils'
import ProductListForm from '@/components/product/ProductListForm.vue'

describe('ProductListForm', () => {
  it('renders props.msg when passed', () => {
    let product = {
      id: 1,
      title: "go",
      price: 10
    }

    const wrapper = shallowMount(ProductListForm, {
      propsData: {
        products: [product],
        viewCount: 10,
        orderBy: 'price'
      }
    })
    expect(wrapper.props().products).toEqual([product])
  })
})
