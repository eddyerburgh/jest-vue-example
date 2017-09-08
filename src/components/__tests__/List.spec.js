import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import List from '@/components/List.vue'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '']
    const wrapper = shallow(List, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('has same HTML structure', () => {
    const items = ['item one', 'item two']

    const renderer = createRenderer()
    const wrapper = shallow(List, { propsData: { items } })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
