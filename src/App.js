import './App.css';
import NoteList from './components/NoteList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import SearchNote from './components/SearchNote';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is my first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "this is my first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "this is my first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "this is my first note!",
    date: "15/04/2021"
  }

  ])
  const [searchText, setsearchText] = useState('')
  const [darkMode, setdarkMode] = useState(false)

  useEffect(() => {
    const saveNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )
    if(saveNotes){
      setNotes(saveNotes)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  }, [notes])
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) =>
      note.id !== id)
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleDarkMode={setdarkMode}/>
      <SearchNote handleSearchNote={setsearchText} />
      <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote}
        handledeleteNote={deleteNote}
      />

    </div>
    </div>
    
  );
}

export default App;
