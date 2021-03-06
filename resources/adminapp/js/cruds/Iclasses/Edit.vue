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
                <strong>{{ $t('cruds.iclass.title_singular') }}</strong>
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
                      'has-items': entry.iclass,
                      'is-focused': activeField == 'iclass'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.iclass.fields.iclass')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.iclass"
                      @input="updateIclass"
                      @focus="focusField('iclass')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.school.length !== 0,
                      'is-focused': activeField == 'school'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.iclass.fields.school')
                    }}</label>
                    <v-select
                      name="school"
                      label="school"
                      :key="'school-field'"
                      :value="entry.school"
                      :options="lists.school"
                      :closeOnSelect="false"
                      multiple
                      @input="updateSchool"
                      @search.focus="focusField('school')"
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
    ...mapGetters('IclassesSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('IclassesSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setIclass',
      'setSchool'
    ]),
    updateIclass(e) {
      this.setIclass(e.target.value)
    },
    updateSchool(value) {
      this.setSchool(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'iclasses.index' })
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
