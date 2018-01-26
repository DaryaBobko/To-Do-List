import React, { Component } from 'react';
import styled from "styled-components";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const iconStyles = {
  marginLeft: 825,

 
};


export class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
        search: ""
    };
    this.handleSearch=this.handleSearch.bind(this);
  }
  handleSearch(event){
      this.setState({search: event.target.value.substr(0,20)});

      this.props.filterTasks(event.target.value.substr(0,20));
  }
// handleSearch(event){
// this.searchQvery = event.target.value.toLoverCase();
// this.displayedList = lists.filter(){
//   }
// }

  
  render() {
    // let filteredList = this.props.tasks.filter(
    //     (item) =>{
    //         return item.name.toLowerCase().indexOf(
    //             this.state.search.toLowerCase()) !== -1;
    //     }
    // );
    return (
      <TextField hintText="search" style={iconStyles}value={this.state.search} onChange={this.handleSearch}/>
    );
  }
}