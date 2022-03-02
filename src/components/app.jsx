import react, { useState } from "react";
import Navbar from "./navbar";
import Note from "./notes";
import Footer from "./footer";
import Form from './form'

function App(){

  const [Notes,setNotes] = useState([])

  function addNote(newNote){
      setNotes((prevValue)=>{
        return [...prevValue,newNote]
      })
  }

  function removeNote(id){
     setNotes((prevValue)=>{
       return prevValue.filter((el,index)=>{
          return index !==id
       })
     })
  }

    return <div>
      <Navbar />
      <Form onAdd={addNote} />

      <div className="notes">
      {Notes.map((note,index)=>{
        return <Note 
        onDelete={removeNote}
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        />
      })}
      </div> 
     
      <Footer/>
    </div>
}

export default App;