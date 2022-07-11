import React from "react";
import { useParams,useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useNavigate()
    const location = useLocation()
    
    return (
        <>
            <div className="back-button-container">
                <Button event_click={() => history(-1)}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.tasktitle}</h2>
                <p style={{color:"black"}}>
                    {location.state.taskdetail}
                </p>
            </div>        
        </>
    )
}
export default TaskDetails;