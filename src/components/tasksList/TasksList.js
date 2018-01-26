import React, { Component } from 'react';
import styled from "styled-components";
import {Task} from "../../models/Task";
import {TaskElement} from '../taskElement/TaskElement.js'

const Wrapper = styled.div`
display: inline-block;
`;


export class TasksList extends Component {

  constructor(props) {
    super(props);

    this.props.onRef(this);

    this.idCounter = 0;
    this.currentSearch = "";


    this.state = {
     taskList: [
       new Task("first",  this.idCounter++),
       new Task("second",  this.idCounter++)
     ]
    };
 
  }

  addNewTask(task) {
    this.category.taskList.push(new Task(task, this.idCounter++));

    this.setState({
      taskList: this.category.taskList
    });

    this.filter(this.currentSearch);
  }

  showTasks(category){
    this.category = category;

    this.setState({
      taskList: category.taskList
    });

    console.log(category.taskList);
  }

  filter(search) {
    this.currentSearch = search;

    let filteredList = this.category.taskList.filter(
        (item) =>{
            return item.name.toLowerCase().indexOf(
                search.toLowerCase()) !== -1;
        }
    );

    this.setState({
      taskList: filteredList
    });
  }
  
  render() {
    return (
      
  <Wrapper>
      {

          this.state.taskList.map((task) => {
            return (
              <div key={task.id}>
              {/* {category.name} */}
              <TaskElement task={task}/>
              </div>

            );
          })
          
        }
{/* <ul>
  {filteredList.map((item)=>{
    return <Item item={item}
    key={item.id}/>
  })
  }
</ul> */}
  </Wrapper>
    );
  }
}