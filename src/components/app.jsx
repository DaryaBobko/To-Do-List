import React, { Component } from 'react';
import './style.css';
import {CategoryList} from './categoryList/CategoryList.js'
import {AddCategory} from './addCategory/AddCategory.js'
import {AddTask} from './addTask/AddTask.js'
import {Search} from './search/Search.js'
import {TasksList} from './tasksList/TasksList.js'
import {Task} from "../models/Task";
import styled from "styled-components";
import {Progress} from './progress/Progress.js'

const Div = styled.div`
padding: 0 35px;
`;

const Title = styled.h1`
display:inline-block;
`;



// const Flex = styled.div` 
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// `;



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.addNewCategory = this.addNewCategory.bind(this);
    this.showTasks = this.showTasks.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);

    this.taskList = [
      new Task("t1", 1)
    ];

  }

  addNewCategory(newCategory) {
    // alert(newCategory);

    this.categoryList.addNewCategory(newCategory);
  }


  showTasks(category) {
    this.tasksListComponent.showTasks(category);
  console.log(category);
  console.log("appC");
}

addNewTask(task) {
  this.tasksListComponent.addNewTask(task);
}

filterTasks(search) {
  this.tasksListComponent.filter(search);
}

  render() {
    return (
      <Div>
      
        <Title>To - Do List</Title>
          <Search  filterTasks={this.filterTasks}/>
      <Progress/>
        <AddCategory onAddNewCategory={this.addNewCategory}/>
       <AddTask onAddNewTask={this.addNewTask}/>
       <CategoryList onRef={ref => (this.categoryList = ref)} onTaskShow={this.showTasks} />
 
       
         <TasksList onRef={ref => (this.tasksListComponent = ref)}/>
      </Div>
    );
  }
}
