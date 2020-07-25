import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const socket = io(`http://${host}:${port}`)

export default ({ store }) => {
  Vue.use(VueSocketIOExt, socket, { store })
}
