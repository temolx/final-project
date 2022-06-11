import React, { useState, useEffect } from 'react'
import Table from './Table'
import { Users } from '../users'
import { AllSymptoms } from '../symptoms'
import searchIcon from '../images/search.png'
import bookmark from '../images/bookmark.png'

function Search({ query, setQuery, search, showBookmarks, setShowBooksmarks }) {

  return (
    <div className='searchContainer'>
        <button className='bookmark-btn' onClick={() => setShowBooksmarks(!showBookmarks)}><img src={bookmark} alt="show bookmarks icon" className='bookmarkIcon'/></button>
        <div className="search-container">
          <input type="text" placeholder='ძებნა...' className="search" onChange={e => setQuery(e.target.value)}/>
          <img src={searchIcon} alt="search icon" className='searchIcon' />
        </div>

        {AllSymptoms.map((symptom) => (
          <div className='symtomCheckbox'>
            <input name="symptom" type="checkbox" />
            <label>{ symptom.symptom }</label>
          </div>
        ))}

        <Table data={search(Users)} />
    </div>
  )
}

export default Search