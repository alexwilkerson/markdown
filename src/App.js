import React, { Component } from 'react';
// import marked from 'marked';
import InputMarkdown from './components/input-markdown';
import MarkdownViewer from './components/markdown-viewer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {text: ''};

    this.updateText = this.updateText.bind(this);
  }

  updateText(input) {
    this.setState({text: input});
    console.log(input);
  }

  render() {
    return (
        <div>
          <InputMarkdown onTextareaChange={this.updateText} />
          <MarkdownViewer text={this.state.text} />
        </div>
    );
  }
}

export default App;
