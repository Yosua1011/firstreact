import React, { Component } from 'react';

class SubmitButton extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '', placeholder: 'Enter responsible...'}
  }

  render() {
    return (
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-warning">Submit</button>
        </p>
      </div>
    )
  }
}

export default SubmitButton;
