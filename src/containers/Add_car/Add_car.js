import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
export default class Add_car extends Component { 

    render() {
        return (
        <Form style={{ margin:'0 auto'}}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Car Model"
        name="Car Model"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Engine No."
        name="Engine No."
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset:12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit Car
        </Button>
      </Form.Item>
    </Form>
        )
    }
}
