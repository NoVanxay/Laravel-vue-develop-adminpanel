<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.view') }}
              <strong>{{ $t('cruds.student.title_singular') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.st_code') }}
                        </td>
                        <td>
                          {{ entry.st_code }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.first_name') }}
                        </td>
                        <td>
                          {{ entry.first_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.last_name') }}
                        </td>
                        <td>
                          {{ entry.last_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.gender') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="gender">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.dob') }}
                        </td>
                        <td>
                          {{ entry.dob }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.village_birth') }}
                        </td>
                        <td>
                          {{ entry.village_birth }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.district') }}
                        </td>
                        <td>
                          {{ entry.district }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.province') }}
                        </td>
                        <td>
                          {{ entry.province }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.father_name') }}
                        </td>
                        <td>
                          {{ entry.father_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.father_no') }}
                        </td>
                        <td>
                          {{ entry.father_no }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.mother_name') }}
                        </td>
                        <td>
                          {{ entry.mother_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.mother_no') }}
                        </td>
                        <td>
                          {{ entry.mother_no }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.current_vill') }}
                        </td>
                        <td>
                          {{ entry.current_vill }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.current_dis') }}
                        </td>
                        <td>
                          {{ entry.current_dis }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.current_pro') }}
                        </td>
                        <td>
                          {{ entry.current_pro }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.iclass') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="iclass.iclass">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.school') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="school.school">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.end_from') }}
                        </td>
                        <td>
                          {{ entry.end_from }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.end_date') }}
                        </td>
                        <td>
                          {{ entry.end_date }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.photo') }}
                        </td>
                        <td>
                          <datatable-pictures :row="entry" :field="'photo'">
                          </datatable-pictures>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.phone') }}
                        </td>
                        <td>
                          {{ entry.phone }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.note') }}
                        </td>
                        <td>
                          {{ entry.note }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.email') }}
                        </td>
                        <td>
                          {{ entry.email }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.password') }}
                        </td>
                        <td>
                          {{ entry.password }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.student.fields.role') }}
                        </td>
                        <td>
                          <datatable-list :row="entry" field="role.title">
                          </datatable-list>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableList from '@components/Datatables/DatatableList'

export default {
  components: {
    DatatableEnum,
    DatatableSingle,
    DatatablePictures,
    DatatableList
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('StudentsSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('StudentsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
