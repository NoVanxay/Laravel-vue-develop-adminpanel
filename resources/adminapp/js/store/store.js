import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import AnnoucementsIndex from './cruds/Annoucements'
import AnnoucementsSingle from './cruds/Annoucements/single'
import PoliciesIndex from './cruds/Policies'
import PoliciesSingle from './cruds/Policies/single'
import TextbooksIndex from './cruds/Textbooks'
import TextbooksSingle from './cruds/Textbooks/single'
import ManualsIndex from './cruds/Manuals'
import ManualsSingle from './cruds/Manuals/single'
import TemplatesIndex from './cruds/Templates'
import TemplatesSingle from './cruds/Templates/single'
import AboutusesIndex from './cruds/Aboutuses'
import AboutusesSingle from './cruds/Aboutuses/single'
import ContactusesIndex from './cruds/Contactuses'
import ContactusesSingle from './cruds/Contactuses/single'
import CategoriesIndex from './cruds/Categories'
import CategoriesSingle from './cruds/Categories/single'
import AllbooksIndex from './cruds/Allbooks'
import AllbooksSingle from './cruds/Allbooks/single'
import FaqCategoriesIndex from './cruds/FaqCategories'
import FaqCategoriesSingle from './cruds/FaqCategories/single'
import FaqQuestionsIndex from './cruds/FaqQuestions'
import FaqQuestionsSingle from './cruds/FaqQuestions/single'
import SchoolsIndex from './cruds/Schools'
import SchoolsSingle from './cruds/Schools/single'
import IclassesIndex from './cruds/Iclasses'
import IclassesSingle from './cruds/Iclasses/single'
import SubjectsIndex from './cruds/Subjects'
import SubjectsSingle from './cruds/Subjects/single'
import StudentsIndex from './cruds/Students'
import StudentsSingle from './cruds/Students/single'
import ExamResultsIndex from './cruds/ExamResults'
import ExamResultsSingle from './cruds/ExamResults/single'
import HistoryAdminTeachersIndex from './cruds/HistoryAdminTeachers'
import HistoryAdminTeachersSingle from './cruds/HistoryAdminTeachers/single'
import ContentCategoriesIndex from './cruds/ContentCategories'
import ContentCategoriesSingle from './cruds/ContentCategories/single'
import ContentTagsIndex from './cruds/ContentTags'
import ContentTagsSingle from './cruds/ContentTags/single'
import ContentPagesIndex from './cruds/ContentPages'
import ContentPagesSingle from './cruds/ContentPages/single'
import CommentsIndex from './cruds/Comments'
import CommentsSingle from './cruds/Comments/single'
import RepliesIndex from './cruds/Replies'
import RepliesSingle from './cruds/Replies/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    AnnoucementsIndex,
    AnnoucementsSingle,
    PoliciesIndex,
    PoliciesSingle,
    TextbooksIndex,
    TextbooksSingle,
    ManualsIndex,
    ManualsSingle,
    TemplatesIndex,
    TemplatesSingle,
    AboutusesIndex,
    AboutusesSingle,
    ContactusesIndex,
    ContactusesSingle,
    CategoriesIndex,
    CategoriesSingle,
    AllbooksIndex,
    AllbooksSingle,
    FaqCategoriesIndex,
    FaqCategoriesSingle,
    FaqQuestionsIndex,
    FaqQuestionsSingle,
    SchoolsIndex,
    SchoolsSingle,
    IclassesIndex,
    IclassesSingle,
    SubjectsIndex,
    SubjectsSingle,
    StudentsIndex,
    StudentsSingle,
    ExamResultsIndex,
    ExamResultsSingle,
    HistoryAdminTeachersIndex,
    HistoryAdminTeachersSingle,
    ContentCategoriesIndex,
    ContentCategoriesSingle,
    ContentTagsIndex,
    ContentTagsSingle,
    ContentPagesIndex,
    ContentPagesSingle,
    CommentsIndex,
    CommentsSingle,
    RepliesIndex,
    RepliesSingle
  },
  strict: debug
})
