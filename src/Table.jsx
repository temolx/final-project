import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>დაავადება</th>
                <th>სიმპტომები</th>
            </tr>
            {data.length !== 0 ? data.map(item=>(
            <tr key={item.id}>
                <td>{item.disease}</td>
                <td>{item.symptoms.map((el, index) => {
                  return index === item.symptoms.length - 1 ? el : el + ", ";
                })}</td>
            </tr>
            )): <td>დაავადება ვერ მოიძებნა...</td>}
        </tbody>
    </table>
  )
}

export default Table