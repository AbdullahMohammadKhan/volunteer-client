import React, { useContext, useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';



const Book = () => {
const history = useHistory();


const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(loggedInUser)

     fetch("https://guarded-island-47034.herokuapp.com/registration", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        
      })
      .then((success) => {
        if (success) {
          alert("review created successfully.");
        }
      });
    
history.push("/userDashboard");


  };

    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div style={{ textAlign: 'center' }}>
            

          
        
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="name"
              placeholder="Full Name"
              className="form-control"
              defaultValue={loggedInUser.name}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
           <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="mail"
              placeholder="Username or Email"
              className="form-control"
              defaultValue={loggedInUser.email}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
           <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="date"
              placeholder="Date"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
           <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="description"
              placeholder="Description"
              className="form-control"
              //value={description}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
           <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="type"
              placeholder="Service"
              className="form-control"
              value={bedType}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group text-right">
            {/* <Link to='/adminDashboard'> */}
            <button type="submit" className="btn btn-brand">
              Send
            </button>
            
          </div>
        </form>
     





            
        </div>
    );
};

export default Book;