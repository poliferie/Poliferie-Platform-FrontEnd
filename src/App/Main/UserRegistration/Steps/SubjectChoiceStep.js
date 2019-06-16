import React from "react";
import SearchForm from "./SearchForm";
import CardList from "./CardList";

class SubjectChoiceStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="w-100 h-100">
        <SearchForm title="Which subject are you interested in?" />
        <hr />
        <CardList />
      </div>
    );
  }
}

export default SubjectChoiceStep;
