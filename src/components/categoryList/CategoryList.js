import React, { Component } from 'react';
import {Category} from '../../models/Category.js'
import styled from "styled-components";
import {CategoryElement} from '../categoryElement/CategoryElement.js'
import {Task} from '../../models/Task.js'

const Wrapper = styled.div`
display: inline-block;
`;

export class CategoryList extends Component {

  constructor(props) {
    super(props);

    this.props.onRef(this);

    this.idCounter = 0;

    this.state = {
      categories: [
        new Category("category1", this.idCounter++, [new Task("hello", 1)]),
        new Category("category2", this.idCounter++, [new Task("hello2", 2)]),
      ]
    }

    // this.showTasks = this.showTasks.bind(this);
  }

  addNewCategory(newName) {
    let newCategory = new Category(newName, this.idCounter++);

    this.state.categories.push(newCategory);

    this.setState({
      categories: this.state.categories
    });
  }

// showTasks(category) {
//   this.props.onTaskShow(this.props.category);
// }

  render() {
    return (
      <Wrapper>
       
        {
          this.state.categories.map((category) => {
            return (
              <div key={category.id}>
              {/* {category.name} */}
              <CategoryElement onTaskShow={this.props.onTaskShow} category={category}/>
              </div>

            );
          })
        }

      </Wrapper>
    );
  }
}