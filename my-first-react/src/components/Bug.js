import React from 'react'

export default class Bug extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.bug.id,
      description: props.bug.description,
      severity: props.bug.severity,
      assignedTo: props.bug.assignedTo,
      status: props.bug.status
    }

    this.setStatusClosed = this.setStatusClosed.bind(this)
    this.deleteBug = this.deleteBug.bind(this)
  }

  setStatusClosed() {
    this.props.onStatusClosed(this.state.id)
  }

  deleteBug() {
    this.props.onDeleteBug(this.state.id)
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.bug.id,
      description: props.bug.description,
      severity: props.bug.severity,
      assignedTo: props.bug.assignedTo,
      status: props.bug.status
    })
  }

  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              BugId: {this.state.id}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {this.state.description} <span className="tag is-info">{this.state.severity}</span>
              <p>Assigned To: {this.state.assignedTo}</p>
            </div>
            <br />
          <small className="tag is-primary">{this.state.status}</small>
          </div>
          <footer className="card-footer">
            <a onClick={this.setStatusClosed} className="is-warning card-footer-item">Close</a>
            <a className="card-footer-item" onClick={this.deleteBug}>Delete</a>
          </footer>
        </div>
        <br />
      </div>
    )
  }
}
