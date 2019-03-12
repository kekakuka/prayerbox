import VueIdb from 'vue-idb'

const idb = new VueIdb({
  version: 3,
  database: 'db',
  schemas: [
    { prayer: '++id, title, description, end_at, created_at, updated_at, enabled, canceled, answered' },
    { comment: '++id, user, content, reply_to' }
  ]
})

export default ({ Vue }) => {
  Vue.use(VueIdb)
  Vue.prototype.$idb = idb
}

export { idb }
