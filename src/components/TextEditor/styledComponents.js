import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const BoldIcon = styled(VscBold)`
  width: 20px;
  height: 20px;
`

export const ItalicIcon = styled(GoItalic)`
  width: 20px;
  height: 20px;
`

export const UnderlineIcon = styled(AiOutlineUnderline)`
  width: 20px;
  height: 20px;
`

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const EditorCard = styled.div`
  display: flex;
  background-color: #1b1c22;
  padding: 10px;
  width: 60vw;
  height: 80vh;
`
export const EditorTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #f1f5f9;
  text-align: center;
`
export const EditorImage = styled.img`
  width: 200px;
`
export const EditorContainer = styled.div`
  width: 55%;
`
export const ButtonsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  border: 1px solid #334155;
  padding: 5px 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 5px;
  background-color: #25262c;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`
export const ButtonItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => {
    if (props.active) {
      return `#faff00`
    }
    return `#f1f5f9`
  }};
`
export const Text = styled.textarea`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-weight: ${props => {
    if (props.boldActive) {
      return 'bold'
    }
    return 'normal'
  }};
  font-style: ${props => {
    if (props.italicActive) {
      return 'italic'
    }
    return 'normal'
  }};
  text-decoration: ${props => {
    if (props.underlineActive) {
      return 'underline'
    }
    return 'normal'
  }};
  background-color: transparent;
  border: 1px solid #334155;
  outline: none;
  margin-top: 0px;
  border-radius: 5px;
  border-top: 0px;
  background-color: #25262c;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`
