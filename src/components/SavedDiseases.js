import React from 'react'
import remove from '../images/remove.png'
import cancel from '../images/cancel.png'
import emptyBox from '../images/emptyBox.png'
import { useNavigate } from 'react-router-dom'

function SavedDiseases({ bookmarks, setBookmarks, showBookmarks, setShowBooksmarks }) {

    const navigate = useNavigate();

    const deleteBookmark = (diseaseName) => {
        const updatedBookmarks = bookmarks.filter((el) => {
            return diseaseName !== el.disease;
        })

        setBookmarks(updatedBookmarks);
    }

  return (
    <div className='bookmarks'>
        <button onClick={() => setShowBooksmarks(!showBookmarks)}><img src={cancel} alt="cancel icon" className='cancel-btn' /></button>

        {bookmarks.length === 0 ? <div className="empty">
         <img src={emptyBox} alt="empty box icon" className='emptyBox' />
            <h1 className='emptyList'>თქვენი სია ცარიელია...</h1>
        </div> : ''}

        {bookmarks && bookmarks.map((bookmark) => (
            <div className='bookmarkList'>
                <a onClick={() => navigate('/disease', { state: { 
                  data: bookmark
                 } })}><h2>{ bookmark.disease }</h2></a>
                <button onClick={() => deleteBookmark(bookmark.disease)}><img src={remove} alt="delete icon" /></button>
            </div>
        ))}
    </div>
  )
}

export default SavedDiseases