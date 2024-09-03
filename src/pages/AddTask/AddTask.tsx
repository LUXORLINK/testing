import './AddTask.scss'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addTask } from '../../store/action'


export interface I {}

const AddTask = () => {

  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    dispatch(addTask(text));

    setText('');

  };

  return (

    <form onSubmit={handleSubmit}>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <button type="submit">Add Task</button>

    </form>

  )

}

export default AddTask
