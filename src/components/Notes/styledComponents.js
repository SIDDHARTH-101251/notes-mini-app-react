// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 30px 10% 20px 10%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: Bree Serif;
  font-size: 32px;
  color: #4c63b6;
`

export const Card = styled.form`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  height: 300px;
  border: 0 solid;
  box-shadow: 0 4px 16px 0 #aab8c8;
  border-radius: 4px;
  margin-top: 15px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`

export const TitleInput = styled.input`
  height: 36px;
  width: 100%;
  border: 0 solid;
  outline: none;
`
export const Note = styled.textarea`
  height: auto;
  width: 100%;
  border: 0 solid;
  outline: none;
  margin-top: 10px;
  height: 175px;
`

export const AddButton = styled.button`
  background: #4c63b6;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
  height: 32px;
  width: 70px;
  border: 0 solid;
  border-radius: 4px;
  align-self: flex-end;
  margin-top: 8px;
`

export const NoNotesContainer = styled.div`
  height: 300px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoteItemContainer = styled.ul`
  min-height: 400px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 70%;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  padding: 0;
  list-style: none;
`

export const NoNotesImage = styled.img`
  width: 100px;
  height: 100px;
`

export const NoNotesHeading = styled.h1`
  font-family: Roboto;
  font-size: 28px;
  color: #475569;
`
export const NoNotesPara = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #475569;
  margin: 0;
`
