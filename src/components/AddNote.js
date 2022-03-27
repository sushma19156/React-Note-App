import React, { useState } from 'react'

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('')
    const chracterLimit =200;
    const handleChage=(event)=>{
        if(chracterLimit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    }
    const handleSaveClick = ()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText('');
        }
    }
  return (
    <div className='note new'>
        <textarea
        rows='8'
        cols="10"
        placeholder='type to add new....'
        value={noteText}
        onChange={handleChage}
        > </textarea>
        <div className='note-footer'>
        <small>{chracterLimit-noteText.length}</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
        </div>

       
    </div>
  )
}

export default AddNote