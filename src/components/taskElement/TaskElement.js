import React, {Component} from 'react';
import styled from "styled-components";

// import {CategoryList} from '../categoryList/CategoryList.js'

const Wrapper = styled.div `

width:650px;
margin-left:340px;
border: 1px solid #000000;
font-size: 18px;
display:inline-block;
`;
const TaskName = styled.span `
display:inline-block;
color:#00bcd4;
margin: 10px 0 0 20px;
`;
const IconForEdit = styled.i`
padding: 3;
margin: 5;
float: right;
margin-right: 25px;
border: 1px solid #dbdbdb;
border-spacing: 2px 7px;
`;

export class TaskElement extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <Wrapper>
       <TaskName>{this.props.task.name}</TaskName>
       <IconForEdit className="fa fa-pencil-square-o"></IconForEdit>
      </Wrapper>

    );
  }
}