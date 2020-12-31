<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.student.title_singular') }}</strong>
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
                      'has-items': entry.st_code,
                      'is-focused': activeField == 'st_code'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.st_code')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.st_code"
                      @input="updateStCode"
                      @focus="focusField('st_code')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.first_name,
                      'is-focused': activeField == 'first_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.first_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.first_name"
                      @input="updateFirstName"
                      @focus="focusField('first_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last_name,
                      'is-focused': activeField == 'last_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.last_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.last_name"
                      @input="updateLastName"
                      @focus="focusField('last_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.student.fields.gender')
                    }}</label>
                    <v-radio
                      :value="entry.gender"
                      :options="lists.gender"
                      @change="updateGender"
                    >
                    </v-radio>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.dob,
                      'is-focused': activeField == 'dob'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.dob')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.dob"
                      @input="updateDob"
                      @focus="focusField('dob')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.village_birth,
                      'is-focused': activeField == 'village_birth'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.village_birth')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.village_birth"
                      @input="updateVillageBirth"
                      @focus="focusField('village_birth')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.district,
                      'is-focused': activeField == 'district'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.district')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.district"
                      @input="updateDistrict"
                      @focus="focusField('district')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.province,
                      'is-focused': activeField == 'province'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.province')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.province"
                      @input="updateProvince"
                      @focus="focusField('province')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.father_name,
                      'is-focused': activeField == 'father_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.father_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.father_name"
                      @input="updateFatherName"
                      @focus="focusField('father_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.father_no,
                      'is-focused': activeField == 'father_no'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.father_no')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.father_no"
                      @input="updateFatherNo"
                      @focus="focusField('father_no')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.mother_name,
                      'is-focused': activeField == 'mother_name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.mother_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.mother_name"
                      @input="updateMotherName"
                      @focus="focusField('mother_name')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.mother_no,
                      'is-focused': activeField == 'mother_no'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.mother_no')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.mother_no"
                      @input="updateMotherNo"
                      @focus="focusField('mother_no')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.current_vill,
                      'is-focused': activeField == 'current_vill'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.current_vill')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.current_vill"
                      @input="updateCurrentVill"
                      @focus="focusField('current_vill')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.current_dis,
                      'is-focused': activeField == 'current_dis'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.current_dis')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.current_dis"
                      @input="updateCurrentDis"
                      @focus="focusField('current_dis')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.current_pro,
                      'is-focused': activeField == 'current_pro'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.current_pro')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.current_pro"
                      @input="updateCurrentPro"
                      @focus="focusField('current_pro')"
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
                      $t('cruds.student.fields.iclass')
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
                      $t('cruds.student.fields.school')
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
                      'has-items': entry.end_from,
                      'is-focused': activeField == 'end_from'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.end_from')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.end_from"
                      @input="updateEndFrom"
                      @focus="focusField('end_from')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.end_date,
                      'is-focused': activeField == 'end_date'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.end_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.end_date"
                      @input="updateEndDate"
                      @focus="focusField('end_date')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.student.fields.photo') }}</label>
                    <attachment
                      :route="getRoute('students')"
                      :collection-name="'student_photo'"
                      :media="entry.photo"
                      :model-id="$route.params.id"
                      :max-file-size="6"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPhotoFile"
                      @file-removed="removePhotoFile"
                      :max-files="1"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone,
                      'is-focused': activeField == 'phone'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.phone')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.phone"
                      @input="updatePhone"
                      @focus="focusField('phone')"
                      @blur="clearFocus"
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
                      $t('cruds.student.fields.note')
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
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.email,
                      'is-focused': activeField == 'email'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.email')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.email"
                      @input="updateEmail"
                      @focus="focusField('email')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.password,
                      'is-focused': activeField == 'password'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.student.fields.password')
                    }}</label>
                    <input
                      class="form-control"
                      type="password"
                      :value="entry.password"
                      @input="updatePassword"
                      @focus="focusField('password')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.role.length !== 0,
                      'is-focused': activeField == 'role'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.student.fields.role')
                    }}</label>
                    <v-select
                      name="role"
                      label="title"
                      :key="'role-field'"
                      :value="entry.role"
                      :options="lists.role"
                      :closeOnSelect="false"
                      multiple
                      @input="updateRole"
                      @search.focus="focusField('role')"
                      @search.blur="clearFocus"
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
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('StudentsSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('StudentsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setStCode',
      'setFirstName',
      'setLastName',
      'setGender',
      'setDob',
      'setVillageBirth',
      'setDistrict',
      'setProvince',
      'setFatherName',
      'setFatherNo',
      'setMotherName',
      'setMotherNo',
      'setCurrentVill',
      'setCurrentDis',
      'setCurrentPro',
      'setIclass',
      'setSchool',
      'setEndFrom',
      'setEndDate',
      'insertPhotoFile',
      'removePhotoFile',
      'setPhone',
      'setNote',
      'setEmail',
      'setPassword',
      'setRole'
    ]),
    updateStCode(e) {
      this.setStCode(e.target.value)
    },
    updateFirstName(e) {
      this.setFirstName(e.target.value)
    },
    updateLastName(e) {
      this.setLastName(e.target.value)
    },
    updateGender(value) {
      this.setGender(value)
    },
    updateDob(e) {
      this.setDob(e.target.value)
    },
    updateVillageBirth(e) {
      this.setVillageBirth(e.target.value)
    },
    updateDistrict(e) {
      this.setDistrict(e.target.value)
    },
    updateProvince(e) {
      this.setProvince(e.target.value)
    },
    updateFatherName(e) {
      this.setFatherName(e.target.value)
    },
    updateFatherNo(e) {
      this.setFatherNo(e.target.value)
    },
    updateMotherName(e) {
      this.setMotherName(e.target.value)
    },
    updateMotherNo(e) {
      this.setMotherNo(e.target.value)
    },
    updateCurrentVill(e) {
      this.setCurrentVill(e.target.value)
    },
    updateCurrentDis(e) {
      this.setCurrentDis(e.target.value)
    },
    updateCurrentPro(e) {
      this.setCurrentPro(e.target.value)
    },
    updateIclass(value) {
      this.setIclass(value)
    },
    updateSchool(value) {
      this.setSchool(value)
    },
    updateEndFrom(e) {
      this.setEndFrom(e.target.value)
    },
    updateEndDate(e) {
      this.setEndDate(e.target.value)
    },
    updatePhone(e) {
      this.setPhone(e.target.value)
    },
    updateNote(e) {
      this.setNote(e.target.value)
    },
    updateEmail(e) {
      this.setEmail(e.target.value)
    },
    updatePassword(e) {
      this.setPassword(e.target.value)
    },
    updateRole(value) {
      this.setRole(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'students.index' })
          this.$eventHub.$emit('update-success')
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
