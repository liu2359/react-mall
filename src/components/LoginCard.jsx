import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const LoginCard = () => (
    <Card
        hoverable
        style={{
            top:40,
            width: 300,
            left:150,
            textAlign:"center"
        }}
        cover={<img style={{
            height:450,
        }} alt="example" src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg" />}
    >
        <Meta title="Welcome To FanOne Mall" description="Talk is cheap. Show me the goods." />
    </Card>
);

export default LoginCard;