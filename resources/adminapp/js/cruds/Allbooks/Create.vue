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
                <strong>{{ $t('cruds.allbook.title_singular') }}</strong>
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
                      $t('cruds.allbook.fields.file')
                    }}</label>
                    <attachment
                      :route="getRoute('allbooks')"
                      :collection-name="'allbook_file'"
                      :media="entry.file"
                      :max-file-size="6"
                      @file-uploaded="insertFileFile"
                      @file-removed="removeFileFile"
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
                      $t('cruds.allbook.fields.name')
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
                      'has-items': entry.category,
                      'is-focused': activeField == 'category'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.allbook.fields.category')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.category"
                      @input="updateCategory"
                      @focus="focusField('category')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.publisher,
                      'is-focused': activeField == 'publisher'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.allbook.fields.publisher')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.publisher"
                      @input="updatePublisher"
                      @focus="focusField('publisher')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.page,
                      'is-focused': activeField == 'page'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.allbook.fields.page')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.page"
                      @input="updatePage"
                      @focus="focusField('page')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.isbn,
                      'is-focused': activeField == 'isbn'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.allbook.fields.isbn')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="1"
                      :value="entry.isbn"
                      @input="updateIsbn"
                      @focus="focusField('isbn')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.price,
                      'is-focused': activeField == 'price'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.allbook.fields.price')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.price"
                      @input="updatePrice"
                      @focus="focusField('price')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.allbook.fields.photo') }}</label>
                    <attachment
                      :route="getRoute('allbooks')"
                      :collection-name="'allbook_photo'"
                      :media="entry.photo"
                      :max-file-size="2"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPhotoFile"
                      @file-removed="removePhotoFile"
                      :max-files="1"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.allbook.fields.description') }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.description"
                      @input="updateDescription"
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
    ...mapGetters('AllbooksSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('AllbooksSingle', [
      'storeData',
      'resetState',
      'insertFileFile',
      'removeFileFile',
      'setName',
      'setCategory',
      'setPublisher',
      'setPage',
      'setIsbn',
      'setPrice',
      'insertPhotoFile',
      'removePhotoFile',
      'setDescription'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateCategory(e) {
      this.setCategory(e.target.value)
    },
    updatePublisher(e) {
      this.setPublisher(e.target.value)
    },
    updatePage(e) {
      this.setPage(e.target.value)
    },
    updateIsbn(e) {
      this.setIsbn(e.target.value)
    },
    updatePrice(e) {
      this.setPrice(e.target.value)
    },
    updateDescription(value) {
      this.setDescription(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'allbooks.index' })
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
