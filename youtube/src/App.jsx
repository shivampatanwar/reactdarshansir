import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import JSON from './video.json'

const App = () => {

  let [data, setData]=useState(JSON);

  let [play, setPlay]=useState(data[0]);

  let handlePlay=(datas)=>{
    setPlay(datas);
  }

  return (
    <div>
      <VideoPlayer data={data}  play={play} handlePlay={handlePlay} />
    </div>
  )
}

export default App
