import React from 'react'

export default function ToDoItem({v,i}) {
  return (
    <tr>
                    <td>{i + 1}</td>
                    <td>{v.title}</td>
                    <td>{v.desc}</td>
                    <td>{v.remarks}</td>
    </tr>
  )
}
