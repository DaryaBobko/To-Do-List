import React, {Component} from 'react';
import styled from "styled-components";

// import {CategoryList} from '../categoryList/CategoryList.js'

const Wrapper = styled.div `
hiedth:35px;
width:650px;
margin-left:340px;
border: 1px solid #000000;
font-size: 14px;
display:inline-block;
`;
const TaskName = styled.div `
color:#138590;
font-size: 14px;
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
      </Wrapper>

    );
  }
}