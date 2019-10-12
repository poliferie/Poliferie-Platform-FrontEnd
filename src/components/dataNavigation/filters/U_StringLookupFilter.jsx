import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUniStringFilter,
  emptyUniStringFilters
} from "../../../actions";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import HighlightOff from "@material-ui/icons/HighlightOff";


/*const SearchBar = withStyles({
  root: {
    //width: "calc(100% - 22px)",
    //minus IconButton that has 48x48px box, minus 22px to match UI width
    width: "calc(100%)",
    height: "20px",
    margin: "10px 0px 0px 0px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    padding: "10px",
    fontSize: "15px",
    borderRadius: "30px"
  }
})(TextField);*/

const styles = () => ({
  textField: {
    width: "calc(100%)",
    //height: 50
  },
  notchedOutline: {
    borderRadius: 30,
    height: 50
  },
});

const mapStateToProps = (state) => {
  let uniFilters = { ...state.stringFilters.universities };
  let viewFocus = state.visibilityFilter.viewFocus;
  let localState = {
    uniFilters: uniFilters,
    viewFocus: viewFocus
  };

  return localState
};

const mapDispatchToProps = dispatch => {
  return ({
    addUniStringFilter: (name, phrase, filter) => {
      dispatch(addUniStringFilter(name, phrase, filter));
    },
    emptyUniStringFilters: () => {
      dispatch(emptyUniStringFilters());
    }
  });
};

class U_StringLookupFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { phrase: '' };

    this.id = "search";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.applySearch = this.applySearch.bind(this);
  }

  componentDidMount() {
    let startValue = '';
    let filterValue;

    if (this.props.viewFocus === 'uni') {
      this.addStringFilter = this.props.addUniStringFilter;
      filterValue = this.props.uniFilters["u_navhead_string"];
    } else {
      this.addStringFilter = this.props.addCourseStringFilter;
      filterValue = this.props.courseFilters["c_navhead_string"];
    }

    if (filterValue)
      startValue = filterValue.phrase;

    this.setState({ phrase: startValue });
  };

  componentDidUpdate(prevProps) {
    let phraseValue = '';
    let filterValue;

    if (prevProps.viewFocus !== this.props.viewFocus /*|| prevProps.uniFilters !== this.props.uniFilters*/) {
      filterValue = this.props.uniFilters["u_navhead_string"];
      if (filterValue)
        phraseValue = filterValue.phrase;
      this.setState({ phrase: phraseValue });
      this.applySearch();
    }
  };

  handleChange(event) {
    if (event.target && event.target.id === this.id) {
      this.setState({ phrase: event.target.value });
    }
  };

  handleSubmit(event) {
    this.applySearch();
    event.preventDefault();
  };

  applySearch() {
    this.props.addUniStringFilter("u_navhead_string", this.state.phrase, elem => {
      if (this.state.phrase.length <= 0) return true;
      return elem.Info.NomeEsteso.toLowerCase().includes(
        this.state.phrase.toLowerCase()
      );
    });
  }

  emptySearchString() {
    this.setState({ phrase: '' });
    this.props.emptyUniStringFilters();
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          width: "calc(100%)"
        }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id={this.id}
            value={this.state.phrase}
            placeholder={"Cerca università per nome o descrizione"}
            onChange={this.handleChange}
            variant="outlined"
            className={classes.textField}
            InputProps={{
              classes: {
                root: classes.notchedOutline,
                focused: classes.notchedOutline,
                notchedOutline: classes.notchedOutline
              },
              endAdornment: <InputAdornment position="end">
                <IconButton
                  color="primary"
                  onClick={() => {
                    this.emptySearchString();
                  }}
                >
                  <HighlightOff />
                </IconButton>
              </InputAdornment>
            }}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(U_StringLookupFilter));
