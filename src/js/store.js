import { createStore } from 'framework7/lite'

const db = new PouchDB('users')

const store = createStore({
  state: {
    users: [],
  },
  getters: {
    products({ state }) {
      return state.products
    },
  },
  actions: {
    async getUsers({ state }) {
      state.users =
        (await db.allDocs({ include_docs: true, attachments: true })).rows.map(
          ({ doc }) => doc
        ) || []
    },
    async addUser({ actions }, user) {
      await db.post(user).then(console.log).catch(console.error)
      actions.getUsers()
    },
  },
})
export default store
