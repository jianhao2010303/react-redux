/*
 * @Author: your name
 * @Date: 2019-12-19 17:31:09
 * @LastEditTime : 2019-12-20 14:49:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\controller\TodoController
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo } from '@/actions/Actions'
import DoneComp from '@/components/DoneComp'

class TodoContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { dispatch, todolist } = this.props
        return (
            <div>
                <DoneComp todolist={todolist} onDel={index => dispatch(deleteTodo(index))}></DoneComp>
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
