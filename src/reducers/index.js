/*
 * @Author: your name
 * @Date: 2019-12-19 14:59:42
 * @LastEditTime : 2019-12-19 15:00:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\routers\index.js
 */
import { combineReducers } from 'redux'

import todolist from './Todo'

const reducer = combineReducers({
    todolist
})

export default reducer
