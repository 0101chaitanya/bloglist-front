import React from 'react'
import { TextEncoder, TextDecoder } from 'util'
document.TextEncoder = TextEncoder
document.TextDecoder = TextDecoder
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog.jsx'
import jsdom from 'jsdom'
import  Enzyme , { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
test('renders content', () => {


  const mockSetBlogs = jest.fn()


  const data = {
    id: '6151ed6bd71f92c744a1749b',
    title: 'hahha',
    user:{
      name: 'John',
      username: 'John123',
    },
    url: 'https://fb.watch/1F85fWNMXY/',
    likes: 778,

  }

  const component = render(

    shallow (<Blog blog={data} setBlogs={mockSetBlogs}  />
    )  )

  component.debug()
  expect(component.container).toHaveTextContent(
    data.title,
  )
})