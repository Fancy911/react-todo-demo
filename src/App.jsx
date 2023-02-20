import React, {Component} from 'react';

import Header from './componets/Header';
import Footer from './componets/Footer';
import List from './componets/List';

import './App.css';

export default class App extends Component {
    // 初始化Todo列表数据
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false},
        ]
    }
    render() {
        const {todos} = this.state;
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header />
                    <List todos={todos}/>
                    <Footer />
                </div>
            </div>
        );
    }
}
