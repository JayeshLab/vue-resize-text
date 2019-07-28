import Vue from 'vue'
import { mount } from '@vue/test-utils'
import VueResizeText from '@/index.js'

Vue.use(VueResizeText)


describe('v-resize-text', () => {
  it('it has inserted, unbind methods available', () => {
    expect(typeof VueResizeText.inserted).toBe('function')
    expect(typeof VueResizeText.unbind).toBe('function')
  })
  it('should set default min font size to the element', () => {
    const inserted = VueResizeText.inserted
    const div = document.createElement('div')
    inserted(div, {})
    expect(div.style.fontSize).toBe('16px')
  })
  it('should set to minFontSize for element if specified', (done) => {
    const component = {
      template: '<div v-resize-text="{ ratio: 2, minFontSize: \'30px\', maxFontSize: \'100px\'}"></div>',
      directives: {
        ResizeText: VueResizeText
      }
    }
    const wrapper = mount(component)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('div').element.style.fontSize).toBe('30px')
      done()
    })
  })
  it('should add event listener on inserted and remove event listener on unbind', ()=> {
    const callback = jest.fn();
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const div = document.createElement('div');
    VueResizeText.inserted(div, {value: callback});
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    VueResizeText.unbind(div);
    expect(window.removeEventListener).toHaveBeenCalledTimes(1)
  })
})