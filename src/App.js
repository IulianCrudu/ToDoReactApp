import React, { Component } from 'react';

import Input from './components/InputComponent/InputComponent';
import ShowList from './components/ShowList/ShowList';
import './App.css';

class App extends Component {
    state = {
        toDoList: [],
        input: ''
    }

    onClickHandler = (e) => {
        e.preventDefault();
        let list = this.state.toDoList;
        let input = this.state.input;
        if (input.length >= 1) {
            let newList = [...list, input];
            this.setState({
                toDoList: newList,
                input: ''
            });
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    deleteItem = (item) => {
        let list = this.state.toDoList;
        let newList = list.filter(listItem => {
            return listItem !== item;
        });
        console.log(newList);
        this.setState({
            toDoList: newList
        });
    }

    render() {
        return (
            <div className="App">
                <Input
                    val={this.state.input}
                    clickHandler={this.onClickHandler}
                    changeHandler={this.onChangeHandler} />
                <ShowList
                    list={this.state.toDoList}
                    delete={this.deleteItem} />
            </div>
        );
    }
}

export default App;
