import React, { useRef, useState } from 'react'
import IMG from '../public/img.png'

const VideoPlayer = ({ data, play, handlePlay }) => {


    let video = useRef(null);
    let vplay = useRef();

    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (video.current) {
            video.current.volume = newVolume;
        }
    };

    let fullScreen = () => {
        if (video.current.requestFullscreen) {
            video.current.requestFullscreen();
        }
    }


    let playPause = () => {

        if (video.current.paused) {
            video.current.play()
            vplay.current.innerHTML = '&#10074;&#10074;'

        } else {
            video.current.pause()
            vplay.current.innerHTML = '&#9658;'
        }

    }

    return (
        <div id='parent'>
            <section id='video'>
                <div>
                    <video autoPlay ref={video} src={play.videoUrl} controls ></video>
                    <div id='controls'>
                        <div>
                            <p ref={vplay} onClick={playPause}>&#9658;</p>
                            <p></p>
                            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                        </div>
                        <div>
                            <p onClick={fullScreen}> &#x26F6;</p>
                        </div>
                    </div>
                </div>

                <h1>{play.title}</h1>
                <p id='time'>{play.uploadTime}</p>
                <div id='author'>
                    <img src={IMG} alt="" />
                    <h3>{play.author}</h3>
                </div>
                <p id='desc'>{play.description}</p>

                <div>
                    <h1>Comments</h1>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@drharshvardhanmehta 1 year ago</p>
                            <p>Ford Wale aapko bulayenge. America ki trip pakki. Aap acche aur sacche insan hai. Lagan   bhi khub hai. Zindadil or khushmizaz. God bless.</p>
                        </div>
                    </div>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@sureshchiruvella1850 1 year ago</p>
                            <p>Knowledge+hardwork+honesty makes u a special person. Kudos to u hats off</p>
                        </div>
                    </div>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@rahul67338  1 year ago</p>
                            <p>असम्भव का दूसरा नाम मुकेश भाई दिल खुश कर दिया
                                भाई आप तो गाड़ी के डॉक्टर हो
                                गाड़ी डरती है की अब तो सही हो कर ही आना पड़ेगा </p>
                        </div>
                    </div>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@himanshuvlogs8332  4 days ago</p>
                            <p>मुकेश सर के सामने सब संभव है
                                प्राउड आप बहुत अच्छे और ईमानदार मैकेनिक हो सर</p>
                        </div>
                    </div>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@ganeshsolunke9767  1 year ago</p>
                            <p>मुकेश भाई मेरा नाम गणेश देशमुख है मै महाराष्ट्र से हू मै तुमरे बहुतसे व्हिडीओ देक ता हू आप बहोत इमानदारी और इज्जत से काम करते हो इस लिये मेरे तरपसे आप सलाम</p>
                        </div>
                    </div>

                    <div id='comment'>
                        <img src={IMG} alt='' />

                        <div>
                            <p>@ahsanarmaan1111   1 year ago</p>
                            <p>Mukesh bhai ap Ki Team Ke Liye Koi mushkil nahi hai Best Team Hai Kasam Se yaar Ap Ki Team Koi bhe kesi Bhe Gari Le gi Woh Pura Kam Karti hai Mukesh bhai ke Team India Ki No.1 Best Team hai.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section id='videolist'>
                {
                    data.map((d) => {

                        return (
                            <div key={d.id} onClick={() => { handlePlay(d) }} >
                                <img src={d.thumbnailUrl} alt={d.title} />
                                <div>
                                    <h3>{d.title}</h3>
                                    <p>{d.author}</p>
                                    <p></p>
                                    <p>{d.views} Views {d.uploadTime}</p>

                                </div>


                            </div>

                        )
                    })
                }
            </section>
        </div>
    )
}

export default VideoPlayer;
