/*
 * @Author: your name
 * @Date: 2019-12-19 13:12:53
 * @LastEditTime : 2019-12-20 13:34:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactdemo05\src\components\TodoComp.js
 */
import React, { Component } from 'react'
import { Collapse, Row, Col, Icon, Button } from 'antd'
import PropTypes from 'prop-types'

class TodoComp extends Component {
    constructor(props) {
        super(props)

        this.handleToDoing = this.handleToDoing.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }

    handleToDoing(e) {
        let index = e.target.getAttribute('data-key')
        this.props.onTodoToDoing(index)
    }

    handleDel(e) {
        //let index = e.currentTarget.getAttribute('data-key')
        // console.log(e.currentTarget.getAttribute('data-key'))
        this.props.onDel(e.currentTarget.getAttribute('data-key'))
    }

    render() {
        let number = 0
        this.props.todolist.map(item => {
            if (item.istodo) {
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
                                <h3>新建事项</h3>
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
                            if (item.istodo) {
                                return (
                                    <li
                                        key={i}
                                        style={{
                                            opacity: item.istodo ? '0.7' : ''
                                        }}>
                                        <Row>
                                            <Col span={3}>
                                                <input
                                                    type="checkbox"
                                                    checked={!item.istodo}
                                                    onChange={this.handleToDoing}
                                                    data-key={i}
                                                />
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
TodoComp.propTypes = {
    onTodoToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired
}

export default TodoComp
