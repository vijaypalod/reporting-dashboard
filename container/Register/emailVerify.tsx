import React, { useState, useEffect } from 'react';
import Text from '@components/Text';
import { Button, Form, Input, Card } from 'antd';
import axios from 'axios';
import router from 'next/router';
import { isValidEmail } from '@utils/constants';
import { BASE_URL } from '../../api/url';
import styles from './styles.module.scss';

// type GenericEmailFormType = {
//     email: string;
// };

const GenericEmail: React.FC = () => {
    const [values, setValues] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (isValidEmail(values)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [values]);

    const verifyEmail = async () => {
        try {
            await axios.post(`${BASE_URL}/users/email_verify`, {
                email: values,
            });
            router.push('/users/otp');
        } catch (err) {
            // console.log(err);
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
                        Register Email
                    </Text>
                    <br />
                    <Form
                        className="login-form"
                        initialValues={{ remember: true }}
                        // onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="Email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                placeholder="Email"
                                value={values}
                                className={styles.inputFields}
                                onChange={(e) => setValues(e.target.value)}
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isDisabled}
                            onClick={verifyEmail}
                        >
                            Verify Email
                        </Button>
                    </Form>
                </div>
            </Card>
        </>
    );
};
export default GenericEmail;
