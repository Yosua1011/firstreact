import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Footer from './components/Footer'
import Form from './components/Form'
import BugList from './components/BugList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bugs: []
    }

    this.fetchBugs = this.fetchBugs.bind(this)
    this.saveBug = this.saveBug.bind(this)
    this.setStatusClosed = this.setStatusClosed.bind(this)
    this.deleteBug = this.deleteBug.bind(this)
    this.storeBugs = this.storeBugs.bind(this)
  }

  fetchBugs() {
    this.setState({
      bugs: JSON.parse(localStorage.getItem('bugs')) || []
    })
  }

  storeBugs(bugs) {
    localStorage.setItem('bugs', JSON.stringify(bugs))
    this.fetchBugs()
  }

  saveBug(bug) {
    let bugs = [...this.state.bugs]
    bugs.push(bug)
    this.storeBugs(bugs)
  }

  setStatusClosed(id) {
    let bugs = [...this.state.bugs].map(bug => {
      if (bug.id === id)
        bug.status = 'Close'
      return bug
    })

    this.storeBugs(bugs)
  }

  deleteBug(id) {
    let bugs = [...this.state.bugs].filter(bug => bug.id !== id)
    this.storeBugs(bugs)
  }

  componentWillMount() {
    this.fetchBugs()
  }

  render() {
    return (
      <div>
        <div className="container">
          <Title />
          <Form onSubmit={this.saveBug}></Form>
          <hr />
          <BugList
            bugs={this.state.bugs}
            onStatusClosed={this.setStatusClosed}
            onDeleteBug={this.deleteBug}>
          </BugList>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
