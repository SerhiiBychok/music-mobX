import { IAudioResponse } from '@api/audio'
import { observer } from 'mobx-react-lite'
import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import useStore from '../../../hooks/useState'

function Item({ item }: { item: IAudioResponse }) {
  const { audios } = useStore()
  function handleClick() {
    audios.changeTrack(item.id)
  }
  return (
    <TableRow key={item.id}>
      <TableCell onClick={handleClick}>
        {item.id === audios.currentAudio?.id ? (
          <PauseIcon />
        ) : (
          <PlayArrowIcon />
        )}
      </TableCell>
      <TableCell>{item.artistName}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.genreName}</TableCell>
    </TableRow>
  )
}

export default observer(Item)
