import React, { Component } from 'react';

class Severity extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '1'}
  }

  render() {
    return (
      <div>
        <label class="label" for="">Severity</label>
        <p class="control">
          <span class="select">
            <select value={this.state.value} onChange={(chosen)=>{this.setState({value: chosen.target.value})}}>
              <option value='1' disabled>Select</option>
              {
                  ['Low','Medium','High'].map((i,j)=>{
                      return <option key={i} value={i}>{i}</option>
                  })
              }
            </select>
          </span>
        </p>
      </div>
    )
  }
}

export default Severity;
