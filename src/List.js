import React, { useEffect, memo } from 'react'
import { Item } from './Item'

export const List = memo(({ users, handleDelete }) => {

  useEffect(() => {
    // console.log("list render");
  })

  return (
    <div>
      <ul className="list-group">
        { users.map(user => (
          <Item key={user.id}
                user={user}
                handleDelete={handleDelete}
              />
        ))}
      </ul>
    </div>
  )
})
