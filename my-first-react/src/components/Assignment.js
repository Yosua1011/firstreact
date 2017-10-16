import React, { Component } from 'react';

class Assignment extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '', placeholder: 'Enter responsible...'}
  }

  render() {
    return (
      <div>
        <label class="label" for="">Assigned To</label>
        <p class="control">
          <input
            class="input"
            value={this.state.term}
            placeholder={this.state.placeholder}
            onChange={event => this.setState({ term: event.target.value })} />
        </p>
      </div>
    )
  }
}

export default Assignment;
