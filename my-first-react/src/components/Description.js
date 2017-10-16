import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '', placeholder: 'Describe a bug ...'}
  }

  render() {
    return (
      <div>
        <label class="label" for="">Description</label>
        <input
          class="input"
          value={this.state.term}
          placeholder={this.state.placeholder}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default Description;
