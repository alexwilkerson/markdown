import React, { Component } from 'react';

class InputMarkdown extends Component {
  constructor (props) {
    super(props);

    this.state = {input: ''};
  }
  render() {
    return (
      <div className="input-markdown">
        <textarea 
          value={this.state.input}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(text) {
    this.setState({input: text});
    this.props.onTextareaChange(text);
  }

}

export default InputMarkdown;
