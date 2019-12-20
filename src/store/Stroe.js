/*
 * @Author: your name
 * @Date: 2019-12-19 14:11:05
 * @LastEditTime : 2019-12-19 14:11:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\store\Stroe.js
 */
import { createStore } from 'redux'
import reducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState)
    return store
}
