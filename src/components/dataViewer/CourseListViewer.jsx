import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";
import InfiniteScroll from 'react-infinite-scroller';

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
      a:this.props.a,
      b:this.props.b,
      end: Object.keys(this.props.filteredCourses).length,
      internalNav:0
    };
  }

  componentDidUpdate(prevProps, prevState) {

    //console.log('componentDidUpdate')

  }

  shouldComponentUpdate(prevProps, prevState){

    return 1

  }



  goDown = () => {
    this.setState({ a: this.state.a, b:this.state.b+20 , internalNav:1});
    /* document.getElementById('top').scrollIntoView(); */

  };

  reset = () => {
    console.log("reset")
    this.setState({ internalNav:0});


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

    var a = this.state.a;
    var b = this.state.b;

    if(b>filteredCoursesNumber){
      b=filteredCoursesNumber;
    }



    if (b>=filteredCoursesNumber) {
      var button = "";
    } else {
      var button = <Button onClick={() => { this.goDown() }} style={{
        textDecoration : "none",
        display: "block",
        fontSize: "16px",
        margin: "auto",
        width:"90%",
        cursor: "pointer",
        border:"2px solid red",
        borderRadius:"50px"
      }}> Carica altri </Button>;
    }

    return (

      <div className="filtered-courses">
         <h2 className="h2_titolo">Corsi : {filteredCoursesNumber>b ? b + " di "+filteredCoursesNumber : filteredCoursesNumber}</h2>
        {/*     <h2 className="h2_titolo">Corsi : {filteredCoursesNumber>50 ?  50+" di "+filteredCoursesNumber : filteredCoursesNumber}</h2> */}

        <List>
          {Object.keys(firstN(filteredCourses,a,b)).map(id => (
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

        {button}

      </div>



    );

  }
}

export default CourseListViewer;
