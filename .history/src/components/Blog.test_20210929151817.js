import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

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
    <Blog blog={data} setBlogs={mockSetBlogs} blogs={[data]} />
  )

  expect(component.container).toHaveTextContent(
    data.title,
  )
})