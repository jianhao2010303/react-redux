/*
 * @Author: your name
 * @Date: 2019-12-19 17:31:09
 * @LastEditTime : 2019-12-20 14:16:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\controller\TodoController
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo, changeTodoToDoing } from '@/actions/Actions'
import TodoComp from '@/components/TodoComp'

class TodoContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { dispatch, todolist } = this.props
        return (
            <div>
                <TodoComp todolist={todolist} onTodoToDoing={index => dispatch(changeTodoToDoing(index))} onDel={index => dispatch(deleteTodo(index))}></TodoComp>
            </div>
        )
    }
}

TodoContainer.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

const mapStateToProps = state => ({ todolist: state.todolist })

export default connect(mapStateToProps)(TodoContainer)
