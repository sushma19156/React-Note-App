import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NoteList({ notes, handleAddNote, handledeleteNote }) {

  return (
    <div className='note-list'>
      {
        notes.map((note) => (

          <Note id={note.id} 
          text={note.text} 
          date={note.date} 
          handledeleteNote={handledeleteNote} />
        ))
      }
      <AddNote handleAddNote={handleAddNote}
      />
      {/* <Notes/>
      <Notes/>
      <Notes/> */}






    </div>
  )
}

export default NoteList