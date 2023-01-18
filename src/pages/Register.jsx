import React from 'react';
import { Button, message, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import "./less/Login.less"
import {RegisterApi} from "../request/api";
import LoginCard from "../components/LoginCard";

export default function Register() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        RegisterApi({
            nick_name: values.nick_name,
            user_name: values.username,
            password: values.password,
            key:values.key,
        }).then(res => {
            console.log(res)
            if(res.status===200){
                message.success("注册成功").then();
                // 跳到登录页
                setTimeout(()=>{
                    navigate('/login')
                } ,500)
            }else{
                message.error(res.msg).then();
            }
        })
    };

    return (
        <div className="login">
            <LoginCard></LoginCard>
            <div className="login_box">
                <div className='register_form'>
                    <h1>注册</h1>
                    <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="nickname"
                        rules={[
                            {
                                required: true,
                                message: '请输入昵称!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入昵称"/>
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入登陆密码!',
                            },
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入登陆密码"/>
                    </Form.Item>

                    <Form.Item
                        name="key"
                        rules={[
                            {
                                required: true,
                                message: '请输入支付密码!',
                            },
                        ]}
                    >
                        <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入支付密码"/>
                    </Form.Item>

                    <Form.Item>
                        <Link style={{
                            float: 'right',
                        }} to="/login">已有账号?立即登录</Link>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" block>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </div>
    )
};