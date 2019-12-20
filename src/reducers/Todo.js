/*
 * @Author: your name
 * @Date: 2019-12-19 09:59:55
 * @LastEditTime : 2019-12-20 14:07:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\reducers\Reducers.js
 */
// const CountReducers = (state = 0, action) => {
//     console.log(action)
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }
import { ADD_TODO, CHANGE_TODO_TO_DOING, DELETE_TODO, CHANGE_DOING_TO_DONE } from '../actions/Actions'
let todos
;(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos)
    } else {
        todos = []
    }
})()

const todolist = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    todo: action.payload,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ]
        case CHANGE_TODO_TO_DOING:
            localStorage.setItem(
                'todos',
                JSON.stringify([
                    ...state.slice(0, action.index),
                    {
                        todo: state[action.index].todo,
                        istodo: false,
                        doing: true,
                        done: false
                    },
                    ...state.slice(parseInt(action.index) + 1)
                ])
            )
            return [
                ...state.slice(0, action.index),
                {
                    todo: state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]

        case CHANGE_DOING_TO_DONE:
            localStorage.setItem(
                'todos',
                JSON.stringify([
                    ...state.slice(0, action.index),
                    {
                        todo: state[action.index].todo,
                        istodo: false,
                        doing: false,
                        done: true
                    },
                    ...state.slice(parseInt(action.index) + 1)
                ])
            )
            return [
                ...state.slice(0, action.index),
                {
                    todo: state[action.index].todo,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.index) + 1)
            ]
        //删除某一项目
        case DELETE_TODO:
            localStorage.setItem('todos', JSON.stringify([...state.slice(0, action.index), ...state.slice(parseInt(action.index) + 1)]))
            return [...state.slice(0, action.index), ...state.slice(parseInt(action.index) + 1)]

        default:
            return state
    }
}

export default todolist
