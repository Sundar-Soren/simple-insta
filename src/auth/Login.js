import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Base from '../components/Base'
import { useAuth } from '../hooks/AuthHooks'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()

    const { login, currentUser } = useAuth()


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setError('')
            setSuccess(true)
            history.push('/')

        } catch (error) {
            setError(error.message)
            setSuccess(false)

        }
        setLoading(false)
    }


    const LoginForm = () => (
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

            <button type="submit" disabled={loading} className="btn btn-primary w-100 mt-2">Log In</button>
        </form>
    )


    return (

        <Base>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-3 mt-5">
                        <div className="p-5 border border-3 rounded">
                            <div className="text-center">
                                <h2>Log In Here</h2>
                                {loading && <h5 className="alert alert-primary">Loading...</h5>}
                                {success && <h5 className="alert alert-success">Successfully log In</h5>}
                                {error && <h5 className="alert alert-warning">{error}</h5>}
                            </div>
                            {LoginForm()}
                        </div>
                        <div className="text-center pt-4">
                            <p>Need Account? <Link to='/signup'>SignIn</Link></p>
                        </div>
                    </div>

                </div>

            </div>
        </Base>
    )
}

export default Login
