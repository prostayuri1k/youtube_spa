import {Button, Form, Input, notification} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {type LoginData, usersApi} from "../../API/UsersAPI/usersApi.ts";
import {useState} from "react";
import {useNavigate} from "react-router";

const AuthorizationForm = () => {

    type NotificationType = 'success' | 'info' | 'warning' | 'error';

    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const openNotificationWithIcon = (type: NotificationType, message: string) => {
        api[type]({
            message: message,
        });
    };


    const onFinish = async (loginData: LoginData) => {
        setLoading(true);
        return await usersApi.login(loginData)
            .then((res) => {
                openNotificationWithIcon('success', 'Успешный вход!');
                localStorage.setItem('token', res.data.token);
                navigate('search/default');
            })
            .catch((err) => {
                if (err.response) {
                    openNotificationWithIcon('error', err.response.data.message);
                }
            })
            .finally(() => {setLoading(false);});
    }


return (
    <>
        {contextHolder}
        <Form
            name="login"
            initialValues={{remember: true}}
            onFinish={onFinish}
            size={"large"}
        >
            <Form.Item
                name={"email"}
                rules={[{required: true, message: "Please input your email!"}]}
            >
                <Input prefix={<UserOutlined/>} placeholder={"Email"}/>
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[{required: true, message: "Please input your password!"}]}
            >
                <Input.Password prefix={<LockOutlined/>} placeholder={"Password"}/>
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit" loading={loading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    </>
);
}
;

export default AuthorizationForm;