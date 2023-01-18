import React from 'react';
import { Button, message, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import "./less/Login.less"
import {LoginApi} from "../request/api";
import LoginCard from "../components/LoginCard";

export default function Login() {
    const navigate = useNavigate()

    const onFinish = (values) => {
        LoginApi({
            user_name: values.username,
            password: values.password
        }).then(res => {
            console.log(res)
            if(res.status===200){
                message.success("登陆成功").then();
                if (res.status === 200){
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("user_name",res.data.user.user_name);
                    localStorage.setItem("avatar",res.data.user.avatar);
                    // 跳转
                    setTimeout(()=>{
                        navigate('/')
                    },750)
                }else{
                    message.error(res.msg).then(r => "")
                }
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
                    <h1>登陆</h1>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
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
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"/>
                        </Form.Item>

                        <Form.Item>
                            <Link style={{
                                float: 'right',
                            }} to="/register">还没账号?立即注册</Link>                        </Form.Item>

                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" block>
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
};