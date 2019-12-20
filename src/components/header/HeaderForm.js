/*
 * @Author: your name
 * @Date: 2019-12-19 15:49:58
 * @LastEditTime : 2019-12-20 13:11:58
 * @LastEditors  : Please set LastEditors
 * @Description: 头部
 * @FilePath: \reactdemo05\src\components\header\Header.js
 */
import React from 'react'
import { Form, Icon, Input, Button } from 'antd'

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields()
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
            console.log(this.props)
            this.props.onAdd(values.username)
            this.props.form.resetFields()
            this.props.form.validateFields()
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username')

        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="关键词"
                            />
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            增加
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create({ name: 'horizontal_login' })(Header)
