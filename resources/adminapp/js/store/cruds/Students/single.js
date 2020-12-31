function initialState() {
    return {
      entry: {
        id: null,
        st_code: '',
        first_name: '',
        last_name: '',
        gender: null,
        dob: '',
        village_birth: '',
        district: '',
        province: '',
        father_name: '',
        father_no: '',
        mother_name: '',
        mother_no: '',
        current_vill: '',
        current_dis: '',
        current_pro: '',
        iclass_id: null,
        school_id: null,
        end_from: '',
        end_date: '',
        photo: [],
        phone: '',
        note: '',
        email: null,
        password: null,
        role: [],
        remember_token: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      lists: {
        gender: [],
        iclass: [],
        school: [],
        role: []
      },
      loading: false
    }
  }

  const route = 'students'

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
    setStCode({ commit }, value) {
      commit('setStCode', value)
    },
    setFirstName({ commit }, value) {
      commit('setFirstName', value)
    },
    setLastName({ commit }, value) {
      commit('setLastName', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setDob({ commit }, value) {
      commit('setDob', value)
    },
    setVillageBirth({ commit }, value) {
      commit('setVillageBirth', value)
    },
    setDistrict({ commit }, value) {
      commit('setDistrict', value)
    },
    setProvince({ commit }, value) {
      commit('setProvince', value)
    },
    setFatherName({ commit }, value) {
      commit('setFatherName', value)
    },
    setFatherNo({ commit }, value) {
      commit('setFatherNo', value)
    },
    setMotherName({ commit }, value) {
      commit('setMotherName', value)
    },
    setMotherNo({ commit }, value) {
      commit('setMotherNo', value)
    },
    setCurrentVill({ commit }, value) {
      commit('setCurrentVill', value)
    },
    setCurrentDis({ commit }, value) {
      commit('setCurrentDis', value)
    },
    setCurrentPro({ commit }, value) {
      commit('setCurrentPro', value)
    },
    setIclass({ commit }, value) {
      commit('setIclass', value)
    },
    setSchool({ commit }, value) {
      commit('setSchool', value)
    },
    setEndFrom({ commit }, value) {
      commit('setEndFrom', value)
    },
    setEndDate({ commit }, value) {
      commit('setEndDate', value)
    },
    insertPhotoFile({ commit }, file) {
      commit('insertPhotoFile', file)
    },
    removePhotoFile({ commit }, file) {
      commit('removePhotoFile', file)
    },
    setPhone({ commit }, value) {
      commit('setPhone', value)
    },
    setNote({ commit }, value) {
      commit('setNote', value)
    },
    setEmail({ commit }, value) {
      commit('setEmail', value)
    },
    setPassword({ commit }, value) {
      commit('setPassword', value)
    },
    setRole({ commit }, value) {
      commit('setRole', value)
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
    setStCode(state, value) {
      state.entry.st_code = value
    },
    setFirstName(state, value) {
      state.entry.first_name = value
    },
    setLastName(state, value) {
      state.entry.last_name = value
    },
    setGender(state, value) {
      state.entry.gender = value
    },
    setDob(state, value) {
      state.entry.dob = value
    },
    setVillageBirth(state, value) {
      state.entry.village_birth = value
    },
    setDistrict(state, value) {
      state.entry.district = value
    },
    setProvince(state, value) {
      state.entry.province = value
    },
    setFatherName(state, value) {
      state.entry.father_name = value
    },
    setFatherNo(state, value) {
      state.entry.father_no = value
    },
    setMotherName(state, value) {
      state.entry.mother_name = value
    },
    setMotherNo(state, value) {
      state.entry.mother_no = value
    },
    setCurrentVill(state, value) {
      state.entry.current_vill = value
    },
    setCurrentDis(state, value) {
      state.entry.current_dis = value
    },
    setCurrentPro(state, value) {
      state.entry.current_pro = value
    },
    setIclass(state, value) {
      state.entry.iclass_id = value
    },
    setSchool(state, value) {
      state.entry.school_id = value
    },
    setEndFrom(state, value) {
      state.entry.end_from = value
    },
    setEndDate(state, value) {
      state.entry.end_date = value
    },
    insertPhotoFile(state, file) {
      state.entry.photo.push(file)
    },
    removePhotoFile(state, file) {
      state.entry.photo = state.entry.photo.filter(item => {
        return item.id !== file.id
      })
    },
    setPhone(state, value) {
      state.entry.phone = value
    },
    setNote(state, value) {
      state.entry.note = value
    },
    setEmail(state, value) {
      state.entry.email = value
    },
    setPassword(state, value) {
      state.entry.password = value
    },
    setRole(state, value) {
      state.entry.role = value
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
