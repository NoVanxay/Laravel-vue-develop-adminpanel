function initialState() {
    return {
      entry: {
        id: null,
        title: '',
        table_code: '',
        gender_id: null,
        student: [],
        last_name_id: null,
        subject: [],
        exam_date: '',
        study_years: '',
        iclass_id: null,
        school_id: null,
        point: '',
        note: '',
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      lists: {
        gender: [],
        student: [],
        last_name: [],
        subject: [],
        iclass: [],
        school: []
      },
      loading: false
    }
  }

  const route = 'exam-results'

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
    setTableCode({ commit }, value) {
      commit('setTableCode', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setStudent({ commit }, value) {
      commit('setStudent', value)
    },
    setLastName({ commit }, value) {
      commit('setLastName', value)
    },
    setSubject({ commit }, value) {
      commit('setSubject', value)
    },
    setExamDate({ commit }, value) {
      commit('setExamDate', value)
    },
    setStudyYears({ commit }, value) {
      commit('setStudyYears', value)
    },
    setIclass({ commit }, value) {
      commit('setIclass', value)
    },
    setSchool({ commit }, value) {
      commit('setSchool', value)
    },
    setPoint({ commit }, value) {
      commit('setPoint', value)
    },
    setNote({ commit }, value) {
      commit('setNote', value)
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
    setTableCode(state, value) {
      state.entry.table_code = value
    },
    setGender(state, value) {
      state.entry.gender_id = value
    },
    setStudent(state, value) {
      state.entry.student = value
    },
    setLastName(state, value) {
      state.entry.last_name_id = value
    },
    setSubject(state, value) {
      state.entry.subject = value
    },
    setExamDate(state, value) {
      state.entry.exam_date = value
    },
    setStudyYears(state, value) {
      state.entry.study_years = value
    },
    setIclass(state, value) {
      state.entry.iclass_id = value
    },
    setSchool(state, value) {
      state.entry.school_id = value
    },
    setPoint(state, value) {
      state.entry.point = value
    },
    setNote(state, value) {
      state.entry.note = value
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
