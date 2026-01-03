import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const role = loginUser(email,password);
        if (!role){
            alert("Invalid credentials");
            return;
        }
        navigate(role ==="admin" ? "/amin/dashboard" :"/customers/dashboard");
    };
    return(
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}