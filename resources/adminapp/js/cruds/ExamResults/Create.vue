<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.examResult.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.title,
                      'is-focused': activeField == 'title'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.title')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.title"
                      @input="updateTitle"
                      @focus="focusField('title')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.table_code,
                      'is-focused': activeField == 'table_code'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.examResult.fields.table_code')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.table_code"
                      @input="updateTableCode"
                      @focus="focusField('table_code')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.gender_id !== null,
                      'is-focused': activeField == 'gender'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.gender')
                    }}</label>
                    <v-select
                      name="gender"
                      label="gender"
                      :key="'gender-field'"
                      :value="entry.gender_id"
                      :options="lists.gender"
                      :reduce="entry => entry.id"
                      @input="updateGender"
                      @search.focus="focusField('gender')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.student.length !== 0,
                      'is-focused': activeField == 'student'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.student')
                    }}</label>
                    <v-select
                      name="student"
                      label="first_name"
                      :key="'student-field'"
                      :value="entry.student"
                      :options="lists.student"
                      :closeOnSelect="false"
                      multiple
                      @input="updateStudent"
                      @search.focus="focusField('student')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last_name_id !== null,
                      'is-focused': activeField == 'last_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.last_name')
                    }}</label>
                    <v-select
                      name="last_name"
                      label="last_name"
                      :key="'last_name-field'"
                      :value="entry.last_name_id"
                      :options="lists.last_name"
                      :reduce="entry => entry.id"
                      @input="updateLastName"
                      @search.focus="focusField('last_name')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.subject.length !== 0,
                      'is-focused': activeField == 'subject'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.subject')
                    }}</label>
                    <v-select
                      name="subject"
                      label="subject"
                      :key="'subject-field'"
                      :value="entry.subject"
                      :options="lists.subject"
                      :closeOnSelect="false"
                      multiple
                      @input="updateSubject"
                      @search.focus="focusField('subject')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.exam_date,
                      'is-focused': activeField == 'exam_date'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.exam_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.exam_date"
                      @input="updateExamDate"
                      @focus="focusField('exam_date')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.study_years,
                      'is-focused': activeField == 'study_years'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.study_years')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.study_years"
                      @input="updateStudyYears"
                      @focus="focusField('study_years')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.iclass_id !== null,
                      'is-focused': activeField == 'iclass'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.iclass')
                    }}</label>
                    <v-select
                      name="iclass"
                      label="iclass"
                      :key="'iclass-field'"
                      :value="entry.iclass_id"
                      :options="lists.iclass"
                      :reduce="entry => entry.id"
                      @input="updateIclass"
                      @search.focus="focusField('iclass')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.school_id !== null,
                      'is-focused': activeField == 'school'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.school')
                    }}</label>
                    <v-select
                      name="school"
                      label="school"
                      :key="'school-field'"
                      :value="entry.school_id"
                      :options="lists.school"
                      :reduce="entry => entry.id"
                      @input="updateSchool"
                      @search.focus="focusField('school')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.point,
                      'is-focused': activeField == 'point'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.examResult.fields.point')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.point"
                      @input="updatePoint"
                      @focus="focusField('point')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.note,
                      'is-focused': activeField == 'note'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.examResult.fields.note')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.note"
                      @input="updateNote"
                      @focus="focusField('note')"
                      @blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('ExamResultsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ExamResultsSingle', [
      'storeData',
      'resetState',
      'setTitle',
      'setTableCode',
      'setGender',
      'setStudent',
      'setLastName',
      'setSubject',
      'setExamDate',
      'setStudyYears',
      'setIclass',
      'setSchool',
      'setPoint',
      'setNote',
      'fetchCreateData'
    ]),
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateTableCode(e) {
      this.setTableCode(e.target.value)
    },
    updateGender(value) {
      this.setGender(value)
    },
    updateStudent(value) {
      this.setStudent(value)
    },
    updateLastName(value) {
      this.setLastName(value)
    },
    updateSubject(value) {
      this.setSubject(value)
    },
    updateExamDate(e) {
      this.setExamDate(e.target.value)
    },
    updateStudyYears(e) {
      this.setStudyYears(e.target.value)
    },
    updateIclass(value) {
      this.setIclass(value)
    },
    updateSchool(value) {
      this.setSchool(value)
    },
    updatePoint(e) {
      this.setPoint(e.target.value)
    },
    updateNote(e) {
      this.setNote(e.target.value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'exam_results.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
