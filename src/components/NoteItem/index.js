// Write your code here
import {MainContainer, NoteHeading, NotePara} from './styledComponents'

const NoteItem = props => {
  const {note} = props
  const {title, text} = note
  return (
    <MainContainer>
      <NoteHeading>{title}</NoteHeading>
      <NotePara>{text}</NotePara>
    </MainContainer>
  )
}

export default NoteItem
