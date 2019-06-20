import React, { Component } from 'react'

class CourseViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // shorthand for course id
    this.id = this.props.match.params.id
  }
  render() {
    return <div className="course-view">{this.id}</div>
  }
}

export default CourseViewer
