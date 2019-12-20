/*
 * @Author: your name
 * @Date: 2019-12-19 13:49:09
 * @LastEditTime : 2019-12-20 13:51:40
 * @LastEditors  : Please set LastEditors
 * @Description: actions
 * @FilePath: \reactdemo05\src\actions\Actions.js
 */

export const ADD_TODO = 'ADD_TODO'

export const DELETE_TODO = 'Delete_Todo'

export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing'

export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done'

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

/*
 * @method  deleteTodo 删除事项
 * @param  {Number} index 需要删除的事项的下标
 */
export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    }
}

/*
 * @method  changeTodoToDoing 状态由todo转为doing
 * @param  {Number} index 需要改变状态的事项的下标
 */
export function changeTodoToDoing(index) {
    return {
        type: CHANGE_TODO_TO_DOING,
        index
    }
}

/**
 * @description:  状态有dong to todo
 * @param {type}
 * @return:
 */
export function changeDoingToDone(index) {
    return {
        type: CHANGE_DOING_TO_DONE,
        index
    }
}
