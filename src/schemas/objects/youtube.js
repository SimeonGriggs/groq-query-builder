import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import {FiVideo} from 'react-icons/fi'

const Preview = ({value}) => {
  const {url} = value
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  icon: FiVideo,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube Video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
}
