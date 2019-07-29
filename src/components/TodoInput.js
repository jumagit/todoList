import React, { Component } from 'react'
import TodoList from './TodoList';


export default class TodoInput extends Component {
    render() {
        return (
            <div>
                <h2>hello from todo TodoInput</h2> 
                <TodoList/>
              
            </div>
        )
    }
}
