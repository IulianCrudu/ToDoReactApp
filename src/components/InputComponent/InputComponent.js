import React from 'react';

import './InputComponent.css';

const inputComponent = (props) => {
    return (
        <form className="form">
            <input className="form__input" type="text" placeholder="Type Here" onChange={props.changeHandler} value={props.val}/>
            <button className="form__button" type="submit" onClick={props.clickHandler}>Add Item</button>
        </form>
    );
}

export default inputComponent;