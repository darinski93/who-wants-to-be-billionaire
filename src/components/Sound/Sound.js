import React, { useState, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Sound = () => {

    const [playing, setPlaying] = useState(false)
    const soundUrl = './soundBillionaire.mp3'
    const audioRef = useRef(null)

    function playBtn() {

        const audioElement = audioRef.current

        if (audioElement.paused) {
            audioElement.play()
        } else {
            audioElement.pause()
        }

        setPlaying((prevPlaying) => !prevPlaying)
    };

    const volumeIcon = playing ? <FaVolumeUp /> : <FaVolumeMute />

    return (
        <div className="sound-container">

            <audio ref={audioRef} loop>
                <source src={soundUrl} type="audio/mpeg" />
            </audio>
            <button className="play-button" onClick={playBtn}>
                {volumeIcon}
            </button>

        </div>
    )
};

export default Sound