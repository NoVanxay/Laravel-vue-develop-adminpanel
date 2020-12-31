function initialState() {
    return {
      entry: {
        id: null,
        name: '',
        last: '',
        gender: '1',
        dob: '',
        village: '',
        district: '',
        province: '',
        phone_no: '',
        is_verified: '',
        email: null,
        email_verified_at: '',
        password: null,
        roles: [],
        remember_token: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      lists: {
        gender: [],
        roles: []
      },
      loading: false
    }
  }

  const route = 'users'

  const getters = {
    entry: state => state.entry,
    lists: state => state.lists,
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
    setName({ commit }, value) {
      commit('setName', value)
    },
    setLast({ commit }, value) {
      commit('setLast', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setDob({ commit }, value) {
      commit('setDob', value)
    },
    setVillage({ commit }, value) {
      commit('setVillage', value)
    },
    setDistrict({ commit }, value) {
      commit('setDistrict', value)
    },
    setProvince({ commit }, value) {
      commit('setProvince', value)
    },
    setPhoneNo({ commit }, value) {
      commit('setPhoneNo', value)
    },
    setIsVerified({ commit }, value) {
      commit('setIsVerified', value)
    },
    setEmail({ commit }, value) {
      commit('setEmail', value)
    },
    setEmailVerifiedAt({ commit }, value) {
      commit('setEmailVerifiedAt', value)
    },
    setPassword({ commit }, value) {
      commit('setPassword', value)
    },
    setRoles({ commit }, value) {
      commit('setRoles', value)
    },
    setRememberToken({ commit }, value) {
      commit('setRememberToken', value)
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
    fetchCreateData({ commit }) {
      axios.get(`${route}/create`).then(response => {
        commit('setLists', response.data.meta)
      })
    },
    fetchEditData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}/edit`).then(response => {
        commit('setEntry', response.data.data)
        commit('setLists', response.data.meta)
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
    setName(state, value) {
      state.entry.name = value
    },
    setLast(state, value) {
      state.entry.last = value
    },
    setGender(state, value) {
      state.entry.gender = value
    },
    setDob(state, value) {
      state.entry.dob = value
    },
    setVillage(state, value) {
      state.entry.village = value
    },
    setDistrict(state, value) {
      state.entry.district = value
    },
    setProvince(state, value) {
      state.entry.province = value
    },
    setPhoneNo(state, value) {
      state.entry.phone_no = value
    },
    setIsVerified(state, value) {
      state.entry.is_verified = value
    },
    setEmail(state, value) {
      state.entry.email = value
    },
    setEmailVerifiedAt(state, value) {
      state.entry.email_verified_at = value
    },
    setPassword(state, value) {
      state.entry.password = value
    },
    setRoles(state, value) {
      state.entry.roles = value
    },
    setRememberToken(state, value) {
      state.entry.remember_token = value
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
    setLists(state, lists) {
      state.lists = lists
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
