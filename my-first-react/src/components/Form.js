import React from 'react'
import Chance from 'chance'
const chance = new Chance()

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      severity: 'low',
      assignedTo: ''
    }

    this.submitForm = this.submitForm.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
  }

  submitForm(event) {
    event.preventDefault()

    this.props.onSubmit({
      id: chance.guid(),
      ...this.state,
      status: 'Open'
    })

    this.setState({
      description: '',
      severity: 'low',
      assignedTo: ''
    })
  }

  onFieldChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-budy">
          <h2 className="title">Add New Bug Report:</h2>
          <form onSubmit={this.submitForm} id="bugInputForm">
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." value={this.state.description} onChange={this.onFieldChange}/>
            </p>
            <label className="label" htmlFor="">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" value={this.state.severity} onChange={this.onFieldChange}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label" htmlFor="">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={this.state.assignedTo} onChange={this.onFieldChange}/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
