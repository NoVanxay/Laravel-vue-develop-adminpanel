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
                <strong>{{ $t('cruds.subject.title_singular') }}</strong>
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
                      'has-items': entry.subject_code,
                      'is-focused': activeField == 'subject_code'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.subject.fields.subject_code')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.subject_code"
                      @input="updateSubjectCode"
                      @focus="focusField('subject_code')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.subject,
                      'is-focused': activeField == 'subject'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.subject.fields.subject')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.subject"
                      @input="updateSubject"
                      @focus="focusField('subject')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.iclass.length !== 0,
                      'is-focused': activeField == 'iclass'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.subject.fields.iclass')
                    }}</label>
                    <v-select
                      name="iclass"
                      label="iclass"
                      :key="'iclass-field'"
                      :value="entry.iclass"
                      :options="lists.iclass"
                      :closeOnSelect="false"
                      multiple
                      @input="updateIclass"
                      @search.focus="focusField('iclass')"
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
    ...mapGetters('SubjectsSingle', ['entry', 'loading', 'lists'])
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
    ...mapActions('SubjectsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setSubjectCode',
      'setSubject',
      'setIclass'
    ]),
    updateSubjectCode(e) {
      this.setSubjectCode(e.target.value)
    },
    updateSubject(e) {
      this.setSubject(e.target.value)
    },
    updateIclass(value) {
      this.setIclass(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'subjects.index' })
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
