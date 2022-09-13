import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router';

import {BrowserRouter as Router,Link} from "react-router-dom";
export default function Login() {
    const history = useHistory();
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const loginSubmit=()=>{
        const userData={username,password};
        axios
      .post('http://localhost:3001/auth/v1/', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isAuthenticated', true);
        history.push('/');
      });

    }

    if (localStorage.getItem('isAuthenticated') === 'true') {
        history.push('/');
      }
      
    return (
        <div>
            <div className="container mt-4">
                <h2>Login</h2>
                <div className="row mt -3">
                    <div className="col-md-4">
                        <div className="form-group">
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your username" className="form-control"
                                onChange={(e)=>{setUserName(e.target.value)}}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter your password" className="form-control"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary"
                            onClick={loginSubmit}
                            >Submit</button>
                            <Link to="/register" className="nav-link" >Register </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
