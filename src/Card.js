import React,{useState} from 'react';
import {getMatchDetail} from './Api';

function Card({match}) {

    const[detail , setDetail]= useState([]);
    const [open , setOpen] =useState(false);

    const handleClick = (id) => {
        getMatchDetail(id).then((data)=> {
            console.log(data);
            setDetail(data);
            handleOpen();
        })
    }

    const handleClose = ()=> {
        setOpen(false);
    }

    const handleOpen = ()=> {
        setOpen(true);
    }

    const getDialog= ()=>(
        <dialog open={open} >
            Match Details<br />
    <p>{detail.matchStarted ? ("Match is started"):("Match is not started yet")}</p><br />
            <span>{detail.score}</span><br />
            <button onClick={handleClose}>Close</button>
        </dialog>
    )
        
    
    
    return (
        //    getMatchCard()
        <div className="card">
            <p>{match['team-1']} vs {match['team-2']}</p>
    <p>Start Time {new Date(match.dateTimeGMT).toLocaleString()}</p>
           <button onClick={()=> {
               handleClick(match.unique_id);
           }}>Show more details</button>
          { getDialog()}
        </div>
    )
}

export default Card
