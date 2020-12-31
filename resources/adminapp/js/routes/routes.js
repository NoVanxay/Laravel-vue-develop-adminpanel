import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'history-admin-teachers',
        name: 'history_admin_teachers.index',
        component: () => import('@cruds/HistoryAdminTeachers/Index.vue'),
        meta: { title: 'cruds.historyAdminTeacher.title' }
      },
      {
        path: 'history-admin-teachers/create',
        name: 'history_admin_teachers.create',
        component: () => import('@cruds/HistoryAdminTeachers/Create.vue'),
        meta: { title: 'cruds.historyAdminTeacher.title' }
      },
      {
        path: 'history-admin-teachers/:id',
        name: 'history_admin_teachers.show',
        component: () => import('@cruds/HistoryAdminTeachers/Show.vue'),
        meta: { title: 'cruds.historyAdminTeacher.title' }
      },
      {
        path: 'history-admin-teachers/:id/edit',
        name: 'history_admin_teachers.edit',
        component: () => import('@cruds/HistoryAdminTeachers/Edit.vue'),
        meta: { title: 'cruds.historyAdminTeacher.title' }
      },
      {
        path: 'school-management',
        name: 'school_management',
        component: View,
        redirect: { name: 'schools.index' },
        children: [
          {
            path: 'schools',
            name: 'schools.index',
            component: () => import('@cruds/Schools/Index.vue'),
            meta: { title: 'cruds.school.title' }
          },
          {
            path: 'schools/create',
            name: 'schools.create',
            component: () => import('@cruds/Schools/Create.vue'),
            meta: { title: 'cruds.school.title' }
          },
          {
            path: 'schools/:id',
            name: 'schools.show',
            component: () => import('@cruds/Schools/Show.vue'),
            meta: { title: 'cruds.school.title' }
          },
          {
            path: 'schools/:id/edit',
            name: 'schools.edit',
            component: () => import('@cruds/Schools/Edit.vue'),
            meta: { title: 'cruds.school.title' }
          },
          {
            path: 'iclasses',
            name: 'iclasses.index',
            component: () => import('@cruds/Iclasses/Index.vue'),
            meta: { title: 'cruds.iclass.title' }
          },
          {
            path: 'iclasses/create',
            name: 'iclasses.create',
            component: () => import('@cruds/Iclasses/Create.vue'),
            meta: { title: 'cruds.iclass.title' }
          },
          {
            path: 'iclasses/:id',
            name: 'iclasses.show',
            component: () => import('@cruds/Iclasses/Show.vue'),
            meta: { title: 'cruds.iclass.title' }
          },
          {
            path: 'iclasses/:id/edit',
            name: 'iclasses.edit',
            component: () => import('@cruds/Iclasses/Edit.vue'),
            meta: { title: 'cruds.iclass.title' }
          },
          {
            path: 'subjects',
            name: 'subjects.index',
            component: () => import('@cruds/Subjects/Index.vue'),
            meta: { title: 'cruds.subject.title' }
          },
          {
            path: 'subjects/create',
            name: 'subjects.create',
            component: () => import('@cruds/Subjects/Create.vue'),
            meta: { title: 'cruds.subject.title' }
          },
          {
            path: 'subjects/:id',
            name: 'subjects.show',
            component: () => import('@cruds/Subjects/Show.vue'),
            meta: { title: 'cruds.subject.title' }
          },
          {
            path: 'subjects/:id/edit',
            name: 'subjects.edit',
            component: () => import('@cruds/Subjects/Edit.vue'),
            meta: { title: 'cruds.subject.title' }
          },
          {
            path: 'students',
            name: 'students.index',
            component: () => import('@cruds/Students/Index.vue'),
            meta: { title: 'cruds.student.title' }
          },
          {
            path: 'students/create',
            name: 'students.create',
            component: () => import('@cruds/Students/Create.vue'),
            meta: { title: 'cruds.student.title' }
          },
          {
            path: 'students/:id',
            name: 'students.show',
            component: () => import('@cruds/Students/Show.vue'),
            meta: { title: 'cruds.student.title' }
          },
          {
            path: 'students/:id/edit',
            name: 'students.edit',
            component: () => import('@cruds/Students/Edit.vue'),
            meta: { title: 'cruds.student.title' }
          },
          {
            path: 'exam-results',
            name: 'exam_results.index',
            component: () => import('@cruds/ExamResults/Index.vue'),
            meta: { title: 'cruds.examResult.title' }
          },
          {
            path: 'exam-results/create',
            name: 'exam_results.create',
            component: () => import('@cruds/ExamResults/Create.vue'),
            meta: { title: 'cruds.examResult.title' }
          },
          {
            path: 'exam-results/:id',
            name: 'exam_results.show',
            component: () => import('@cruds/ExamResults/Show.vue'),
            meta: { title: 'cruds.examResult.title' }
          },
          {
            path: 'exam-results/:id/edit',
            name: 'exam_results.edit',
            component: () => import('@cruds/ExamResults/Edit.vue'),
            meta: { title: 'cruds.examResult.title' }
          }
        ]
      },
      {
        path: 'content-management',
        name: 'content_management',
        component: View,
        redirect: { name: 'content_pages.index' },
        children: [
          {
            path: 'content-pages',
            name: 'content_pages.index',
            component: () => import('@cruds/ContentPages/Index.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/create',
            name: 'content_pages.create',
            component: () => import('@cruds/ContentPages/Create.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/:id',
            name: 'content_pages.show',
            component: () => import('@cruds/ContentPages/Show.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/:id/edit',
            name: 'content_pages.edit',
            component: () => import('@cruds/ContentPages/Edit.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'comments',
            name: 'comments.index',
            component: () => import('@cruds/Comments/Index.vue'),
            meta: { title: 'cruds.comment.title' }
          },
          {
            path: 'comments/create',
            name: 'comments.create',
            component: () => import('@cruds/Comments/Create.vue'),
            meta: { title: 'cruds.comment.title' }
          },
          {
            path: 'comments/:id',
            name: 'comments.show',
            component: () => import('@cruds/Comments/Show.vue'),
            meta: { title: 'cruds.comment.title' }
          },
          {
            path: 'comments/:id/edit',
            name: 'comments.edit',
            component: () => import('@cruds/Comments/Edit.vue'),
            meta: { title: 'cruds.comment.title' }
          },
          {
            path: 'replies',
            name: 'replies.index',
            component: () => import('@cruds/Replies/Index.vue'),
            meta: { title: 'cruds.reply.title' }
          },
          {
            path: 'replies/create',
            name: 'replies.create',
            component: () => import('@cruds/Replies/Create.vue'),
            meta: { title: 'cruds.reply.title' }
          },
          {
            path: 'replies/:id',
            name: 'replies.show',
            component: () => import('@cruds/Replies/Show.vue'),
            meta: { title: 'cruds.reply.title' }
          },
          {
            path: 'replies/:id/edit',
            name: 'replies.edit',
            component: () => import('@cruds/Replies/Edit.vue'),
            meta: { title: 'cruds.reply.title' }
          },
          {
            path: 'content-categories',
            name: 'content_categories.index',
            component: () => import('@cruds/ContentCategories/Index.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/create',
            name: 'content_categories.create',
            component: () => import('@cruds/ContentCategories/Create.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/:id',
            name: 'content_categories.show',
            component: () => import('@cruds/ContentCategories/Show.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/:id/edit',
            name: 'content_categories.edit',
            component: () => import('@cruds/ContentCategories/Edit.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-tags',
            name: 'content_tags.index',
            component: () => import('@cruds/ContentTags/Index.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/create',
            name: 'content_tags.create',
            component: () => import('@cruds/ContentTags/Create.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/:id',
            name: 'content_tags.show',
            component: () => import('@cruds/ContentTags/Show.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/:id/edit',
            name: 'content_tags.edit',
            component: () => import('@cruds/ContentTags/Edit.vue'),
            meta: { title: 'cruds.contentTag.title' }
          }
        ]
      },
      {
        path: 'annoucements',
        name: 'annoucements.index',
        component: () => import('@cruds/Annoucements/Index.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/create',
        name: 'annoucements.create',
        component: () => import('@cruds/Annoucements/Create.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id',
        name: 'annoucements.show',
        component: () => import('@cruds/Annoucements/Show.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id/edit',
        name: 'annoucements.edit',
        component: () => import('@cruds/Annoucements/Edit.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'policies',
        name: 'policies.index',
        component: () => import('@cruds/Policies/Index.vue'),
        meta: { title: 'cruds.policy.title' }
      },
      {
        path: 'policies/create',
        name: 'policies.create',
        component: () => import('@cruds/Policies/Create.vue'),
        meta: { title: 'cruds.policy.title' }
      },
      {
        path: 'policies/:id',
        name: 'policies.show',
        component: () => import('@cruds/Policies/Show.vue'),
        meta: { title: 'cruds.policy.title' }
      },
      {
        path: 'policies/:id/edit',
        name: 'policies.edit',
        component: () => import('@cruds/Policies/Edit.vue'),
        meta: { title: 'cruds.policy.title' }
      },
      {
        path: 'download',
        name: 'download',
        component: View,
        redirect: { name: 'textbooks.index' },
        children: [
          {
            path: 'textbooks',
            name: 'textbooks.index',
            component: () => import('@cruds/Textbooks/Index.vue'),
            meta: { title: 'cruds.textbook.title' }
          },
          {
            path: 'textbooks/create',
            name: 'textbooks.create',
            component: () => import('@cruds/Textbooks/Create.vue'),
            meta: { title: 'cruds.textbook.title' }
          },
          {
            path: 'textbooks/:id',
            name: 'textbooks.show',
            component: () => import('@cruds/Textbooks/Show.vue'),
            meta: { title: 'cruds.textbook.title' }
          },
          {
            path: 'textbooks/:id/edit',
            name: 'textbooks.edit',
            component: () => import('@cruds/Textbooks/Edit.vue'),
            meta: { title: 'cruds.textbook.title' }
          },
          {
            path: 'manuals',
            name: 'manuals.index',
            component: () => import('@cruds/Manuals/Index.vue'),
            meta: { title: 'cruds.manual.title' }
          },
          {
            path: 'manuals/create',
            name: 'manuals.create',
            component: () => import('@cruds/Manuals/Create.vue'),
            meta: { title: 'cruds.manual.title' }
          },
          {
            path: 'manuals/:id',
            name: 'manuals.show',
            component: () => import('@cruds/Manuals/Show.vue'),
            meta: { title: 'cruds.manual.title' }
          },
          {
            path: 'manuals/:id/edit',
            name: 'manuals.edit',
            component: () => import('@cruds/Manuals/Edit.vue'),
            meta: { title: 'cruds.manual.title' }
          },
          {
            path: 'templates',
            name: 'templates.index',
            component: () => import('@cruds/Templates/Index.vue'),
            meta: { title: 'cruds.template.title' }
          },
          {
            path: 'templates/create',
            name: 'templates.create',
            component: () => import('@cruds/Templates/Create.vue'),
            meta: { title: 'cruds.template.title' }
          },
          {
            path: 'templates/:id',
            name: 'templates.show',
            component: () => import('@cruds/Templates/Show.vue'),
            meta: { title: 'cruds.template.title' }
          },
          {
            path: 'templates/:id/edit',
            name: 'templates.edit',
            component: () => import('@cruds/Templates/Edit.vue'),
            meta: { title: 'cruds.template.title' }
          }
        ]
      },
      {
        path: 'aboutuses',
        name: 'aboutuses.index',
        component: () => import('@cruds/Aboutuses/Index.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      },
      {
        path: 'aboutuses/create',
        name: 'aboutuses.create',
        component: () => import('@cruds/Aboutuses/Create.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      },
      {
        path: 'aboutuses/:id',
        name: 'aboutuses.show',
        component: () => import('@cruds/Aboutuses/Show.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      },
      {
        path: 'aboutuses/:id/edit',
        name: 'aboutuses.edit',
        component: () => import('@cruds/Aboutuses/Edit.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      },
      {
        path: 'contactuses',
        name: 'contactuses.index',
        component: () => import('@cruds/Contactuses/Index.vue'),
        meta: { title: 'cruds.contactUs.title' }
      },
      {
        path: 'contactuses/create',
        name: 'contactuses.create',
        component: () => import('@cruds/Contactuses/Create.vue'),
        meta: { title: 'cruds.contactUs.title' }
      },
      {
        path: 'contactuses/:id',
        name: 'contactuses.show',
        component: () => import('@cruds/Contactuses/Show.vue'),
        meta: { title: 'cruds.contactUs.title' }
      },
      {
        path: 'contactuses/:id/edit',
        name: 'contactuses.edit',
        component: () => import('@cruds/Contactuses/Edit.vue'),
        meta: { title: 'cruds.contactUs.title' }
      },
      {
        path: 'book',
        name: 'book',
        component: View,
        redirect: { name: 'categories.index' },
        children: [
          {
            path: 'categories',
            name: 'categories.index',
            component: () => import('@cruds/Categories/Index.vue'),
            meta: { title: 'cruds.category.title' }
          },
          {
            path: 'categories/create',
            name: 'categories.create',
            component: () => import('@cruds/Categories/Create.vue'),
            meta: { title: 'cruds.category.title' }
          },
          {
            path: 'categories/:id',
            name: 'categories.show',
            component: () => import('@cruds/Categories/Show.vue'),
            meta: { title: 'cruds.category.title' }
          },
          {
            path: 'categories/:id/edit',
            name: 'categories.edit',
            component: () => import('@cruds/Categories/Edit.vue'),
            meta: { title: 'cruds.category.title' }
          },
          {
            path: 'allbooks',
            name: 'allbooks.index',
            component: () => import('@cruds/Allbooks/Index.vue'),
            meta: { title: 'cruds.allbook.title' }
          },
          {
            path: 'allbooks/create',
            name: 'allbooks.create',
            component: () => import('@cruds/Allbooks/Create.vue'),
            meta: { title: 'cruds.allbook.title' }
          },
          {
            path: 'allbooks/:id',
            name: 'allbooks.show',
            component: () => import('@cruds/Allbooks/Show.vue'),
            meta: { title: 'cruds.allbook.title' }
          },
          {
            path: 'allbooks/:id/edit',
            name: 'allbooks.edit',
            component: () => import('@cruds/Allbooks/Edit.vue'),
            meta: { title: 'cruds.allbook.title' }
          }
        ]
      },
      {
        path: 'faq-management',
        name: 'faq_management',
        component: View,
        redirect: { name: 'faq_categories.index' },
        children: [
          {
            path: 'faq-categories',
            name: 'faq_categories.index',
            component: () => import('@cruds/FaqCategories/Index.vue'),
            meta: { title: 'cruds.faqCategory.title' }
          },
          {
            path: 'faq-categories/create',
            name: 'faq_categories.create',
            component: () => import('@cruds/FaqCategories/Create.vue'),
            meta: { title: 'cruds.faqCategory.title' }
          },
          {
            path: 'faq-categories/:id',
            name: 'faq_categories.show',
            component: () => import('@cruds/FaqCategories/Show.vue'),
            meta: { title: 'cruds.faqCategory.title' }
          },
          {
            path: 'faq-categories/:id/edit',
            name: 'faq_categories.edit',
            component: () => import('@cruds/FaqCategories/Edit.vue'),
            meta: { title: 'cruds.faqCategory.title' }
          },
          {
            path: 'faq-questions',
            name: 'faq_questions.index',
            component: () => import('@cruds/FaqQuestions/Index.vue'),
            meta: { title: 'cruds.faqQuestion.title' }
          },
          {
            path: 'faq-questions/create',
            name: 'faq_questions.create',
            component: () => import('@cruds/FaqQuestions/Create.vue'),
            meta: { title: 'cruds.faqQuestion.title' }
          },
          {
            path: 'faq-questions/:id',
            name: 'faq_questions.show',
            component: () => import('@cruds/FaqQuestions/Show.vue'),
            meta: { title: 'cruds.faqQuestion.title' }
          },
          {
            path: 'faq-questions/:id/edit',
            name: 'faq_questions.edit',
            component: () => import('@cruds/FaqQuestions/Edit.vue'),
            meta: { title: 'cruds.faqQuestion.title' }
          }
        ]
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
