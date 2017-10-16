import React from 'react'
import Bug from './Bug'

export default class BugList extends React.Component {
  constructor(props) {
    super(props)
    this.setStatusClosed = this.setStatusClosed.bind(this)
    this.deleteBug = this.deleteBug.bind(this)
  }

  setStatusClosed(id) {
    this.props.onStatusClosed(id)
  }

  deleteBug(id) {
    this.props.onDeleteBug(id)
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-medium" id="listBugs">
          {this.props.bugs.map(bug => (
            <Bug
              key={bug.id} bug={bug}
              onStatusClosed={this.setStatusClosed}
              onDeleteBug={this.deleteBug}>
            </Bug>
          ))}
        </div>
      </div>
    )
  }
}
