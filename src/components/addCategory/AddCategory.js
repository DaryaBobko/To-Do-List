import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styled from "styled-components";
import TextField from 'material-ui/TextField';


 const Wrapper = styled.div`
display:inline-block;
margin:20px 530px 15px 0;
 `;
 
 const Styles = {
  marginRight: 15,
};

export class AddCategory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newCategory: ''
    }

    this.addNewCategory = this.addNewCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  addNewCategory(){
     
    this.props.onAddNewCategory(this.state.newCategory);
     
    this.setState({
      newCategory: "",
    });
  }
  
  handleChange(name){
    this.setState({
      newCategory: name.target.value,
    });

  }
  render() {
    return (
      <Wrapper>
         <TextField hintText="enter category title"  style={Styles} onChange={this.handleChange} value={this.state.newCategory} />
        <RaisedButton label="Add" onClick={this.addNewCategory}/>
      </Wrapper>
    );
  }
}