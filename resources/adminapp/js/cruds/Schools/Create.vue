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
                <strong>{{ $t('cruds.school.title_singular') }}</strong>
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
                      'has-items': entry.school,
                      'is-focused': activeField == 'school'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.school.fields.school')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.school"
                      @input="updateSchool"
                      @focus="focusField('school')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.village,
                      'is-focused': activeField == 'village'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.school.fields.village')
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
                      $t('cruds.school.fields.district')
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
                      $t('cruds.school.fields.province')
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
    ...mapGetters('SchoolsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('SchoolsSingle', [
      'storeData',
      'resetState',
      'setSchool',
      'setVillage',
      'setDistrict',
      'setProvince'
    ]),
    updateSchool(e) {
      this.setSchool(e.target.value)
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
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'schools.index' })
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
