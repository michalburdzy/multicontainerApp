import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes  = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data.notes);
    } catch(error){
      console.log(error);
      return [];
    }
  }
  useEffect(() => {
  async function getInitialNotes() {
    await fetchNotes();
  }
  getInitialNotes();
  }, [notes]);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios.post('/api/notes', {
        note: newNote
      });
    } catch(error){
      console.log(error);
    }

    await fetchNotes();
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
          <input value={newNote} onChange={(e) => setNewNote(e.target.value)}
           />
          <button>Submit</button>
        </form>

        <h3>All notes: </h3>
        {renderAllNotes()}
      </div>
    );
}

export default Notes;
