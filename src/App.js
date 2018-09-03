import React, { Component, Fragment } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck,faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';

import Input from './components/InputComponent/InputComponent';
import ShowList from './components/ShowList/ShowList';
import NavBar from './components/NavBar/NavBar';
import './App.css';

library.add(faCheck,faTimes,faEdit);

class App extends Component {
    state = {
        toDoList: [],
        input: ''
    }

    onClickHandler = (e) => {
        e.preventDefault();
        let list = this.state.toDoList;
        let input = this.state.input;
        let validationAnswer = this.inputValidation(input);
        if (!validationAnswer.length) {
            let newList = [...list, input];
            this.setState({
                toDoList: newList,
                input: ''
            });
        }
        else {
            alert(validationAnswer);
            this.setState({ input: '' });
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    inputValidation = (input) => {
        // Checks if the input's length is greater than 0 and if the input is unique 
        // Returns a message if there is an error 
        // The string will be empty if there is no error
        input = input.trim();
        let Validated = '';
        if (input.length < 1)
            Validated = 'Please type something';
        this.state.toDoList.forEach(listItem => {
            if (listItem === input)
                Validated = 'This item is already added.';
        });

        return Validated;
    }

    editItem = (item) => {
        let edit = prompt('Edit the item',item);
        let list = this.state.toDoList.slice();
        list.map(listItem => {
            if(listItem === item) {
                let key = list.findIndex(element => {
                    return element === listItem;
                });
                list.splice(key,1,edit);
            }
            return listItem;
        });
        console.log(list);
        this.setState({toDoList: list});
    }

    deleteItem = (item) => {
        let list = this.state.toDoList;
        let newList = list.filter(listItem => {
            return listItem !== item;
        });
        this.setState({
            toDoList: newList
        });
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Input
                    val={this.state.input}
                    clickHandler={this.onClickHandler}
                    changeHandler={this.onChangeHandler} />
                <div className="App">
                    <ShowList
                        list={this.state.toDoList}
                        delete={this.deleteItem} 
                        edit={this.editItem}/>
                </div>
            </Fragment>
        );
    }
}

export default App;
