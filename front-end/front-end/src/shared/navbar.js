import React from 'react';
import {Link} from 'react-router-dom'

const navbar=()=>{
    return(
        <div className="navbar">
            <ul>
                <li>
             <Link className={'Link'}to="/" style={{textDecoration:"none"}}>Create</Link>
          </li>
                <li>
                    <Link className={'Link'} to='/delete' style={{textDecoration:"none"}}>Delete</Link> 
                    </li>
                    <li>
                    <Link className={'Link'} to='/read' style={{textDecoration:"none"}}>Search</Link> 
                    </li>
                    <li>
                    <Link className={'Link'} to='/update' style={{textDecoration:"none"}}>update</Link> 
                    </li>
            </ul>
        </div>
    );
}
export default navbar;