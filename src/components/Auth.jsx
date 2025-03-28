import React, { useState } from 'react';
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
    const { setUser } = useUser(); // Get setUser from context
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const changeSign = () => {
        setIsSignUp(!isSignUp);
        setError("");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return false;
        }
        if (!/[A-Z]/.test(formData.password)) {
            setError("Password must include at least 1 uppercase letter.");
            return false;
        }
        if (!/[\W_]/.test(formData.password)) {
            setError("Password must include at least 1 special character.");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (isSignUp) {
            localStorage.setItem(formData.email, JSON.stringify(formData));
            alert("Sign up successful! Please sign in.");
            setIsSignUp(false);
        } else {
            const storedUser = localStorage.getItem(formData.email);
            if (!storedUser) {
                setError("Invalid Username. Please sign up.");
                return;
            }

            const user = JSON.parse(storedUser);
            if (user.password !== formData.password) {
                setError("Incorrect password.");
                return;
            }

            alert(`Welcome ${user.firstName}`);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            setUser(user);
            navigate("/");
        }
    };

    return (
        <div className='signDiv'>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <>
                        <input type="text" name='firstName' placeholder="First Name" onChange={handleChange} required />
                        <input type="text" name='lastName' placeholder="Last Name" onChange={handleChange} required />
                        <input type="tel" name='phoneNumber' placeholder="Phone Number" onChange={handleChange} required />
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" name='dateOfBirth' onChange={handleChange} required />
                    </>
                )}
                <input type="email" name='email' placeholder="Enter your Email" onChange={handleChange} required />
                <input type="password" name='password' placeholder={isSignUp ? 'Create a Password' : 'Enter your Password'} onChange={handleChange} required />

                <button type="submit" className="btn">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
                <p onClick={changeSign}>{isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}</p>
            </form>

            {error && <p className='errorMsg'>{error}</p>}
        </div>
    );
}

export default Auth;
