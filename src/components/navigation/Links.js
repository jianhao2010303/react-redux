/*
 * @Author: your name
 * @Date: 2019-12-19 13:20:29
 * @LastEditTime : 2019-12-19 13:20:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\components\navigation\NavLink.js
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Links extends React.Component {
    render() {
        return <NavLink {...this.props} activeClassName="active"></NavLink>
    }
}
