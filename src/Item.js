import React, { useEffect, memo } from 'react'
import { BsTrashFill } from "react-icons/bs";

export const Item = memo(({ user, handleDelete }) => {

  useEffect(() => {
    // console.log("Item render");
  })

  return (
    <li className="list-group-item">
      <span> {user.name} </span>
      <button className="btn btn-danger me-8" onClick={() => handleDelete(user.id)}><BsTrashFill /></button>
    </li>
  )
})