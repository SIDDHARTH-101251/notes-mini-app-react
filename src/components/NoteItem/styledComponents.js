// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.li`
  border: 1px solid;
  color: #aab8c8;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
`

export const NoteHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  color: #334155;
  margin: 0;
  width: 100%;
`
export const NotePara = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #475569;
  margin: 0;
  width: 100%;
`
