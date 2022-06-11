import React from 'react'
import { useNavigate } from 'react-router-dom';
import list from '../images/list.png'
import microscope from '../images/microscope.png'

const Table = ({ data }) => {

  const navigate = useNavigate();

  return (
    <table>
        <tbody>
            <tr className='titles'>
                <th><img src={microscope} alt="microscope icon" className='microscopeIcon'/>დაავადება</th>
                <th><img src={list} alt="list icon" className='listIcon'/> სიმპტომები</th>
            </tr>
            {data.length !== 0 ? data.map(item=>(
            <tr key={item.id}>
                <td><a onClick={() => navigate('/disease', { state: { 
                  data: item
                 } })}>{item.disease}</a></td>
                <td>{item.symptoms.map((el, index) => {
                  return index === item.symptoms.length - 1 ? el : el + ", ";
                })}</td>
            </tr>
            )): <tr><td className='notFound'>დაავადება ვერ მოიძებნა...</td><td className='notFound'>სიმპტომი ვერ მოიძებნა...</td></tr>}
        </tbody>
    </table>
  )
}

export default Table