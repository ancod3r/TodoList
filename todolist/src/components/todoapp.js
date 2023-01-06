import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_MSG_LIST } from '../graphql/queries'
import { ADD_MSG, UPDATE_MSG, DELETE_MSG, TOGGLE_MSG } from '../graphql/mutations'

const Todoapp = () => {
// Hooks
  const { data, error } = useQuery(GET_MSG_LIST)
  const [msgAdd] = useMutation(ADD_MSG)
  const [msgUpdate] = useMutation(UPDATE_MSG)
  const [msgDelete] = useMutation(DELETE_MSG)
  const [msgToggle] = useMutation(TOGGLE_MSG)

// State and local variables
  const [userInput, setUserInput] = useState('')
  const [isEditItem, setIsEditItem] = useState('')
  const [editButton, setEditButton] = useState(false)

// Local Functions
  async function AddTodo(event){
    event.preventDefault()
    if (!userInput.trim()) {
      alert('Blank text/spaces cannot be added. . .')
    } else if (userInput && editButton) {
      data.msglist.map((items) => {
        if (items.id === isEditItem) {
          return	{ ...items,	jobtodo: userInput }
          }
          return items
      })
      const variables = {
        id: isEditItem,
        jobtodo: userInput
      }
      await (
        msgUpdate({ variables,	refetchQueries: [{ query: GET_MSG_LIST }] })
      )
      setUserInput('')
      setIsEditItem(null)
      setEditButton(false)
    } else {
      const variables = {
        jobtodo: userInput
      }
      await(
      msgAdd({ variables,	refetchQueries: [{ query: GET_MSG_LIST }] })
      )
      setUserInput('')
    }
  }

async function toggleTodo(index){ 
    data.msglist.find((items) => {
      return items.id === index.toggle
    })
    if (index.toggle === 0) {
      const variables = {
        id: index.id,
        toggle: 1
      }
      await(msgToggle({ variables }))
    } else {
      const variables = {
        id: index.id,
        toggle: 0
      }
      await (msgToggle({ variables }))
    }
}

async function editItem(index) {
    const variables = data.msglist.find((items) => {
      return items.id === index
    })
    setIsEditItem(index)
    setUserInput(variables.jobtodo)
    setEditButton(true)
  }

  async function deleteTodo(index){
    const isConfirmed = window.confirm('Are You Sure want to Delete this item')
    if (isConfirmed) {
      const variables = data.msglist.find((items) => {
        return items.id === index
      })
      await(
      msgDelete({ variables, refetchQueries: [{ query: GET_MSG_LIST }] })
      )
    }
  }

// Returned Values
  // console.log(data);
  if (error) return <div><h1>Cannot Fetch Data<br />Somthing went Wrong</h1></div>
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption><a href='index.html'>Todo List <i className='fa-solid fa-list-check'></i></a></figcaption>
          </figure>
          <div className='addItems'>
            <form onSubmit={(event) => AddTodo(event)}>
              <input
                className='form-control'
                // autoFocus
                ref={(input) => {input && input.focus() }}
                type='text'
                value={userInput}
                placeholder='&#9997; Type Your Todo. . .'
                onChange={(event) => setUserInput(event.target.value)}
              />
              {editButton
                ? (
                  <i className='far fa-edit add-btn' onClick={(event) => AddTodo(event)} />
                  )
                : (
                  <i className='fa fa-plus add-btn' onClick={(event) => AddTodo(event)} />
                  )}
            </form>
          </div>
          <div className='showItems'>
            {(data)
              ? data.msglist.map(items => (
                <div className='eachItem' key={items.id} onDoubleClick={() => toggleTodo(items)}>
                  <i className='far fa-check-square add-btn' />
                  <h3 className={`${items.toggle && 'strike'}`}>{items.jobtodo}</h3>
                  <div className='todo-btn'>
                    <i className='far fa-edit add-btn' onClick={() => editItem(items.id)} />
                    <i className='far fa-trash-alt add-btn' onClick={() => deleteTodo(items.id)} />
                  </div>
                </div>
		  ))
              : null};
          </div>
        </div>
      </div>
    </>
  )
}
export default Todoapp
