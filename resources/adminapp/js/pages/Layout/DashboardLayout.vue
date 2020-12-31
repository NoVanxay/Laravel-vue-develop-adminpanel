<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.historyAdminTeacher.title',
          icon: 'table_view',
          path: { name: 'history_admin_teachers.index' },
          gate: 'history_admin_teacher_access'
        },
        {
          title: 'cruds.schoolManagement.title',
          icon: 'table_view',
          path: { name: 'school_management' },
          gate: 'school_management_access',
          children: [
            {
              title: 'cruds.school.title',
              icon: 'table_view',
              path: { name: 'schools.index' },
              gate: 'school_access'
            },
            {
              title: 'cruds.iclass.title',
              icon: 'table_view',
              path: { name: 'iclasses.index' },
              gate: 'iclass_access'
            },
            {
              title: 'cruds.subject.title',
              icon: 'table_view',
              path: { name: 'subjects.index' },
              gate: 'subject_access'
            },
            {
              title: 'cruds.student.title',
              icon: 'table_view',
              path: { name: 'students.index' },
              gate: 'student_access'
            },
            {
              title: 'cruds.examResult.title',
              icon: 'table_view',
              path: { name: 'exam_results.index' },
              gate: 'exam_result_access'
            }
          ]
        },
        {
          title: 'cruds.contentManagement.title',
          icon: 'table_view',
          path: { name: 'content_management' },
          gate: 'content_management_access',
          children: [
            {
              title: 'cruds.contentPage.title',
              icon: 'table_view',
              path: { name: 'content_pages.index' },
              gate: 'content_page_access'
            },
            {
              title: 'cruds.comment.title',
              icon: 'table_view',
              path: { name: 'comments.index' },
              gate: 'comment_access'
            },
            {
              title: 'cruds.reply.title',
              icon: 'table_view',
              path: { name: 'replies.index' },
              gate: 'reply_access'
            },
            {
              title: 'cruds.contentCategory.title',
              icon: 'table_view',
              path: { name: 'content_categories.index' },
              gate: 'content_category_access'
            },
            {
              title: 'cruds.contentTag.title',
              icon: 'table_view',
              path: { name: 'content_tags.index' },
              gate: 'content_tag_access'
            }
          ]
        },
        {
          title: 'cruds.annoucement.title',
          icon: 'table_view',
          path: { name: 'annoucements.index' },
          gate: 'annoucement_access'
        },
        {
          title: 'cruds.policy.title',
          icon: 'table_view',
          path: { name: 'policies.index' },
          gate: 'policy_access'
        },
        {
          title: 'cruds.download.title',
          icon: 'table_view',
          path: { name: 'download' },
          gate: 'download_access',
          children: [
            {
              title: 'cruds.textbook.title',
              icon: 'table_view',
              path: { name: 'textbooks.index' },
              gate: 'textbook_access'
            },
            {
              title: 'cruds.manual.title',
              icon: 'table_view',
              path: { name: 'manuals.index' },
              gate: 'manual_access'
            },
            {
              title: 'cruds.template.title',
              icon: 'table_view',
              path: { name: 'templates.index' },
              gate: 'template_access'
            }
          ]
        },
        {
          title: 'cruds.aboutUs.title',
          icon: 'table_view',
          path: { name: 'aboutuses.index' },
          gate: 'about_us_access'
        },
        {
          title: 'cruds.contactUs.title',
          icon: 'table_view',
          path: { name: 'contactuses.index' },
          gate: 'contact_us_access'
        },
        {
          title: 'cruds.book.title',
          icon: 'table_view',
          path: { name: 'book' },
          gate: 'book_access',
          children: [
            {
              title: 'cruds.category.title',
              icon: 'table_view',
              path: { name: 'categories.index' },
              gate: 'category_access'
            },
            {
              title: 'cruds.allbook.title',
              icon: 'table_view',
              path: { name: 'allbooks.index' },
              gate: 'allbook_access'
            }
          ]
        },
        {
          title: 'cruds.faqManagement.title',
          icon: 'table_view',
          path: { name: 'faq_management' },
          gate: 'faq_management_access',
          children: [
            {
              title: 'cruds.faqCategory.title',
              icon: 'table_view',
              path: { name: 'faq_categories.index' },
              gate: 'faq_category_access'
            },
            {
              title: 'cruds.faqQuestion.title',
              icon: 'table_view',
              path: { name: 'faq_questions.index' },
              gate: 'faq_question_access'
            }
          ]
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
