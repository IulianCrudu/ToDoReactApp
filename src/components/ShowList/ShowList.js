import React from 'react';

import '../ListItem/ListItem';
import ListItem from '../ListItem/ListItem';
import './ShowList.css';


const showList = (props) => {
    let key = 1;
    // i want different animations for the 2 buttons
    let list = props.list.map(item => {
            return (
                    <ListItem 
                        key = {key++}
                        item = {item}
                        delete = {() => props.delete(item)}
                        edit = {() => props.edit(item)}/>
            )
    });
    let finalList = (props.list.length >= 1 ? list : <p className="showPar">Put something on your to do list</p>);
    return (
            finalList
    );
}

export default showList;