import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        // 接收App传递过来的todos
        const {todos} = this.props;
        return (
            <ul className='todo-main'>
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo}/>
                    })
                }
            </ul>
        )
    }
}
