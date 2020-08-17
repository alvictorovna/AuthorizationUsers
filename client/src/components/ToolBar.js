import React from 'react';
import axios from 'axios';

function ToolBar({users}) {

  function blockUser() {}

  function deleteUser() {}

  return (
    <React.Fragment>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick = {blockUser}>Block</button>
        <button type="button" className="btn btn-secondary">Unblock</button>
        <button type="button" className="btn btn-secondary" onClick= {deleteUser}>Delete</button>
      </div>
    </React.Fragment>
  ) 
}

export default ToolBar