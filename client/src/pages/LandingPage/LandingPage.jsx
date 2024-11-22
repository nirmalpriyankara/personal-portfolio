import React, { useState, useEffect, useCallback } from 'react';
import './LandingPage.css';
import front from '../../assets/front.png';
import back from '../../assets/back.png';
import splitSound from '../../assets/split-sound.mp3';

const LandingPage = () => {
    const [animate, setAnimate] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);

    const playSound = useCallback(() => {
        if (!soundPlayed) {
            const audio = new Audio(splitSound);
            audio
                .play()
                .catch((err) => console.warn("Autoplay prevented: ", err));
            setSoundPlayed(true);
        }
    }, [soundPlayed]);

    const startAnimation = useCallback(() => {
        if (!animate) {
            playSound();
            setAnimate(true);
        }
    }, [animate, playSound]);

    useEffect(() => {
        const timer = setTimeout(() => {
            startAnimation();
        }, 3000);

        return () => clearTimeout(timer);
    }, [startAnimation]);

    return (
        <div
            className="landing-page"
            onClick={startAnimation}
        >
            <div className={`image-container ${animate ? 'animate' : ''}`}>
                <div
                    className="image-left"
                    style={{ backgroundImage: `url(${front})` }}
                ></div>
                <div className="traveling-section">
                    <h1 className='h1'>WELCOME </h1>
                    <h2 className='h2'>I'm Nirmal Priyankara</h2>
                    <h3 className='h3'>According to the available time you have, select one  from below selections to visit me:</h3>
                    <button
                        className="option-btn"
                        onClick={() => (window.location.href = '/Option1')}
                    >
                        Minimal time to visit me
                    </button>
                    <button
                        className="option-btn"
                        onClick={() => (window.location.href = '/Option2')}
                    >
                        Have time to visit me
                    </button>
                </div>
                <div
                    className="image-right"
                    style={{ backgroundImage: `url(${back})` }}
                ></div>
            </div>
        </div>
    );
};

export default LandingPage;
