
import 'animate.css';

import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegisterError('');
        setSuccess('');


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully.');
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                setIsLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            })
    }

    const handleGithubSignIn = () => {
        setIsLoading(true);
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error)
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(false); 
    }, []);
    return (
        <div>
            {isLoading && <span className="loading loading-spinner loading-lg"></span>}
            <Helmet>
                <title>Residential | Login </title>
            </Helmet>
            <h2 className="text-3xl my-10 text-center animate__animated animate__fadeIn">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                
            </form>
            {
                registerError && <p className="text-red-700 text-bold text-center">{registerError}</p>
            }
            {
                success && <p className="text-green-600 text-bold text-center">{success}</p>
            }
            <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            <p className="text-center text-green-500"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
            <p className="text-center text-green-500"><button onClick={handleGithubSignIn} className="btn btn-ghost">Github Login</button></p>
            <Footer></Footer>
        </div>
    );
};

export default Login;
