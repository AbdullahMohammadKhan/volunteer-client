import React,{useEffect, useState} from 'react'

const AdminDashboard = () => {
    const [list, setList] = useState([])
     useEffect(() => {
    fetch("https://guarded-island-47034.herokuapp.com/getRegistrationAll")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, []);
    return (
        <div>
            adminDashboard
            
             {list.map(((book)=><div>{book.mail}</div>))}
            
        </div>
    )
}

export default AdminDashboard
