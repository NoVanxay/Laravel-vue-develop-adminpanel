<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.table') }}
              <strong>{{ $t('cruds.historyAdminTeacher.title') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add') }}
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
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
import DatatableActions from '@components/Datatables/DatatableActions'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatablePictures from '@components/Datatables/DatatablePictures'

export default {
  components: {
    GlobalSearch,
    HeaderSettings
  },
  data() {
    return {
      columns: [
        {
          title: 'cruds.historyAdminTeacher.fields.id',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 100px;'
        },
        {
          title: 'cruds.historyAdminTeacher.fields.title',
          field: 'title',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.photo',
          field: 'photo',
          thComp: TranslatedHeader,
          tdComp: DatatablePictures
        },
        {
          title: 'cruds.historyAdminTeacher.fields.fist_name',
          field: 'fist_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.last_name',
          field: 'last_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.gender',
          field: 'gender',
          thComp: TranslatedHeader,
          sortable: true,
          tdComp: DatatableEnum
        },
        {
          title: 'cruds.historyAdminTeacher.fields.eng_name',
          field: 'eng_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.eng_last',
          field: 'eng_last',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.dob',
          field: 'dob',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.txt',
          field: 'txt',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.tribes',
          field: 'tribes',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.religion',
          field: 'religion',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.pabbajja',
          field: 'pabbajja',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.identification_card',
          field: 'identification_card',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.province_birth',
          field: 'province_birth',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.district_birth',
          field: 'district_birth',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.village_birth',
          field: 'village_birth',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.current_pro',
          field: 'current_pro',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.current_dist',
          field: 'current_dist',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.current_vill',
          field: 'current_vill',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.temple',
          field: 'temple',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.phone_no',
          field: 'phone_no',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.phone_mobile',
          field: 'phone_mobile',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.office_no',
          field: 'office_no',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.census',
          field: 'census',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.allow_date',
          field: 'allow_date',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.historyAdminTeacher.fields.at',
          field: 'at',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'global.actions',
          thComp: TranslatedHeader,
          tdComp: DatatableActions,
          visible: true,
          thClass: 'text-right',
          tdClass: 'text-right td-actions',
          colStyle: 'width: 150px;'
        }
      ],
      query: { sort: 'id', order: 'desc', limit: 100, s: '' },
      xprops: {
        module: 'HistoryAdminTeachersIndex',
        route: 'history_admin_teachers',
        permission_prefix: 'history_admin_teacher_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('HistoryAdminTeachersIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('HistoryAdminTeachersIndex', [
      'fetchIndexData',
      'setQuery',
      'resetState'
    ])
  }
}
</script>
