import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>დაავადება</th>
                <th>სიმპტომები</th>
            </tr>
            {data.map(item=>(
            <tr key={item.id}>
                <td>{item.disease}</td>
                <td>{item.symptoms}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table