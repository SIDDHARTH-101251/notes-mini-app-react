// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  MainHeading,
  Card,
  TitleInput,
  Note,
  AddButton,
  NoteItemContainer,
  NoNotesImage,
  NoNotesContainer,
  NoNotesHeading,
  NoNotesPara,
} from './styledComponents'
import NoteItem from '../NoteItem'

const NotesViewsStatus = {
  noNotes: 'NO_NOTES',
  notes: 'NOTES',
}

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, addToList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeText = event => setText(event.target.value)

  const onClickAddButton = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      text,
    }
    addToList(prevState => [...prevState, newNote])
    setTitle('')
    setText('')
  }

  // Dynamically calculate view status based on `notesList` length
  const view =
    notesList.length === 0 ? NotesViewsStatus.noNotes : NotesViewsStatus.notes

  let content
  switch (view) {
    case NotesViewsStatus.noNotes:
      content = (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesPara>Notes you add will appear here</NoNotesPara>
        </NoNotesContainer>
      )
      break
    case NotesViewsStatus.notes:
      content = (
        <NoteItemContainer>
          {notesList.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </NoteItemContainer>
      )
      break
    default:
      content = null
  }

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <Card onSubmit={addToList}>
        <TitleInput
          type="text"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <Note
          value={text}
          placeholder="Take a Note..."
          onChange={onChangeText}
        />
        <AddButton type="submit" onClick={onClickAddButton}>
          Add
        </AddButton>
      </Card>
      {content}
    </MainContainer>
  )
}

export default Notes
