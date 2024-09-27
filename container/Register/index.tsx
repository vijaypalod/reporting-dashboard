import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import Text from 'components/Text';
import axios from 'axios';
import router from 'next/router';
import { isValidPassword } from '@utils/constants';
import styles from './styles.module.scss';
import { BASE_URL } from '../../api/url';

const { Option } = Select;

const inputValues = {
    name: '',
    companyName: '',
    role: '',
    password: '',
};

const Register: React.FC = () => {
    // const [passwordVisible, setPasswordVisible] = React.useState(false);
    // const [name, setName] = useState('');
    // const [companyName, setCompanyName] = useState('');
    // const [role, setRole] = useState('');
    // const [password, setPassword] = useState('');

    const [values, setValues] = useState(inputValues);
    const [isDisabled, setIsDisabled] = useState(true);

    const inputChange = (e: any) => {
        setValues(e.target.value);
    };

    useEffect(() => {
        if (
            values.name &&
            values.companyName &&
            values.role &&
            isValidPassword(values.password)
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    },[values]);

    const register = async () => {
        try {
            await axios.post(`${BASE_URL}/users/register`, {
                username: values.name,
                password: values.password,
                company: values.companyName,
                role: values.role,
            });
            router.push('/users/login');
        } catch (err) {
            // console.log('err',err);   
        }
    };

    return (
        <>
            <Card
                style={{
                    width: '40%',
                    height: '750px',
                    boxShadow: '0px 0px 13px rgba(0, 0, 0, 0.1)',
                }}
                className={styles.card}
            >
                <div className={styles.cardBody}>
                    <div>
                        <Text tagType="h3" color="black" font="h3">
                            Create an Account
                        </Text>
                    </div>
                    <Form className={styles.form} onFinish={register}>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input
                                placeholder="Name"
                                value={values.name}
                                onChange={inputChange}
                                className={styles.inputFields}
                                required
                            />
                        </Form.Item>
                        <Form.Item
                            name="company name"
                            rules={[{ required: true, message: 'Please input your company name!' }]}
                        >
                            <Input
                                placeholder="Company Name"
                                value={values.companyName}
                                onChange={inputChange}
                                className={styles.inputFields}
                                required
                            />
                        </Form.Item>
                        <Form.Item
                            name="role"
                            rules={[{ required: true, message: 'Please input your role!' }]}
                        >
                            <Input.Group compact className={styles.inputFields}>
                                <Select
                                    style={{ width: '100%' }}
                                    defaultValue={values.role}
                                    placeholder="Select Role"
                                >
                                    <Option value="Super Admin">Super Admin</Option>
                                    <Option value="Admin">Admin</Option>
                                </Select>
                            </Input.Group>
                        </Form.Item>
                        <Form.Item
                            name="company name"
                            rules={[{ required: true, message: 'Please input your company name!' }]}
                        >
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                                value={values.password}
                                className={styles.inputFields}
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" disabled={isDisabled}>
                            Create an account
                        </Button>
                    </Form>
                </div>
            </Card>
        </>
    );
};
export default Register;
