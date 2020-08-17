import React, {useContext} from 'react';

function UserItem({user, index, onChange}){

  return(
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.date}</td>
      <td>{user.date_login}</td>
      <td>{user.status ? 'Active' : 'Not active' }</td>
      <td>
        <input
          type="checkbox" 
          checked={user.сompleted}
          onChange={() => onChange(user.id)}
        />
      </td>
    </tr>
  )
        
}

export default UserItem