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
                <strong>{{
                  $t('cruds.historyAdminTeacher.title_singular')
                }}</strong>
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
                      $t('cruds.historyAdminTeacher.fields.title')
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
                  <div class="form-group">
                    <label>{{
                      $t('cruds.historyAdminTeacher.fields.photo')
                    }}</label>
                    <attachment
                      :route="getRoute('history-admin-teachers')"
                      :collection-name="'history_admin_teacher_photo'"
                      :media="entry.photo"
                      :model-id="$route.params.id"
                      :max-file-size="4"
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
                      'has-items': entry.fist_name,
                      'is-focused': activeField == 'fist_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.fist_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.fist_name"
                      @input="updateFistName"
                      @focus="focusField('fist_name')"
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
                      $t('cruds.historyAdminTeacher.fields.last_name')
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
                      $t('cruds.historyAdminTeacher.fields.gender')
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
                      'has-items': entry.eng_name,
                      'is-focused': activeField == 'eng_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.eng_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.eng_name"
                      @input="updateEngName"
                      @focus="focusField('eng_name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.eng_last,
                      'is-focused': activeField == 'eng_last'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.eng_last')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.eng_last"
                      @input="updateEngLast"
                      @focus="focusField('eng_last')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.dob,
                      'is-focused': activeField == 'dob'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.dob')
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
                      'has-items': entry.txt,
                      'is-focused': activeField == 'txt'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.txt')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.txt"
                      @input="updateTxt"
                      @focus="focusField('txt')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.tribes,
                      'is-focused': activeField == 'tribes'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.tribes')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.tribes"
                      @input="updateTribes"
                      @focus="focusField('tribes')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.religion,
                      'is-focused': activeField == 'religion'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.religion')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.religion"
                      @input="updateReligion"
                      @focus="focusField('religion')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.pabbajja,
                      'is-focused': activeField == 'pabbajja'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.historyAdminTeacher.fields.pabbajja')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      :value="entry.pabbajja"
                      @input="updatePabbajja"
                      @focus="focusField('pabbajja')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.identification_card,
                      'is-focused': activeField == 'identification_card'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.identification_card')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.identification_card"
                      @input="updateIdentificationCard"
                      @focus="focusField('identification_card')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.province_birth,
                      'is-focused': activeField == 'province_birth'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.province_birth')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.province_birth"
                      @input="updateProvinceBirth"
                      @focus="focusField('province_birth')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.district_birth,
                      'is-focused': activeField == 'district_birth'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.district_birth')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.district_birth"
                      @input="updateDistrictBirth"
                      @focus="focusField('district_birth')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.village_birth,
                      'is-focused': activeField == 'village_birth'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.village_birth')
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
                      'has-items': entry.current_pro,
                      'is-focused': activeField == 'current_pro'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.current_pro')
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
                      'has-items': entry.current_dist,
                      'is-focused': activeField == 'current_dist'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.current_dist')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.current_dist"
                      @input="updateCurrentDist"
                      @focus="focusField('current_dist')"
                      @blur="clearFocus"
                      required
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
                      $t('cruds.historyAdminTeacher.fields.current_vill')
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
                      'has-items': entry.temple,
                      'is-focused': activeField == 'temple'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.temple')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.temple"
                      @input="updateTemple"
                      @focus="focusField('temple')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_no,
                      'is-focused': activeField == 'phone_no'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.phone_no')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.phone_no"
                      @input="updatePhoneNo"
                      @focus="focusField('phone_no')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_mobile,
                      'is-focused': activeField == 'phone_mobile'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.historyAdminTeacher.fields.phone_mobile')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.phone_mobile"
                      @input="updatePhoneMobile"
                      @focus="focusField('phone_mobile')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.office_no,
                      'is-focused': activeField == 'office_no'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.historyAdminTeacher.fields.office_no')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.office_no"
                      @input="updateOfficeNo"
                      @focus="focusField('office_no')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.census,
                      'is-focused': activeField == 'census'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.census')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.census"
                      @input="updateCensus"
                      @focus="focusField('census')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.allow_date,
                      'is-focused': activeField == 'allow_date'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.historyAdminTeacher.fields.allow_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.allow_date"
                      @input="updateAllowDate"
                      @focus="focusField('allow_date')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.at,
                      'is-focused': activeField == 'at'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.historyAdminTeacher.fields.at')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.at"
                      @input="updateAt"
                      @focus="focusField('at')"
                      @blur="clearFocus"
                      required
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
    ...mapGetters('HistoryAdminTeachersSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('HistoryAdminTeachersSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setTitle',
      'insertPhotoFile',
      'removePhotoFile',
      'setFistName',
      'setLastName',
      'setGender',
      'setEngName',
      'setEngLast',
      'setDob',
      'setTxt',
      'setTribes',
      'setReligion',
      'setPabbajja',
      'setIdentificationCard',
      'setProvinceBirth',
      'setDistrictBirth',
      'setVillageBirth',
      'setCurrentPro',
      'setCurrentDist',
      'setCurrentVill',
      'setTemple',
      'setPhoneNo',
      'setPhoneMobile',
      'setOfficeNo',
      'setCensus',
      'setAllowDate',
      'setAt'
    ]),
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateFistName(e) {
      this.setFistName(e.target.value)
    },
    updateLastName(e) {
      this.setLastName(e.target.value)
    },
    updateGender(value) {
      this.setGender(value)
    },
    updateEngName(e) {
      this.setEngName(e.target.value)
    },
    updateEngLast(e) {
      this.setEngLast(e.target.value)
    },
    updateDob(e) {
      this.setDob(e.target.value)
    },
    updateTxt(e) {
      this.setTxt(e.target.value)
    },
    updateTribes(e) {
      this.setTribes(e.target.value)
    },
    updateReligion(e) {
      this.setReligion(e.target.value)
    },
    updatePabbajja(e) {
      this.setPabbajja(e.target.value)
    },
    updateIdentificationCard(e) {
      this.setIdentificationCard(e.target.value)
    },
    updateProvinceBirth(e) {
      this.setProvinceBirth(e.target.value)
    },
    updateDistrictBirth(e) {
      this.setDistrictBirth(e.target.value)
    },
    updateVillageBirth(e) {
      this.setVillageBirth(e.target.value)
    },
    updateCurrentPro(e) {
      this.setCurrentPro(e.target.value)
    },
    updateCurrentDist(e) {
      this.setCurrentDist(e.target.value)
    },
    updateCurrentVill(e) {
      this.setCurrentVill(e.target.value)
    },
    updateTemple(e) {
      this.setTemple(e.target.value)
    },
    updatePhoneNo(e) {
      this.setPhoneNo(e.target.value)
    },
    updatePhoneMobile(e) {
      this.setPhoneMobile(e.target.value)
    },
    updateOfficeNo(e) {
      this.setOfficeNo(e.target.value)
    },
    updateCensus(e) {
      this.setCensus(e.target.value)
    },
    updateAllowDate(e) {
      this.setAllowDate(e.target.value)
    },
    updateAt(e) {
      this.setAt(e.target.value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'history_admin_teachers.index' })
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
