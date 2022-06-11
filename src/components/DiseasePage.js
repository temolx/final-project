import React, { useRef, useEffect } from 'react'
import lab1 from '../images/lab1.jpeg'
import { useLocation } from 'react-router'
import backArrow from '../images/back-arrow.png'
import checked from '../images/checked.png'
import lab from '../images/lab.png'
import bookmark from '../images/bookmark.png'
import bookmarkActive from '../images/bookmark-active.png'
import microscope from '../images/microscope.png'
import { Link } from 'react-router-dom';

function DiseasePage({ bookmarks, setBookmarks, setShowBooksmarks }) {

    const location = useLocation();
    const reccomendRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        setShowBooksmarks(false);
        console.log(bookmarks)
    }, [])

    const handleScroll = () => {
        reccomendRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    const handleBookmark = (savedDisease) => {
        if (!bookmarks.some((el) => el.id === savedDisease.id)) {
            setBookmarks([...bookmarks, savedDisease]);
        }
        else {
            const updatedBookmarks = bookmarks.filter((el) => {
                return el.id !== savedDisease.id;
            })

            setBookmarks(updatedBookmarks);
        }
    }

  return (
    <div className='diseaseInfo'>
        <div className="disease-landing">
            <div className="info-img">
                <img src={lab1} alt="lab testing" />
            </div>


            <div className="info-text">
                <Link to='/'><img src={backArrow} className="backArrow" alt="arrow pointing backwards" /></Link>

                <div className="info-title">
                    <h1>{ location.state.data.disease }</h1>
                    <button className='bookmark-btn'><img src={bookmarks.some((el) => el.disease === location.state.data.disease) ? bookmarkActive : bookmark} alt="bookmark icon" onClick={() => handleBookmark(location.state.data)} /></button>
                </div>

                
                {location.state.data.symptoms.map((symptom) => (
                    <div className='symtpomList'>
                        <img src={checked} alt="checkmark checked" />
                        <h3 className='symptom'>{ symptom }</h3>
                    </div>
                ))}

                <button onClick={handleScroll} className="test-btn">რეკომენდირებული კვლევები</button>
            </div>
        </div>

        <div className="disease-reccomendations" ref={reccomendRef}>
            <div className="lab-text">
                <h1>რეკომენდირებულია შემდეგი <span>კვლევების</span> ჩატარება</h1>
            </div>
            {location.state.data.tests.map((test) => (
                <div className='tests'>
                    <div className='testList'>
                        <img src={microscope} alt="microscope icon" />
                        <h2>{ test }</h2>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default DiseasePage