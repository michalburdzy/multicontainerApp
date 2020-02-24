import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes  = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(async () => {
    const response = await axios.get('/api/notes');
    setNotes([...notes, ...response.data.notes])
  }, [notes])

  const handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/notes', {
      note: newNote
    });

    const newNotes = await axios.get('/api/notes');
    setNotes(newNotes.data.notes)
  };

  const renderAllNotes = () => {
    return (
      <div>
        {
          notes.map(note => (
          <div>{note}</div>
        ))}
      </div>
    )
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a new note:</label>
          <input value={newNote} onChange={(e) => setNewNote(e.target.value)} />
          <button>Submit</button>
        </form>

        <h3>All notes: </h3>
        {renderAllNotes()}
      </div>
    );
}

export default Notes;
