import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; 

function UserProfile() {
    const { user, setUser } = useUser(); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser && !user) { 
            setUser(JSON.parse(storedUser));
        } else if (!storedUser) {
            navigate("/auth");
        }
    }, [navigate, user, setUser]); 


    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null); 
        navigate("/auth"); 
    };

    if (!user) return null;

    return (
        <div className="ProfileContainer">
            <h1>Profile</h1>
            <p>Username: {user.firstName}</p>
            <p>Fullname: {user.firstName} {user.lastName}</p>
            <p>DOB: {user.dateOfBirth}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserProfile;
