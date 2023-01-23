import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

const Notification = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const {msg}=props
    const openNotification = () => {
        api.open({
            message: 'Notification Title',
            description: msg,
            icon: (
                <SmileOutlined
                    style={{
                        color: '#108ee9',
                    }}
                />
            ),
        });
    };

    return openNotification
};

export default Notification;