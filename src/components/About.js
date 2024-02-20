import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    
    render(){
        console.log("Parent Render");
        return(
           <div>
            <h1>About Class Component</h1>
            <h2>This is Namaste React Web series</h2>
            <UserClass name={"First"} location={"Dehradun Class"}/>
            <UserClass name={"Second"} location={"US"}/>
           </div> 
        );
    }
}


export default About;

/*
-Parent Constructor
-Parent render
  -First Constructor
  -First Render

  -Second Constructor
  -Second Render
 <DOM UPDATED - IN SINGLE BATCH>
  -First componentDidMount  
  -Second componentDidMount

-Parent componentDidMount

*/