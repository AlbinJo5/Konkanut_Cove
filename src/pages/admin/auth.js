import React from 'react'
import styles from "@/styles/admin_styles/auth.module.scss"
import { Button } from '@nextui-org/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/router'

import Image from 'next/image'
import { login, resetPassword } from '@/utils/firebase'
import { ADMIN_ROUTES } from '@/admin_components/core/routes'
import { LocalStorage } from '@/admin_components/core/localStorage'
function Auth() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailExistsError, setEmailExistsError] = React.useState(false)
    const [passwordIncorrectError, setPasswordIncorrectError] = React.useState(false)
    const [resetEmailSent, setResetEmailSent] = React.useState(false)
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [forgotPassword, setForgotPassword] = React.useState(false)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEmailExistsError(false)
        setPasswordIncorrectError(false)
        setButtonDisabled(true)
        if (forgotPassword) {
            // forgot password
            // send email to reset password
            const resp = await resetPassword(email)
            if (resp.status) {
                setResetEmailSent(true)
            }
            else {
                if (resp.errorCode === 'auth/user-not-found') {
                    setEmailExistsError(true)
                }
            }
            setButtonDisabled(false)


        } else {
            // login
            const resp = await login(email, password)
            if (resp.status) {
                // set 3 days expiry for auth in local storage
                const expiryDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
                localStorage.setItem(LocalStorage.adminAuthExpiry, expiryDate.toISOString())
                router.push(ADMIN_ROUTES.INDEX)
            }
            else {
                if (resp.errorCode === 'auth/user-not-found') {
                    setEmailExistsError(true)
                }
                if (resp.errorCode === 'auth/wrong-password') {
                    setPasswordIncorrectError(true)
                }
                setButtonDisabled(false)
            }
        }
    }

    return (
        <div className={styles.conatiner} >
            <div className={styles.card}>
                <Image src="/assets/images/logo.svg" width={1000} height={1000} alt="logo" />
                <h1>Welcome to <span>Konkanut Cove</span></h1>
                {
                    forgotPassword ? resetEmailSent ? (
                        <div className={styles.resetEmailSent} >
                            <p>An email to reset your password has been sent to <span style={{
                                color: '#000',
                            }} > {email}</span>. Please check your inbox (and spam folder, just in case) and follow the instructions provided to reset your password.

                                If you do not receive the email within a few minutes, please try again or contact our support team for assistance. </p>
                        </div>
                    ) : (
                        <p>An email to reset your password will be sent to the email address provided.</p>
                    ) : null
                }



                <form onSubmit={handleSubmit} >
                    {
                        !resetEmailSent ? (
                            <>
                                <label htmlFor="admin_email">Email {
                                    emailExistsError ? <span> doesn&apos;t exists  </span> : null
                                } </label>
                                <input required id="admin_email" onChange={(e) => {
                                    setEmail(e.target.value)
                                }} type="email" placeholder='email@example.com' />
                            </>
                        ) : null
                    }
                    {
                        !forgotPassword ? !resetEmailSent ? (
                            <>
                                <label htmlFor="admin_psw">Password {
                                    passwordIncorrectError ? <span> is incorrect  </span> : null
                                }</label>
                                <div className={styles.password}>
                                    <input onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} required id="admin_psw" type={
                                        showPassword ? "text" : "password"
                                    } placeholder='password' />
                                    <div className={styles.passwordViewer} >
                                        {
                                            showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} /> : <AiOutlineEye onClick={() => setShowPassword(true)} />
                                        }
                                    </div>
                                </div>
                            </>
                        ) : null : null
                    }
                    {
                        forgotPassword ? resetEmailSent ? (
                            <div className={styles.resetPsw} onClick={() => {
                                setResetEmailSent(!resetEmailSent)
                            }}

                            >
                                <p onClick={()=>{
                                    setForgotPassword(!forgotPassword)
                                    setResetEmailSent(!resetEmailSent)
                                    setEmailExistsError(false)
                                    setPasswordIncorrectError(false)
                                    
                                }} ><IoIosArrowRoundBack />
                                    Back</p>
                                <p style={{ cursor: 'pointer', color: '#F45158' }}>

                                    Change Email
                                </p>
                            </div>
                        ) : (
                            <div className={styles.back} onClick={() => {
                                setForgotPassword(!forgotPassword)
                                setEmailExistsError(false)
                                setPasswordIncorrectError(false)
                            }} >
                                <IoIosArrowRoundBack />
                                Back
                            </div>
                        ) :
                            (<h6 onClick={() => {
                                setForgotPassword(!forgotPassword)
                                setEmailExistsError(false)
                                setPasswordIncorrectError(false)
                            }} >
                                Forgot Password?
                            </h6>)
                    }

                    {
                        resetEmailSent ? null : <Button disabled={buttonDisabled} type='submit' >
                            {
                                forgotPassword ? 'Send' : 'Login'
                            }
                        </Button>
                    }


                </form>
            </div>

        </div>
    )
}

export default Auth