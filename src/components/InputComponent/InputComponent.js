import React from 'react';


const inputComponent = (props) => {
    return (
        <form>
            <input type="text" onChange={props.changeHandler} value={props.val}/>
            <button type="submit" onClick={props.clickHandler}>click</button>
        </form>
    );
}

export default inputComponent;