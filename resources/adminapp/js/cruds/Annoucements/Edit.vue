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
                <strong>{{ $t('cruds.annoucement.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.annoucement.fields.annoucement')
                    }}</label>
                    <attachment
                      :route="getRoute('annoucements')"
                      :collection-name="'annoucement_annoucement'"
                      :media="entry.annoucement"
                      :model-id="$route.params.id"
                      :max-file-size="6"
                      @file-uploaded="insertAnnoucementFile"
                      @file-removed="removeAnnoucementFile"
                      :max-files="1"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.annoucement.fields.name')
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
                      'has-items': entry.number,
                      'is-focused': activeField == 'number'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.annoucement.fields.number')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.number"
                      @input="updateNumber"
                      @focus="focusField('number')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.short_name,
                      'is-focused': activeField == 'short_name'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.annoucement.fields.short_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.short_name"
                      @input="updateShortName"
                      @focus="focusField('short_name')"
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
                    <label class="bmd-label-floating required">{{
                      $t('cruds.annoucement.fields.allow_date')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.allow_date"
                      @input="updateAllowDate"
                      @focus="focusField('allow_date')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.annoucement.fields.description')
                    }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.description"
                      @input="updateDescription"
                      required
                    >
                    </ckeditor>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    Attachment,
    ClassicEditor
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('AnnoucementsSingle', ['entry', 'loading'])
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
    ...mapActions('AnnoucementsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'insertAnnoucementFile',
      'removeAnnoucementFile',
      'setName',
      'setNumber',
      'setShortName',
      'setAllowDate',
      'setDescription'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateNumber(e) {
      this.setNumber(e.target.value)
    },
    updateShortName(e) {
      this.setShortName(e.target.value)
    },
    updateAllowDate(e) {
      this.setAllowDate(e.target.value)
    },
    updateDescription(value) {
      this.setDescription(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'annoucements.index' })
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
