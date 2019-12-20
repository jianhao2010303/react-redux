/*
 * @Author: your name
 * @Date: 2019-12-19 16:14:47
 * @LastEditTime : 2019-12-20 13:04:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\components\header\Header.js
 */
import React from 'react'
import Form from './HeaderForm'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <span className="title">备忘录</span>
                <Form className="form" onAdd={this.props.onAdd}></Form>
            </div>
        )
    }
}

export default Header
