import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="columns">
            <header className="column col-12">
                <h1 className="text-primary text-center">To Do</h1>
            </header>
            <div className="column col-12">
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }}
                    className="input-group"
                >
                    <input ref={node => (input = node)} className="form-input" placeholder="What needs to be done?" />
                    <button type="submit" className="btn btn-primary input-group-btn">Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default connect()(AddTodo)
