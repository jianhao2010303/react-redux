/*
 * @Author: your name
 * @Date: 2019-12-19 13:14:10
 * @LastEditTime : 2019-12-20 14:49:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\components\DoneComp.js
 */

import React, { Component } from 'react'
import { Collapse, Row, Col, Icon, Button } from 'antd'

export default class DoneComp extends Component {
    constructor(props) {
        super(props)
        this.handleDel = this.handleDel.bind(this)
    }

    handleDel(e) {
        this.props.onDel(e.currentTarget.getAttribute('data-key'))
    }

    render() {
        let number = 0
        this.props.todolist.map(item => {
            if (item.done) {
                number += 1
            }
            return true
        })

        const collapseStyle = {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
        }
        const Panel = Collapse.Panel

        return (
            <Collapse style={collapseStyle}>
                <Panel
                    header={
                        <Row>
                            <Col span={22}>
                                <h3>已完成事项</h3>
                            </Col>
                            <Col span={2}>
                                <Button size="small" shape="circle">
                                    {number}
                                </Button>
                            </Col>
                        </Row>
                    }>
                    <ul>
                        {this.props.todolist.map((item, i) => {
                            if (item.done) {
                                return (
                                    <li
                                        key={i}
                                        style={{
                                            opacity: item.istodo ? '0.7' : ''
                                        }}>
                                        <Row>
                                            <Col span={20}>
                                                <p>{item.todo}</p>
                                            </Col>
                                            <Col span={1}>
                                                <Icon
                                                    type="close-circle"
                                                    data-key={i}
                                                    style={{
                                                        fontSize: '20px'
                                                    }}
                                                    onClick={this.handleDel}
                                                />
                                            </Col>
                                        </Row>
                                    </li>
                                )
                            }
                            return true
                        })}
                    </ul>
                </Panel>
            </Collapse>
        )
    }
}