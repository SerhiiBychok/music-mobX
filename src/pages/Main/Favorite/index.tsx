import { IAudioResponse } from '@api/audio'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import { observer } from 'mobx-react-lite'
import useStore from '../../../hooks/useState'
import Item from './Item'

function Favorite() {
  const {
    audios: { loaded, items }
  } = useStore()
  if (loaded && !items?.length) return <p>no result</p>
  if (!loaded) return <CircularProgress />
  return (
    <span>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>fromPlatform</TableCell>
            <TableCell>genreName</TableCell>
            <TableCell>artistName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((item: IAudioResponse) => (
            <Item item={item} key={item.id}></Item>
          ))}
        </TableBody>
      </Table>
    </span>
  )
}

export default observer(Favorite)
