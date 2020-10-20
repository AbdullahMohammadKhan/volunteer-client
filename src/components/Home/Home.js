import React from 'react';
import Task from '../Task/Task';

const Home = () => {
    
    const tasks=[
        {
            name:"Child support",
            img:"https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:'ChildSupport'
        },
        {
            name:"Refugee support",
            img:"https://images.pexels.com/photos/4057649/pexels-photo-4057649.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType: 'RefugeHelp'
        },
        {
            name:"Water support",
            img:"https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:"WaterService"
        },
        {
            name:"Food support",
            img:"https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:"FoodService"
        },
        {
            name:"Shelter support",
            img:"https://images.pexels.com/photos/112378/pexels-photo-112378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:"ShelterHelp"
        },
        {
            name:"Study support",
            img:"https://images.pexels.com/photos/618116/pexels-photo-618116.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:"StudyHelp"
        },
        {
            name:"Helping Hand",
            img:"https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            taskType:"HelpingHand"
        },
    ]
    return (
        
        <>
        <h1 className="text-center">My Volunteer Friends</h1>
        <div className="App row">



{
    tasks.map(task =><Task key={task.taskType} task={task}/>)
}

        </div>  
        </>  
    );
};

export default Home;