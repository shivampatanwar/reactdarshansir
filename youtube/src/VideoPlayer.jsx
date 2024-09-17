import React from 'react'

const VideoPlayer = ({ data, play, handlePlay }) => {
    return (
        <div id='parent'>
            <section id='video'>
                <video src={play.videoUrl} controls autoPlay muted>  </video>
                <h1>{play.title}</h1>
                <h3>{play.author}</h3>
                <p>{play.uploadTime}</p>
                <p>{play.description}</p>
            </section>
            <section id='videolist'>
                {
                    data.map((d) => {
                        
                        return (
                            <div onClick={() => { handlePlay(d) }} >
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
