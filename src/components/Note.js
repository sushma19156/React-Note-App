import { logDOM } from '@testing-library/react';
import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

function Notes({id,text,date,handledeleteNote}) { 
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handledeleteNote(id)}className="delete-icon" size="1.3em" />

            </div>
        </div>
    )
}

export default Notes