import React, { useState, useEffect, useCallback } from 'react';
import Text from '@components/Text';
import { Button, Input } from 'antd';
import axios from 'axios';
import styles from './styles.module.scss';
import { BASE_URL, GET_OTP } from '../../api/url';

// type GenericEmailFormType = {
//     email: string
// }

const OTP: React.FC = () => {
    const [otp, setOtp] = useState('');
    const [otpDigitArr, setotpDigitArr] = useState<any>({ otp1:'',otp2:'',otp3:'',otp4:'',otp5:'',otp6:'' });
    const [isDisabled, setIsDisabled] = useState(true);
    const [timer, setTimer] = useState(60);
    const timeOutCallback = useCallback(() => setTimer((currTimer) => currTimer - 1), []);
    const [errMsg, setErrMsg] = useState('');

    const verifyOtp = async () => {
        // eslint-disable-next-line no-console
        console.log(otpDigitArr)
        // if(otp === ){
        // }
    };
    useEffect(() => {
        timer > 0 && setTimeout(timeOutCallback, 1000);
        if (otp) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [otp, timer, timeOutCallback]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${GET_OTP}`)
            .then(() => {
                // console.log('res',res);
                verifyOtp();
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // console.log('err', err);
                setErrMsg('');
            });
    }, []);

    const resendBtn = () => {
        if (!timer) {
            setTimer(60);
        }
    };
    
    const setDigitArr = (e:any) =>{
        setotpDigitArr({
            ...otpDigitArr,
            [e.target.name]:e.target.value
        })
    }

    const inputfocus = (elmnt:any) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
        //   console.log("next");
         
            const next = elmnt.target.tabIndex;
            if (next < 7) {
              elmnt.target.form.elements[next].focus()
            }
        }
    
      } 
      const handleSubmit = () =>{
         // eslint-disable-next-line no-console
         console.log(otpDigitArr)
      }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className={styles.otpBody}>
                <div className="">
                    {/* <Text tagType="h3" color="black" font="h3">
                        OTP
                    </Text> */}
                    <Text tagType="p" color="black" font="pRegular">
                        Messenger has send a code to verify your account
                    </Text>
                    <br />

                    <div className={styles.inputOtp}>

                        <Input
                            name="otp1"
                            // autoComplete="off"
                            // className="otpInput"
                            // value={this.state.otp1}
                            // onKeyPress={e.keyPressed}
                            // onChange={e => e.handleChange("otp1", e)}
                            tabIndex="1" 
                            onKeyUp={e => inputfocus(e)}
                            type="text"
                            value={otpDigitArr.otp1}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)} 
                            autoComplete="0ff"
                            maxLength="1"
                        />
                        <Input
                            name='otp2'
                            type="text"
                            value={otpDigitArr.otp2}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)}  
                            autoComplete="0ff"
                            tabIndex="2" 
                            onKeyUp={e => inputfocus(e)}
                            maxLength="1" 
                        /> 
                        <Input
                            name='otp3'
                            value={otpDigitArr.otp3}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)}  
                            autoComplete="0ff"
                            tabIndex="3" 
                            onKeyUp={e => inputfocus(e)}
                            maxLength="1" 
                        />
                        <Input
                            name='otp4'
                            value={otpDigitArr.otp4}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)}  
                            autoComplete="0ff"
                            tabIndex="4" 
                            onKeyUp={e => inputfocus(e)}
                            maxLength="1" 
                        />
                        <Input
                            name='otp5'
                            value={otpDigitArr.otp5}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)}  
                            autoComplete="0ff"
                            tabIndex="5" 
                            onKeyUp={e => inputfocus(e)}
                            maxLength="1" 
                        />
                        <Input
                            name='otp6'
                            value={otpDigitArr.otp6}
                            className={styles.inputFields}
                            onChange={(e) => setDigitArr(e)}  
                            autoComplete="0ff"
                            tabIndex="6" 
                            onKeyUp={e => inputfocus(e)}
                            maxLength="1" 
                            // onChange={handleChange}
                            // value={otpDigitArr.otp1}
                            // inputStyle="inputStyle"
                            // numInputs={6}
                            // separator={<span></span>}
                        /> 
                        
                    </div>
                    <div>{errMsg}</div>
                    <br />
                    <Button
                        className={styles.btnverify}
                        type="primary"
                        htmlType="submit"
                        // disabled={isDisabled}
                        onClick={verifyOtp}
                        style={{ backgroundColor: 'black', color: 'white', width: '350px' }}
                    >
                        Verify
                    </Button>
                    <Button
                        className={styles.btnresend}
                        type="default"
                        // onClick={resendBtn}
                        disabled={isDisabled}
                    >
                        Resend : ({timer})
                    </Button>
                </div>
            </div>
        </form>
        </>
    );
};
export default OTP;
