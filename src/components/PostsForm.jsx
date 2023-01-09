import Input from './Input'
import Button from './Button'
import { useState, useContext } from 'react'
import { createPost } from '../services/posts'
import {PostContext} from '../context/PostsContext'


export default function PostsForm() {
  const [input, setInput] = useState({})
  const {posts, setPosts} = useContext(PostContext)
  function onChange(e) {
    changeValue(e, input, setInput)
  }

  async function onClick(e) {
    await sendForm(input, posts, setPosts)
  }

  return (
      <div>
        <Input id='name' placeholder='New post here!' onChange={onChange} />
        <Input id='user' placeholder='Who are you?' onChange={onChange} />
        <Button text={'Create New Post'} onClick={onClick} />
      </div>
  )
}

function changeValue(e, input, setInput) {
  const property = e.target.id
  const value = e.target.value

  input[property] = value
  setInput(setInput)
}

async function sendForm(state, posts, setPosts) {
  const newPost = await createPost(state.name, state.user)
  setPosts([...posts, newPost])
}