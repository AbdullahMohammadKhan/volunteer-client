import React,{useEffect,useState,useContext} from 'react'
import { UserContext } from '../../../App';
import {Card,Button} from "react-bootstrap"

const UserDashboard = () => {
    let deleteid=(id)=>{
        fetch(`https://guarded-island-47034.herokuapp.com/delete/${id}`,{
            method: 'DELETE',

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })


    }
    const [userList, setUserList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=> {
    fetch("https://guarded-island-47034.herokuapp.com/getRegistrationByMail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
        console.log("data:"+data);
      });
  }, []);
    return (
        <div style={{textAlign: "center !important"}} className="container text-center align-center">
            <div className="row text-center">  
            </div>
    <div>{userList.map(list=>{
        return (
            <Card style={{ width: '18rem' }}>
                             {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                             <Card.Body>
                                 <Card.Title>{list.type}</Card.Title>
                                 <Card.Text>
                                                 {list.date}
                                 </Card.Text>
                               <Button onClick={()=>deleteid((list._id))} variant="primary">Cancel</Button>
                             </Card.Body>
                         </Card>
        )
    })}</div>
            
               
            
            
          
            
        </div>
    )
}

export default UserDashboard
