function initialState() {
    return {
      entry: {
        id: null,
        file: [],
        name: '',
        category: '',
        publisher: '',
        page: '',
        isbn: '',
        price: '',
        photo: [],
        description: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      loading: false
    }
  }

  const route = 'allbooks'

  const getters = {
    entry: state => state.entry,
    loading: state => state.loading
  }

  const actions = {
    storeData({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })

      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        axios
          .post(route, params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            let message = error.response.data.message || error.message
            let errors = error.response.data.errors

            dispatch(
              'Alert/setAlert',
              { message: message, errors: errors, color: 'danger' },
              { root: true }
            )

            reject(error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    },
    updateData({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })

      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        params.set('_method', 'PUT')
        axios
          .post(`${route}/${state.entry.id}`, params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            let message = error.response.data.message || error.message
            let errors = error.response.data.errors

            dispatch(
              'Alert/setAlert',
              { message: message, errors: errors, color: 'danger' },
              { root: true }
            )

            reject(error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    },
    insertFileFile({ commit }, file) {
      commit('insertFileFile', file)
    },
    removeFileFile({ commit }, file) {
      commit('removeFileFile', file)
    },
    setName({ commit }, value) {
      commit('setName', value)
    },
    setCategory({ commit }, value) {
      commit('setCategory', value)
    },
    setPublisher({ commit }, value) {
      commit('setPublisher', value)
    },
    setPage({ commit }, value) {
      commit('setPage', value)
    },
    setIsbn({ commit }, value) {
      commit('setIsbn', value)
    },
    setPrice({ commit }, value) {
      commit('setPrice', value)
    },
    insertPhotoFile({ commit }, file) {
      commit('insertPhotoFile', file)
    },
    removePhotoFile({ commit }, file) {
      commit('removePhotoFile', file)
    },
    setDescription({ commit }, value) {
      commit('setDescription', value)
    },
    setCreatedAt({ commit }, value) {
      commit('setCreatedAt', value)
    },
    setUpdatedAt({ commit }, value) {
      commit('setUpdatedAt', value)
    },
    setDeletedAt({ commit }, value) {
      commit('setDeletedAt', value)
    },
    fetchEditData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}/edit`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    fetchShowData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    resetState({ commit }) {
      commit('resetState')
    }
  }

  const mutations = {
    setEntry(state, entry) {
      state.entry = entry
    },
    insertFileFile(state, file) {
      state.entry.file.push(file)
    },
    removeFileFile(state, file) {
      state.entry.file = state.entry.file.filter(item => {
        return item.id !== file.id
      })
    },
    setName(state, value) {
      state.entry.name = value
    },
    setCategory(state, value) {
      state.entry.category = value
    },
    setPublisher(state, value) {
      state.entry.publisher = value
    },
    setPage(state, value) {
      state.entry.page = value
    },
    setIsbn(state, value) {
      state.entry.isbn = value
    },
    setPrice(state, value) {
      state.entry.price = value
    },
    insertPhotoFile(state, file) {
      state.entry.photo.push(file)
    },
    removePhotoFile(state, file) {
      state.entry.photo = state.entry.photo.filter(item => {
        return item.id !== file.id
      })
    },
    setDescription(state, value) {
      state.entry.description = value
    },
    setCreatedAt(state, value) {
      state.entry.created_at = value
    },
    setUpdatedAt(state, value) {
      state.entry.updated_at = value
    },
    setDeletedAt(state, value) {
      state.entry.deleted_at = value
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    resetState(state) {
      state = Object.assign(state, initialState())
    }
  }

  export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
  }
