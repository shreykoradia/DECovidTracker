import React from 'react'
import './covidstrain.css'
import Card from './Card'
import notes from './CardDetails'

function Covidstrain() {
  return (
    <div>
    <div className='heading'> Covidstrain Data </div>
    <div className='details'>
    </div>
    {notes.map(note=> 
  (
    <Card
      key={note.key}
      title={note.title}
      content={note.content}
    />
  )
)}
    </div>
    
  )
}

export default Covidstrain