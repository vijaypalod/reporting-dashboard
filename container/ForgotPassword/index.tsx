import React, { useState, useEffect } from 'react';
import Text from '@components/Text';
import { Button, Form, Input, Card } from 'antd';
import axios from 'axios';
import router from 'next/router';
import { isValidEmail } from '@utils/constants';
import { BASE_URL } from 'api/url';
import styles from './styles.module.scss';
import 'antd/dist/antd.css';

// type ForgotPasswordFormType = {
//     email: string;
// };

const ForgotPassword: React.FC = () => {
    const [values, setValues] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        if (isValidEmail(values)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [values]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setValues(email)
        }
    })

    const sendOtp = async () => {
        try {
            const res: any = await axios.post(`${BASE_URL}/users/forgot_password`, JSON.stringify({
                email: values,
            }),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );
            if(res?.statusCode === 200){
                router.push('/users/otp');

            }
        } catch (err) {
            // console.log('err',err);
            setErrMsg("")
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
                <div className="">
                    <Text tagType="h3" color="black" font="h3">
                        Email
                    </Text>
                    <br />
                    <Form
                        // name=""
                        className="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="Email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                placeholder="Email"
                                value={values}
                                className=""
                                onChange={(e) => setValues(e.target.value)}
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isDisabled}
                            onClick={sendOtp}
                            // className={styles.}
                        >
                            Send OTP
                        </Button>
                    </Form>
                </div>
            </Card>
        </>
    );
};
export default ForgotPassword;
