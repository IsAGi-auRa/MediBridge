import React from 'react'

const VideoCallPage = async ({searchParams}) => {
    const {seasonId, token } = await searchParams;
  return <VideoCall sessionId={sessionId} token={token} />
};

export default VideoCallPage