import SearchIcon from '@material-ui/icons/Search'
import qs from 'qs'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Wrap } from './styled'

function Search() {
  const history = useHistory()
  const [val, setVal] = useState()
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value)
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    history.push({
      search: qs.stringify(val ? { q: val } : null)
    })
  }

  return (
    <Wrap onSubmit={onSubmit}>
      <SearchIcon />
      <input type="text" onChange={handleChange} />
    </Wrap>
  )
}

export default Search
