import React, { Component } from 'react'

class UniversityViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // shorthand for uni id
    this.id = this.props.match.params.id
  }
  render() {
    return <div className="uni-view">{this.id}</div>
  }
}

export default UniversityViewer
