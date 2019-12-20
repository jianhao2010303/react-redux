/*
 * @Author: your name
 * @Date: 2019-12-19 13:23:56
 * @LastEditTime : 2019-12-20 13:13:07
 * @LastEditors  : Please set LastEditors
 * @Description: 导航菜单
 * @FilePath: \reactdemo05\src\components\navigation\Navigation.js
 */
import React from 'react'
import Links from './Links'
import { Row, Col } from 'antd'

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <Links to="/" exact>
                            全部&nbsp;
                            {this.props.allMemos}
                        </Links>
                    </Col>
                    <Col span={6}>
                        <Links to="/todo">
                            新建事项&nbsp;
                            <span>{this.props.todoNumber}</span>
                        </Links>
                    </Col>
                    <Col span={6}>
                        <Links to="/doing">
                            正在进行
                            <span>{this.props.doingNumber}</span>
                        </Links>
                    </Col>
                    <Col span={6}>
                        <Links to="/done">
                            已完成
                            <span>{this.props.doneNumber}</span>
                        </Links>
                    </Col>
                </Row>
            </div>
        )
    }
}
