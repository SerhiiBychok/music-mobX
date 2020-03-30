type ICallBackType = (...args: any[]) => void
export type UnsubscribeType = () => void

class EventEmitter {
  events: {
    [key: string]: ICallBackType[]
  } = {}

  on = (event: string, cb: ICallBackType): UnsubscribeType => {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event].push(cb)

    return () => {
      this.events[event] = this.events[event].filter(item => item !== cb)
    }
  }

  emit = (event: string, ...args: any[]) => {
    // tslint:disable-next-line
    // console.log(`%cEvent: ${event}`, 'color: violet', ...args)

    if (this.events[event]) {
      this.events[event].forEach(cb => {
        cb(...args)
      })
    }
  }
  clear = (name: string) => {
    if (name) {
      this.events[name] = []
    } else {
      this.events = {}
    }
  }
}

export default new EventEmitter()
