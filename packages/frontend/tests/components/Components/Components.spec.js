import React from 'react'
import Components from 'components/Components'
import { shallow } from 'enzyme'

describe('(Component) Components', () => {
  let props, spies, component

  beforeEach(() => {
    spies = {}
    props = {
      components: [],
      fetchComponents: () => {},
      postComponent: () => {},
      updateComponent: () => {},
      deleteComponent: () => {}
    }
    component = shallow(<Components {...props} />)
  })

  it('Renders a headline', () => {
    expect(component.find('h4').text()).to.equal('Components')
  })
})