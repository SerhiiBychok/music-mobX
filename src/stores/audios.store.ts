import { getAudio } from '@api/audio'
import { flow, types } from 'mobx-state-tree'
import qs from 'qs'

const ItemsModel = types.model({
  id: types.identifier,
  artistName: types.string,
  title: types.string,
  duration: types.number,
  genreName: types.string,
  fromPlatform: types.string
})

const AudiosStore = types
  .model({
    loading: false,
    loaded: false,
    items: types.maybeNull(types.array(ItemsModel)),
    currentAudio: types.maybeNull(types.reference(ItemsModel))
    // currentAudio: types.model({ id: types.reference(ItemsModel) })
  })
  .actions(self => ({
    loadAudios: flow(function*() {
      self.loading = true
      const searchParams = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
      })
      const { items } = yield getAudio({ offset: 10, ...searchParams })
      self.items = items
      self.loading = false
      self.loaded = true
    }),
    changeTrack: (id: string) => {
      self.currentAudio = id
    }
  }))

export default AudiosStore
