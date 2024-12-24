import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem'
import noteContext from '../context/noteContext'
import { Link } from 'react-router-dom'

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.desc})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }


  return (
    <div className='container mx-auto'>
        <div className="flex justify-between">
            <h1 className='text-4xl text-white font-semibold py-10'>Your Notes</h1>
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-10"
            to="/addnote">Add Note</Link>
            </div>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {notes.length===0 && 'No notes to display'}
        {notes.map((note) => {
                    return <NoteItem key={note._id} title={note.title} desc={note.desc} id={note._id}/>
                })}
        </div>
        
    </div>
  )
}

export default Notes
