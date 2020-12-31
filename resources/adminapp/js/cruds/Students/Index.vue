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
              <strong>{{ $t('cruds.student.title') }}</strong>
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
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableList from '@components/Datatables/DatatableList'

export default {
  components: {
    GlobalSearch,
    HeaderSettings
  },
  data() {
    return {
      columns: [
        {
          title: 'cruds.student.fields.id',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 100px;'
        },
        {
          title: 'cruds.student.fields.st_code',
          field: 'st_code',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.first_name',
          field: 'first_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.last_name',
          field: 'last_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.gender',
          field: 'gender',
          thComp: TranslatedHeader,
          sortable: true,
          tdComp: DatatableEnum
        },
        {
          title: 'cruds.student.fields.dob',
          field: 'dob',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.village_birth',
          field: 'village_birth',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.district',
          field: 'district',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.province',
          field: 'province',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.father_name',
          field: 'father_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.father_no',
          field: 'father_no',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.mother_name',
          field: 'mother_name',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.mother_no',
          field: 'mother_no',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.current_vill',
          field: 'current_vill',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.current_dis',
          field: 'current_dis',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.current_pro',
          field: 'current_pro',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.iclass',
          field: 'iclass.iclass',
          thComp: TranslatedHeader,
          tdComp: DatatableSingle,
          sortable: true
        },
        {
          title: 'cruds.student.fields.school',
          field: 'school.school',
          thComp: TranslatedHeader,
          tdComp: DatatableSingle,
          sortable: true
        },
        {
          title: 'cruds.student.fields.end_from',
          field: 'end_from',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.end_date',
          field: 'end_date',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.photo',
          field: 'photo',
          thComp: TranslatedHeader,
          tdComp: DatatablePictures
        },
        {
          title: 'cruds.student.fields.phone',
          field: 'phone',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.note',
          field: 'note',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.email',
          field: 'email',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.student.fields.role',
          field: 'role.title',
          thComp: TranslatedHeader,
          tdComp: DatatableList
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
        module: 'StudentsIndex',
        route: 'students',
        permission_prefix: 'student_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('StudentsIndex', ['data', 'total', 'loading'])
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
    ...mapActions('StudentsIndex', ['fetchIndexData', 'setQuery', 'resetState'])
  }
}
</script>
