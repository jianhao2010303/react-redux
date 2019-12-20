/*
 * @Author: your name
 * @Date: 2019-12-20 13:40:35
 * @LastEditTime : 2019-12-20 14:16:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\controller\AllController.js
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTodo, changeTodoToDoing, changeDoingToDone } from '@/actions/Actions'
import TodoComp from '@/components/TodoComp'
import DoingComp from '@/components/DoingComp'
import DoneComp from '@/components/DoneComp'

class AllContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { dispatch, todolist } = this.props

        return (
            <div>
                <TodoComp todolist={todolist} onTodoToDoing={index => dispatch(changeTodoToDoing(index))} onDel={index => dispatch(deleteTodo(index))}></TodoComp>

                <DoingComp todolist={todolist} changeDoingToDone={index => dispatch(changeDoingToDone(index))} onDel={index => dispatch(deleteTodo(index))}></DoingComp>

                <DoneComp todolist={todolist} onDel={index => dispatch(deleteTodo(index))}></DoneComp>
            </div>
        )
    }
}

AllContainer.propTypes = {
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

export default connect(mapStateToProps)(AllContainer)
