import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addCourse,
  addUniversity,
  addCourseFilter,
  addUniFilter
} from '../../actions'

/** REDUX MAPS DEFINITION */
const mapStateToProps = state => ({
  rdx_state: state
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  addCourse: c => {
    dispatch(addCourse(c))
  },
  addUniversity: c => {
    dispatch(addUniversity(c))
  },
  addCourseFilter: c => {
    dispatch(addCourseFilter(c))
  },
  addUniFilter: c => {
    dispatch(addUniFilter(c))
  }
})

/** COMPONENT DEFINITION */

class DataNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('navigator dispatch', this.props.dispatch)
  }
  render() {
    return (
      <div>
        <div>navigator {JSON.stringify(this.props.rdx_state)}</div>

        <input type="text" name="course" id="c1" />
        <button
          onClick={() => {
            this.props.addUniversity({ name: 'c1', val: 3 })
          }}
        />
        <input type="text" name="uni" id="c2" />
        <input type="text" name="filter" id="c3" />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataNavigator)
