import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck,faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';

import './ListItem.css';

export default (props) => {
    return (
        <div className="listItem">
             <p >{props.item}</p>
            
            <div>
                <button className="edit" onClick={props.edit}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="done" onClick={props.delete}><FontAwesomeIcon icon={faCheck} /></button>
                <button className="delete" onClick={props.delete}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
        </div>
    );
}
