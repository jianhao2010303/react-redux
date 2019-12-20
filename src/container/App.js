/*
 * @Author: your name
 * @Date: 2019-12-19 13:15:28
 * @LastEditTime : 2019-12-20 13:55:28
 * @LastEditors  : Please set LastEditors
 * @Description: 根节点
 * @FilePath: \reactdemo05\src\container\App.js
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'
import { addTodo } from '../actions/Actions'

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const { todolist, addTodos } = this.props
        let [todoNum, doingNum, doneNum] = [0, 0, 0]
        todolist.forEach(i => {
            if (i.istodo) {
                todoNum++
            } else if (i.doing) {
                doingNum++
            } else {
                doneNum++
            }
        })

        return (
            <div>
                <Router>
                    <Header todolist={this.props.todolist} onAdd={text => addTodos(text)}></Header>
                    <Navigation
                        allMemos={todolist.length}
                        todoNumber={todoNum}
                        doingNumber={doingNum}
                        doneNumber={doneNum}></Navigation>
                    <div className="content">
                        {this.props.routers.map((route, key) => {
                            if (route.exact) {
                                return <Route exact key={key} path={route.path} component={route.component}></Route>
                            } else {
                                return <Route key={key} path={route.path} component={route.component}></Route>
                            }
                        })}
                    </div>
                </Router>
            </div>
        )
    }
}

App.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

/**
 * @description: 把数据映射到组件上
 * @param {type}
 * @return:
 */
const mapStateToProps = state => {
    return {
        todolist: state.todolist
    }
}

const mapDispatchProps = dispatch => {
    return {
        addTodos: text => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(App)
