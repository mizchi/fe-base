/* @flow */
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

export const elementToJson = (element: any) => toJson(shallow(element))

export const snapshot = (title: string, element: any) =>
  it('should match snapshot', () => {
    expect(elementToJson(element)).toMatchSnapshot()
  })
