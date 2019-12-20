/*
 * @Author: your name
 * @Date: 2019-12-19 13:09:45
 * @LastEditTime : 2019-12-20 14:19:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\routers\Router.js
 */
import App from '../container/App'
import AllComp from '../container/AllContainer'
import TodoComp from '../container/TodoContainer'
import DoingComp from '../container/DoingContainer'
import DoneComp from '../container/DoneContainer'

export default [
    {
        path: '/',
        component: App,
        exact: true,
        routers: [
            {
                path: '/',
                component: AllComp,
                exact: true
            },
            {
                path: '/todo',
                component: TodoComp,
                exact: false
            },
            {
                path: '/doing',
                component: DoingComp,
                exact: false
            },
            {
                path: '/done',
                component: DoneComp,
                exact: false
            }
        ]
    }
]
