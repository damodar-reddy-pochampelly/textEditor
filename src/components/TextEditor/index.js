import {Component} from 'react'

import {
  BgContainer,
  EditorCard,
  EditorTitleContainer,
  Title,
  EditorImage,
  EditorContainer,
  ButtonsContainer,
  Button,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  Text,
  ButtonItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {boldActive: false, italicActive: false, underlineActive: false}

  changeBoldness = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  changeStyle = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  changeTextDecoration = () => {
    this.setState(prevState => ({underlineActive: !prevState.underlineActive}))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state
    return (
      <BgContainer>
        <EditorCard>
          <EditorTitleContainer>
            <Title>Text Editor</Title>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </EditorTitleContainer>
          <EditorContainer>
            <ButtonsContainer>
              <ButtonItem>
                <Button
                  data-testid="bold"
                  onClick={this.changeBoldness}
                  active={boldActive}
                >
                  <BoldIcon />
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  data-testid="italic"
                  onClick={this.changeStyle}
                  active={italicActive}
                >
                  <ItalicIcon />
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  data-testid="underline"
                  onClick={this.changeTextDecoration}
                  active={underlineActive}
                >
                  <UnderlineIcon />
                </Button>
              </ButtonItem>
            </ButtonsContainer>
            <Text
              boldActive={boldActive}
              italicActive={italicActive}
              underlineActive={underlineActive}
              rows={25}
              cols={58}
            />
          </EditorContainer>
        </EditorCard>
      </BgContainer>
    )
  }
}

export default TextEditor
