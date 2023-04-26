import { shallowMount } from '@vue/test-utils'
import ProductListForm from '@/components/product/ProductListForm.vue'

describe('ProductListForm', () => {
  it('renders props.msg when passed', () => {
    let product = new Array()
    product.id = 1
    product.title = "go"
    product.price = 10

    const wrapper = shallowMount(ProductListForm, {
      propsData: { products: product }
    })
    expect(wrapper.props().products).toBe(product)
  })
})