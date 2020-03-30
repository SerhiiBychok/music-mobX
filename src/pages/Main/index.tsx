import React, { useEffect } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { useLocation } from 'react-router-dom'
import useStore from '../../hooks/useState'
import { Wrap, Sidebar, Content } from './styled'
import Player from './Player'
import Search from './Search'

function Main({ route, history }: RouteConfigComponentProps) {
  const location = useLocation()
  const { audios } = useStore()

  useEffect(() => {
    if (route?.path === '/') {
      history.push('/favorite')
    }
  }, [])

  useEffect(() => {
    audios.loadAudios()
  }, [location.pathname, history.location.search])
  return (
    <Wrap>
      <Sidebar>
        <ul>
          <li>All</li>
          <li>VK</li>
          <li>Fav</li>
        </ul>
      </Sidebar>
      <Content>
        <Search />
        {renderRoutes(route?.routes)}
      </Content>
      <Player />
    </Wrap>
  )
}

export default Main
