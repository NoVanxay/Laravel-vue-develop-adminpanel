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
                <strong>{{ $t('cruds.user.title_singular') }}</strong>
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
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.name"
                      @input="updateName"
                      @focus="focusField('name')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last,
                      'is-focused': activeField == 'last'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.last')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.last"
                      @input="updateLast"
                      @focus="focusField('last')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.user.fields.gender')
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
                      $t('cruds.user.fields.dob')
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
                      'has-items': entry.village,
                      'is-focused': activeField == 'village'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.village')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.village"
                      @input="updateVillage"
                      @focus="focusField('village')"
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
                      $t('cruds.user.fields.district')
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
                      $t('cruds.user.fields.province')
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
                      'has-items': entry.phone_no,
                      'is-focused': activeField == 'phone_no'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.phone_no')
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
                      'has-items': entry.is_verified,
                      'is-focused': activeField == 'is_verified'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.is_verified')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.is_verified"
                      @input="updateIsVerified"
                      @focus="focusField('is_verified')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.email,
                      'is-focused': activeField == 'email'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.email')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.email"
                      @input="updateEmail"
                      @focus="focusField('email')"
                      @blur="clearFocus"
                      required
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
                      $t('cruds.user.fields.password')
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
                      'has-items': entry.roles.length !== 0,
                      'is-focused': activeField == 'roles'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.user.fields.roles')
                    }}</label>
                    <v-select
                      name="roles"
                      label="title"
                      :key="'roles-field'"
                      :value="entry.roles"
                      :options="lists.roles"
                      :closeOnSelect="false"
                      multiple
                      @input="updateRoles"
                      @search.focus="focusField('roles')"
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

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('UsersSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('UsersSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setName',
      'setLast',
      'setGender',
      'setDob',
      'setVillage',
      'setDistrict',
      'setProvince',
      'setPhoneNo',
      'setIsVerified',
      'setEmail',
      'setPassword',
      'setRoles'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateLast(e) {
      this.setLast(e.target.value)
    },
    updateGender(value) {
      this.setGender(value)
    },
    updateDob(e) {
      this.setDob(e.target.value)
    },
    updateVillage(e) {
      this.setVillage(e.target.value)
    },
    updateDistrict(e) {
      this.setDistrict(e.target.value)
    },
    updateProvince(e) {
      this.setProvince(e.target.value)
    },
    updatePhoneNo(e) {
      this.setPhoneNo(e.target.value)
    },
    updateIsVerified(e) {
      this.setIsVerified(e.target.value)
    },
    updateEmail(e) {
      this.setEmail(e.target.value)
    },
    updatePassword(e) {
      this.setPassword(e.target.value)
    },
    updateRoles(value) {
      this.setRoles(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'users.index' })
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
