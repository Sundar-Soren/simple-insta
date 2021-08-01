import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Base from '../components/Base'

import { useAuth } from '../hooks/AuthHooks'

const Signup = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const { signup, currentUser } = useAuth()
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("password do not match")
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            setSuccess(true)
            setError('')
            history.push('/')

        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }


    const signUpForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="inputEmail" className=" col-form-label">Email</label>
                <div >
                    <input type="email" className="form-control" ref={emailRef} id="inputEmail" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="Password" className="col-form-label" >Password</label>
                <div >
                    <input type="password" className="form-control" ref={passwordRef} id="Password" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="confirmPassword" className=" col-form-label">Confirm Password</label>
                <div >
                    <input type="password" className="form-control" ref={confirmPasswordRef} id="confirmPassword" />
                </div>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-100 mt-2">Sign in</button>
        </form>
    )


    return (

        <Base>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-3 mt-5">
                        <div className="p-5 border border-3 rounded">
                            <div className="text-center pb-4">
                                <h2>Sign Up Here</h2>
                            </div>
                            {loading && <h5 className="alert alert-primary m-2" >Loading...</h5>}
                            {success && <h5 className="alert alert-success m-2" >New Account Created Successfully</h5>}
                            {signUpForm()}
                            {error && <h5 className="alert alert-danger mt-3" >{error}</h5>}
                        </div>
                        <div className="text-center pt-4">
                            <p>Have An Account?  <Link to='/login'>Log In</Link></p>
                        </div>
                    </div>

                </div>

            </div>
        </Base>
    )
}

export default Signup
