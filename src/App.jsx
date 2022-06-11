import './App.css';
import { Users } from "./users"
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import DiseasePage from './components/DiseasePage';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SavedDiseases from './components/SavedDiseases';
import bookmark from './images/bookmark.png'

function App() {

  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState(() => {
    const localData = localStorage.getItem('bookmarks');
    return localData ? JSON.parse(localData) : [];
  });

  const[showBookmarks, setShowBooksmarks] = useState(false);

  const search = (data) => {
    return data.filter((item) => item.disease.toLowerCase().includes(query) || item.symptoms.some(el => el.toLowerCase().includes(query)));
  }

  useEffect(() => {
    console.log(bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks])

  return (
    <BrowserRouter>
      <div className='app'>
        {showBookmarks ? <SavedDiseases bookmarks={bookmarks} setBookmarks={setBookmarks} showBookmarks={showBookmarks} setShowBooksmarks={setShowBooksmarks} /> : ''}

        <Routes>
          <Route path="/" element={<Search query={query} setQuery={setQuery} search={search} showBookmarks={showBookmarks} setShowBooksmarks={setShowBooksmarks} />} />
          <Route path="/disease" element={<DiseasePage bookmarks={bookmarks} setBookmarks={setBookmarks} setShowBooksmarks={setShowBooksmarks} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
