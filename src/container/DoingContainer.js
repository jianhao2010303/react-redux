/*
 * @Author: your name
 * @Date: 2019-12-20 14:14:05
 * @LastEditTime : 2019-12-20 14:47:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\controller\DoingController.js
 */
import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '@/actions/Actions'
import DoneComp from '@/components/DoneComp'

class DoingContainer extends React.Component {
    render() {
        const { dispatch, todolist } = this.props
        return <DoneComp todolist={todolist} onDel={index => dispatch(deleteTodo(index))}></DoneComp>
    }
}

const mapStateToProps = state => ({ todolist: state.todolist })

export default connect(mapStateToProps)(DoingContainer)
