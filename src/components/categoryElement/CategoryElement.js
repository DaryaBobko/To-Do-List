import React, {Component} from 'react';
import styled from "styled-components";
// import {CategoryList} from '../categoryList/CategoryList.js'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Wrapper = styled.div `
width: 250px;
border: 1px solid #000000;
border-radius: 2px;
font-size: 16px;
display:inline-block;
`;
const CategoryName = styled.span `
margin-left: 20px;
color:#00bcd4;
`;

const IconForAdd = styled.i`
padding: 2;
margin: 2;
float: right;
margin-right: 10px;
border: 1px solid #dbdbdb;
border-spacing: 2px 7px;
`;

const IconForRemove = styled.i`
padding: 2;
margin: 2;
float: right;
margin-right: 10px;
border: 1px solid #dbdbdb;
border-spacing: 2px 7px;
`;

const IconForEdit = styled.i`
padding: 2;
margin: 2;
margin-left: 10px;
border: 1px solid #dbdbdb;
border-spacing: 2px 7px;
`;

export class CategoryElement extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.addElement = this.addElement.bind(this);
    this.openTasks = this.openTasks.bind(this);
    
  }
  addElement() {}

  openTasks(){
    this.props.onTaskShow(this.props.category);
  }

  render() {
    return (
      <Wrapper onClick={this.openTasks}>
      <CategoryName>{this.props.category.name}</CategoryName>
      <IconForEdit className="fa fa-pencil-square-o"></IconForEdit>
      <IconForAdd className="fa fa-plus"></IconForAdd>
      <IconForRemove className="fa fa-trash-o"></IconForRemove>

      </Wrapper>

    );
  }
}