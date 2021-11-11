import React from 'react'
import { Render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

test('renders content', () => {


  const mockSetBlogs = jest.fn()

  const Blog = {
    id: '6151ed6bd71f92c744a1749b',
    title: 'hahha',
    user:'6150586c5c0c3dbd45521491' ,
    url: 'https://fb.watch/1F85fWNMXY/',
    likes: 778,

  }

  const component = render(
    <Blog blog={blog} setBlogs={setBlogs} blogs={blogs} />
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})