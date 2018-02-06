import React, {Component} from 'react';
import styled from "styled-components";
// import {CategoryList} from '../categoryList/CategoryList.js'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Wrapper = styled.div `
width: 250px;
border: 1px solid #000000;
border-radius: 1px;
font-size: 14px;
color: palevioletred;
text-align:left;
display:inline-block;
`;
const CategoryName = styled.span `
color:#138590;
font-size: 14px;
`;
const iconStyles = {
  marginRight: 24,
  height: 20,
  width: 20,
 
};

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
        {/* <Open>+</Open> */}
    <IconButton tooltip="Font Icon" style={iconStyles}>
      <FontIcon className="muidocs-icon-action-home" />
      <CategoryName>{this.props.category.name}</CategoryName>
    </IconButton>

        {/* <Edit></Edit>
        <Remove></Remove>
        <Add></Add> */}
        {/* if (false) {< CategoryList onRef = {
          ref => (this.categoryList = ref)
        } />
} */}
        {/* <CategoryList onRef={ref => (this.categoryList = ref)}/> */}
      </Wrapper>

    );
  }
}