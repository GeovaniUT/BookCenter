import React, { useState, useEffect } from 'react';
import "./Recomendaciones.css";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const API_KEY = 'AIzaSyA76t-PE2Ke3o-ci9OQgJGeAqqDY9bPRY4'; 
            const searchTerm = 'Recomendaciones De Libros';
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.error) {
                    setError(data.error);
                } else if (data.items) {
                    setVideos(data.items);
                }
            } catch (error) {
                console.error('Error al cargar los videos:', error);
                setError(error);
            }
        };

        fetchVideos();
    }, []);

    const handleNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

   
    return (
        <div className="video-container">
            {error ? (
                <p>Error al cargar los videos: {error.message}</p>
            ) : videos.length > 0 ? (
                <div className="video-wrapper">
                    <iframe
                        className="video-frame"
                        src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id.videoId}`}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                    <button  className='next' onClick={handleNextVideo}>Next Video</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Videos;