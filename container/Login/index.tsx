import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Button, Checkbox, Form, Input, Space, Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Text from '@components/Text';
// import cx from 'classnames';
import axios from 'axios';
import { isValidPassword, isValidEmail } from '@utils/constants';
import { BASE_URL } from '../../api/url';
import styles from './styles.module.scss';
// import classNames from 'classnames';

// const loginFormValues = {
//     email: '',
//     password: '',
// };

const Login: React.FC = () => {
    const router = useRouter();
    // const userRef = useRef();
    // const [loginValues, setLoginValues] = useState(loginFormValues);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    // useEffect(() => {
    //     userRef.current.focus()
    // },[])

    
    useEffect(() => {
        if (isValidEmail(email) && isValidPassword(password)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email, password]);

    const onFinish = async (e: any) => {
        // e?.preventDefault();
        // console.log('Received values of form: ', values);
        // console.log('login values', isEmail, isPassword);
        localStorage.setItem("email", email);
        try {
            const res: any =  await axios.post(`${BASE_URL}/users/login`, JSON.stringify({
                email: email,
                password: password,
            }),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );
            if (res?.statusCode === 200) {
                localStorage.setItem("authToken", res?.payload?.authToken);
                

                router.push('/reports');
            }
            // const accessToken = 
            // console.log('res', res);
        } catch (err) {
            // console.log('err', err);
            setErrMsg("login failed");
        }
    };

    // const handleChange = (e: any) => {
    //     console.log('login values');
    //     setLoginValues(e.target.value);
    // };

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
                            Login
                        </Text>
                      
                        <Text tagType="p" color="black" font="pRegular">
                            Welcome! Please enter your details
                        </Text>
                    </div>
                    <br />
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="Email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input 
                                placeholder="Email"
                                // ref={userRef}
                                value={email}
                                className={styles.inputFields}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            // className={styles.inputFields}
                            
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                type='Password'
                                // id='password'
                                // data-index="1"
                                className={styles.Password}
                                // className={styles.inputFields}
                        
                                placeholder="Password"
                                
                                style={{
                                    
                                    // fontSize: '40px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingBottom: '0px',
                                    width: '100%',
                                    height: '50px',
                                    borderBottom: '0.5px solid #E0E0E0'
                                    
                                    
                                }}
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                                value={password}
                                
                                onChange={(e) => setPassword(e.target.value)}
                                
                            />
                            
                        </Form.Item>
                        <Form.Item className={styles.wrapperDiv}>
                            <Space
                                direction="horizontal"
                                style={{ width: '100%', justifyContent: 'space-between', display: 'flex', paddingTop: '40px', border: 'none' }}
                            >
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="forgotlogin-form-" href="/forgotPassword">
                                    Forgot password
                                </a>
                            </Space>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.loginFormButton}
                                disabled={isDisabled}
                            >
                                Log in
                            </Button>
                        </Form.Item>
                        {/* <Button
                            type="default"
                            className={styles.registerButton}
                            onClick={() => router.push('/emailVerify')}
                        >
                            Register
                        </Button> */}
                    </Form>
                </div>
            </Card>
        </>
    );
};

export default Login;
