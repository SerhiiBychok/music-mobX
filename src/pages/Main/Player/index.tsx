import { Platform } from '@api/audio'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import useStore from '../../../hooks/useState'
import { Wrap } from './styled'

function Player() {
  const audioEl = useRef<any>(null)
  const { audios } = useStore()
  useEffect(() => {
    const id = audios.currentAudio?.id
    if (id) {
      audioEl.current.src = `https://apiv2.getmusic.io/api/audios/${id}/play?platform=${Platform.GM}`
      audioEl.current.play()
    }
  }, [audios.currentAudio?.id])

  function handleStop() {
    if (audioEl.current.paused) {
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
  }
  return (
    <Wrap>
      <button onClick={handleStop}>Stop</button>
      <audio controls ref={audioEl} />
    </Wrap>
  )
}

export default observer(Player)
