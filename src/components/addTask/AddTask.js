import React, { Component } from 'react';
import styled from "styled-components";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


 const Wrapper = styled.div`
display:inline-block;
 `;
 const Styles = {
  marginRight: 15,
};

export class AddTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newTask: ''
    }

    this.addNewTask = this.addNewTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  addNewTask(){
     
    this.props.onAddNewTask(this.state.newTask);
     
    this.setState({
      newTask: "",
    });
  }
  
  handleChange(name){
    this.setState({
      newTask: name.target.value,
    });

  }

  render() {
    return (
      <Wrapper>
         <TextField hintText="enter new item" style={Styles} onChange={this.handleChange} value={this.state.newTask}/>
        <RaisedButton label="Add" onClick={this.addNewTask}/>
      </Wrapper>
    );
  }
}