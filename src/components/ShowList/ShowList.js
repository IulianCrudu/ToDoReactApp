import React from 'react';

const showList = (props) => {
    let key = 1;
    // i want different animations for the 2 buttons
    let list = props.list.map(item => {
        return (<div key={key++}>
                    <p>{item}</p>
                    <button onClick={() => props.delete(item)}>Delete</button>
                    <button onClick={() => props.delete(item)}>Done</button> 
                </div>);
    });
    let finalList = (props.list.length >= 1 ? list : <p>Put something on your to do list</p>);
    return (
        finalList
    );
}

export default showList;