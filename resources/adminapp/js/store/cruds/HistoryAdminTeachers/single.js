function initialState() {
    return {
      entry: {
        id: null,
        title: '',
        photo: [],
        fist_name: '',
        last_name: '',
        gender: null,
        eng_name: '',
        eng_last: '',
        dob: '',
        txt: '',
        tribes: '',
        religion: '',
        pabbajja: '',
        identification_card: '',
        province_birth: '',
        district_birth: '',
        village_birth: '',
        current_pro: '',
        current_dist: '',
        current_vill: '',
        temple: '',
        phone_no: '',
        phone_mobile: '',
        office_no: '',
        census: '',
        allow_date: '',
        at: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      lists: {
        gender: []
      },
      loading: false
    }
  }

  const route = 'history-admin-teachers'

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
    setTitle({ commit }, value) {
      commit('setTitle', value)
    },
    insertPhotoFile({ commit }, file) {
      commit('insertPhotoFile', file)
    },
    removePhotoFile({ commit }, file) {
      commit('removePhotoFile', file)
    },
    setFistName({ commit }, value) {
      commit('setFistName', value)
    },
    setLastName({ commit }, value) {
      commit('setLastName', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setEngName({ commit }, value) {
      commit('setEngName', value)
    },
    setEngLast({ commit }, value) {
      commit('setEngLast', value)
    },
    setDob({ commit }, value) {
      commit('setDob', value)
    },
    setTxt({ commit }, value) {
      commit('setTxt', value)
    },
    setTribes({ commit }, value) {
      commit('setTribes', value)
    },
    setReligion({ commit }, value) {
      commit('setReligion', value)
    },
    setPabbajja({ commit }, value) {
      commit('setPabbajja', value)
    },
    setIdentificationCard({ commit }, value) {
      commit('setIdentificationCard', value)
    },
    setProvinceBirth({ commit }, value) {
      commit('setProvinceBirth', value)
    },
    setDistrictBirth({ commit }, value) {
      commit('setDistrictBirth', value)
    },
    setVillageBirth({ commit }, value) {
      commit('setVillageBirth', value)
    },
    setCurrentPro({ commit }, value) {
      commit('setCurrentPro', value)
    },
    setCurrentDist({ commit }, value) {
      commit('setCurrentDist', value)
    },
    setCurrentVill({ commit }, value) {
      commit('setCurrentVill', value)
    },
    setTemple({ commit }, value) {
      commit('setTemple', value)
    },
    setPhoneNo({ commit }, value) {
      commit('setPhoneNo', value)
    },
    setPhoneMobile({ commit }, value) {
      commit('setPhoneMobile', value)
    },
    setOfficeNo({ commit }, value) {
      commit('setOfficeNo', value)
    },
    setCensus({ commit }, value) {
      commit('setCensus', value)
    },
    setAllowDate({ commit }, value) {
      commit('setAllowDate', value)
    },
    setAt({ commit }, value) {
      commit('setAt', value)
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
    setTitle(state, value) {
      state.entry.title = value
    },
    insertPhotoFile(state, file) {
      state.entry.photo.push(file)
    },
    removePhotoFile(state, file) {
      state.entry.photo = state.entry.photo.filter(item => {
        return item.id !== file.id
      })
    },
    setFistName(state, value) {
      state.entry.fist_name = value
    },
    setLastName(state, value) {
      state.entry.last_name = value
    },
    setGender(state, value) {
      state.entry.gender = value
    },
    setEngName(state, value) {
      state.entry.eng_name = value
    },
    setEngLast(state, value) {
      state.entry.eng_last = value
    },
    setDob(state, value) {
      state.entry.dob = value
    },
    setTxt(state, value) {
      state.entry.txt = value
    },
    setTribes(state, value) {
      state.entry.tribes = value
    },
    setReligion(state, value) {
      state.entry.religion = value
    },
    setPabbajja(state, value) {
      state.entry.pabbajja = value
    },
    setIdentificationCard(state, value) {
      state.entry.identification_card = value
    },
    setProvinceBirth(state, value) {
      state.entry.province_birth = value
    },
    setDistrictBirth(state, value) {
      state.entry.district_birth = value
    },
    setVillageBirth(state, value) {
      state.entry.village_birth = value
    },
    setCurrentPro(state, value) {
      state.entry.current_pro = value
    },
    setCurrentDist(state, value) {
      state.entry.current_dist = value
    },
    setCurrentVill(state, value) {
      state.entry.current_vill = value
    },
    setTemple(state, value) {
      state.entry.temple = value
    },
    setPhoneNo(state, value) {
      state.entry.phone_no = value
    },
    setPhoneMobile(state, value) {
      state.entry.phone_mobile = value
    },
    setOfficeNo(state, value) {
      state.entry.office_no = value
    },
    setCensus(state, value) {
      state.entry.census = value
    },
    setAllowDate(state, value) {
      state.entry.allow_date = value
    },
    setAt(state, value) {
      state.entry.at = value
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
