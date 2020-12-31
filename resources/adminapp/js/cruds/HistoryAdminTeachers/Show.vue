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
              <strong>{{
                $t('cruds.historyAdminTeacher.title_singular')
              }}</strong>
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
                          {{ $t('cruds.historyAdminTeacher.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.title') }}
                        </td>
                        <td>
                          {{ entry.title }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.photo') }}
                        </td>
                        <td>
                          <datatable-pictures :row="entry" :field="'photo'">
                          </datatable-pictures>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.fist_name') }}
                        </td>
                        <td>
                          {{ entry.fist_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.last_name') }}
                        </td>
                        <td>
                          {{ entry.last_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.gender') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="gender">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.eng_name') }}
                        </td>
                        <td>
                          {{ entry.eng_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.eng_last') }}
                        </td>
                        <td>
                          {{ entry.eng_last }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.dob') }}
                        </td>
                        <td>
                          {{ entry.dob }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.txt') }}
                        </td>
                        <td>
                          {{ entry.txt }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.tribes') }}
                        </td>
                        <td>
                          {{ entry.tribes }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.religion') }}
                        </td>
                        <td>
                          {{ entry.religion }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.pabbajja') }}
                        </td>
                        <td>
                          {{ entry.pabbajja }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.historyAdminTeacher.fields.identification_card'
                            )
                          }}
                        </td>
                        <td>
                          {{ entry.identification_card }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.historyAdminTeacher.fields.province_birth'
                            )
                          }}
                        </td>
                        <td>
                          {{ entry.province_birth }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.historyAdminTeacher.fields.district_birth'
                            )
                          }}
                        </td>
                        <td>
                          {{ entry.district_birth }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.village_birth')
                          }}
                        </td>
                        <td>
                          {{ entry.village_birth }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.current_pro')
                          }}
                        </td>
                        <td>
                          {{ entry.current_pro }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.current_dist')
                          }}
                        </td>
                        <td>
                          {{ entry.current_dist }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.current_vill')
                          }}
                        </td>
                        <td>
                          {{ entry.current_vill }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.temple') }}
                        </td>
                        <td>
                          {{ entry.temple }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.phone_no') }}
                        </td>
                        <td>
                          {{ entry.phone_no }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.phone_mobile')
                          }}
                        </td>
                        <td>
                          {{ entry.phone_mobile }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.office_no') }}
                        </td>
                        <td>
                          {{ entry.office_no }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.census') }}
                        </td>
                        <td>
                          {{ entry.census }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.historyAdminTeacher.fields.allow_date')
                          }}
                        </td>
                        <td>
                          {{ entry.allow_date }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.historyAdminTeacher.fields.at') }}
                        </td>
                        <td>
                          {{ entry.at }}
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
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableEnum from '@components/Datatables/DatatableEnum'

export default {
  components: {
    DatatablePictures,
    DatatableEnum
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('HistoryAdminTeachersSingle', ['entry'])
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
    ...mapActions('HistoryAdminTeachersSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
