import React from 'react'

const VideoListItem = ({video}) => {
  // console.log('ini dari video lis item', props.video.length)
  const imageUrl = video.snippet.thumbnails.default.url
  return (
     <li className="list-group-item">
       <div className="video-list media">
         <div className="media-left">
           <img className="media-object" src={imageUrl} ></img>
           </div>
          <div className="media-body">
            <div className="media-heading"> { video.snippet.title } </div>
        </div>
       </div>
     </li>
  )
}

export default VideoListItem