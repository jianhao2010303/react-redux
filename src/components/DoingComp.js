/*
 * @Author: your name
 * @Date: 2019-12-19 13:13:42
 * @LastEditTime : 2019-12-20 14:08:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\components\DoingComp.js
 */
import React, { Component } from 'react'
import { Collapse, Row, Col, Icon, Button } from 'antd'

export default class DoingComp extends Component {
    constructor(props) {
        super(props)

        this.handleDel = this.handleDel.bind(this)
        this.handleToDone = this.handleToDone.bind(this)
    }

    handleToDone(e) {
        let index = e.target.getAttribute('data-key')
        this.props.changeDoingToDone(index)
    }

    handleDel(e) {
        this.props.onDel(e.currentTarget.getAttribute('data-key'))
    }

    render() {
        let number = 0
        this.props.todolist.map(item => {
            if (item.doing) {
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
                                <h3>进行中事项</h3>
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
                            if (item.doing) {
                                return (
                                    <li
                                        key={i}
                                        style={{
                                            opacity: item.istodo ? '0.7' : ''
                                        }}>
                                        <Row>
                                            <Col span={3}>
                                                <input type="checkbox" checked={!item.doing} onChange={this.handleToDone} data-key={i} />
                                            </Col>
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
