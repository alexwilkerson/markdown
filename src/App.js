import React, { Component } from 'react';
import InputMarkdown from './components/input-markdown';
import MarkdownViewer from './components/markdown-viewer'
import SwitchButton from './components/switch-button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '# This is an example.\n## of what you can do with\n### _MARKDOWN!_\n\nIf you like this, you can see more at [xcvfd.com](http://xcvfd.com).', 
      windowWidth: window.innerWidth,
      visibleWindow: 1
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  updateText = (input) => {
    this.setState({text: input});
  }

  handleResize = (e) => {
    this.setState({windowWidth: window.innerWidth});
  }

  changeVisible = () => {
    if (this.state.visibleWindow === 1) {
      this.setState({visibleWindow: 2});
    } else {
      this.setState({visibleWindow: 1});
    }
  }

  render() {
    if (this.state.windowWidth < 650) {
      return (
        <div>
          <div className="header">
            <h1 className="title"># Md.edit</h1>
          <SwitchButton currentWindow={this.state.visibleWindow} onSwitchClick={this.changeVisible}/>
          </div>
          {this.state.visibleWindow === 1 ? 
            <InputMarkdown text={this.state.text} onTextareaChange={this.updateText} /> : 
            <MarkdownViewer text={this.state.text} />
          } 
        </div>
        );
    } else {
      return (
        <div>
          <div className="header">
            <h1 className="title"># Md.edit</h1>
          </div>
          <InputMarkdown text={this.state.text} onTextareaChange={this.updateText} />
          <MarkdownViewer text={this.state.text} />
        </div>
      );
    }
  }
}

export default App;
