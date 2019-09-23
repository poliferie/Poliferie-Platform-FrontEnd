import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";

//ICONS
import ParentUniIcon from "@material-ui/icons/AccountBalance";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

class CourseListViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a:0,
      b:50
    };
  }


  goDown = () => {
    console.log("goDown")
    this.setState({ a: this.a+50, b:this.b+50 });
  };


  render() {
    var filteredCourses = this.props.filteredCourses;
    var filteredCoursesNumber = Object.keys(filteredCourses).length;


    function firstN(obj, a,b) {
      return Object.keys(obj) //get the keys out
          .sort() //this will ensure consistent ordering of what you will get back. If you want something in non-aphabetical order, you will need to supply a custom sorting function
          .slice(a, b) //get the first N
          .reduce(function(memo, current) { //generate a new object out of them
            memo[current] = obj[current]
            return memo;
          }, {})
    }

    return (
      <div className="filtered-courses">
        <h2 className="h2_titolo">Corsi : {filteredCoursesNumber>50 ? "50 di "+filteredCoursesNumber : filteredCoursesNumber}</h2>
        <List>
          {Object.keys(firstN(filteredCourses,this.a,this.b)).map(id => (
            <ListItemLink
              key={id}
              //icon="CourseIcon"
              icon={
                <div style={{ textAlign: "center", width: "5em" }}>
                  <ParentUniIcon />

                  <div>
                    {filteredCourses[id].Info.ateneoNomeEsteso
                      ? filteredCourses[id].Info.ateneoNomeEsteso
                      : ""}
                  </div>
                </div>
              }
              to={{ pathname: "course/" + id }}
              primary={filteredCourses[id].Info.NomeEsteso}
              /*secondary={
                "Students: " + JSON.stringify(filteredCourses[id].Info.students)
              }*/
              secondary={"Students:"+Math.round(Math.random()*300)}
            />
          ))}
        </List>
        <Button onClick={() => { this.goDown() }} style={{padding:"20px", border:"2px solid red"}}> DOWN </Button>
      </div>

    );
  }
}

export default CourseListViewer;
