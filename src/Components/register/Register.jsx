
import React from 'react';


export default function Register(props) {

    
 

  
 

    return (
    <div>
        
        
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            
            className="form-control"
            aria-describedby="name"
          />
          </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            
            className="form-control"
            aria-describedby="email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="phone"
            
          />
        </div>

        
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            
            aria-describedby="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      
    </div>

    )
}
