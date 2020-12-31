<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'annoucement_create',
            ],
            [
                'id'    => 18,
                'title' => 'annoucement_edit',
            ],
            [
                'id'    => 19,
                'title' => 'annoucement_show',
            ],
            [
                'id'    => 20,
                'title' => 'annoucement_delete',
            ],
            [
                'id'    => 21,
                'title' => 'annoucement_access',
            ],
            [
                'id'    => 22,
                'title' => 'policy_create',
            ],
            [
                'id'    => 23,
                'title' => 'policy_edit',
            ],
            [
                'id'    => 24,
                'title' => 'policy_show',
            ],
            [
                'id'    => 25,
                'title' => 'policy_delete',
            ],
            [
                'id'    => 26,
                'title' => 'policy_access',
            ],
            [
                'id'    => 27,
                'title' => 'download_access',
            ],
            [
                'id'    => 28,
                'title' => 'textbook_create',
            ],
            [
                'id'    => 29,
                'title' => 'textbook_edit',
            ],
            [
                'id'    => 30,
                'title' => 'textbook_show',
            ],
            [
                'id'    => 31,
                'title' => 'textbook_delete',
            ],
            [
                'id'    => 32,
                'title' => 'textbook_access',
            ],
            [
                'id'    => 33,
                'title' => 'manual_create',
            ],
            [
                'id'    => 34,
                'title' => 'manual_edit',
            ],
            [
                'id'    => 35,
                'title' => 'manual_show',
            ],
            [
                'id'    => 36,
                'title' => 'manual_delete',
            ],
            [
                'id'    => 37,
                'title' => 'manual_access',
            ],
            [
                'id'    => 38,
                'title' => 'template_create',
            ],
            [
                'id'    => 39,
                'title' => 'template_edit',
            ],
            [
                'id'    => 40,
                'title' => 'template_show',
            ],
            [
                'id'    => 41,
                'title' => 'template_delete',
            ],
            [
                'id'    => 42,
                'title' => 'template_access',
            ],
            [
                'id'    => 43,
                'title' => 'about_us_create',
            ],
            [
                'id'    => 44,
                'title' => 'about_us_edit',
            ],
            [
                'id'    => 45,
                'title' => 'about_us_show',
            ],
            [
                'id'    => 46,
                'title' => 'about_us_delete',
            ],
            [
                'id'    => 47,
                'title' => 'about_us_access',
            ],
            [
                'id'    => 48,
                'title' => 'contact_us_create',
            ],
            [
                'id'    => 49,
                'title' => 'contact_us_edit',
            ],
            [
                'id'    => 50,
                'title' => 'contact_us_show',
            ],
            [
                'id'    => 51,
                'title' => 'contact_us_delete',
            ],
            [
                'id'    => 52,
                'title' => 'contact_us_access',
            ],
            [
                'id'    => 53,
                'title' => 'book_access',
            ],
            [
                'id'    => 54,
                'title' => 'category_create',
            ],
            [
                'id'    => 55,
                'title' => 'category_edit',
            ],
            [
                'id'    => 56,
                'title' => 'category_show',
            ],
            [
                'id'    => 57,
                'title' => 'category_delete',
            ],
            [
                'id'    => 58,
                'title' => 'category_access',
            ],
            [
                'id'    => 59,
                'title' => 'allbook_create',
            ],
            [
                'id'    => 60,
                'title' => 'allbook_edit',
            ],
            [
                'id'    => 61,
                'title' => 'allbook_show',
            ],
            [
                'id'    => 62,
                'title' => 'allbook_delete',
            ],
            [
                'id'    => 63,
                'title' => 'allbook_access',
            ],
            [
                'id'    => 64,
                'title' => 'faq_management_access',
            ],
            [
                'id'    => 65,
                'title' => 'faq_category_create',
            ],
            [
                'id'    => 66,
                'title' => 'faq_category_edit',
            ],
            [
                'id'    => 67,
                'title' => 'faq_category_show',
            ],
            [
                'id'    => 68,
                'title' => 'faq_category_delete',
            ],
            [
                'id'    => 69,
                'title' => 'faq_category_access',
            ],
            [
                'id'    => 70,
                'title' => 'faq_question_create',
            ],
            [
                'id'    => 71,
                'title' => 'faq_question_edit',
            ],
            [
                'id'    => 72,
                'title' => 'faq_question_show',
            ],
            [
                'id'    => 73,
                'title' => 'faq_question_delete',
            ],
            [
                'id'    => 74,
                'title' => 'faq_question_access',
            ],
            [
                'id'    => 75,
                'title' => 'school_management_access',
            ],
            [
                'id'    => 76,
                'title' => 'school_create',
            ],
            [
                'id'    => 77,
                'title' => 'school_edit',
            ],
            [
                'id'    => 78,
                'title' => 'school_show',
            ],
            [
                'id'    => 79,
                'title' => 'school_delete',
            ],
            [
                'id'    => 80,
                'title' => 'school_access',
            ],
            [
                'id'    => 81,
                'title' => 'iclass_create',
            ],
            [
                'id'    => 82,
                'title' => 'iclass_edit',
            ],
            [
                'id'    => 83,
                'title' => 'iclass_show',
            ],
            [
                'id'    => 84,
                'title' => 'iclass_delete',
            ],
            [
                'id'    => 85,
                'title' => 'iclass_access',
            ],
            [
                'id'    => 86,
                'title' => 'subject_create',
            ],
            [
                'id'    => 87,
                'title' => 'subject_edit',
            ],
            [
                'id'    => 88,
                'title' => 'subject_show',
            ],
            [
                'id'    => 89,
                'title' => 'subject_delete',
            ],
            [
                'id'    => 90,
                'title' => 'subject_access',
            ],
            [
                'id'    => 91,
                'title' => 'student_create',
            ],
            [
                'id'    => 92,
                'title' => 'student_edit',
            ],
            [
                'id'    => 93,
                'title' => 'student_show',
            ],
            [
                'id'    => 94,
                'title' => 'student_delete',
            ],
            [
                'id'    => 95,
                'title' => 'student_access',
            ],
            [
                'id'    => 96,
                'title' => 'exam_result_create',
            ],
            [
                'id'    => 97,
                'title' => 'exam_result_edit',
            ],
            [
                'id'    => 98,
                'title' => 'exam_result_show',
            ],
            [
                'id'    => 99,
                'title' => 'exam_result_delete',
            ],
            [
                'id'    => 100,
                'title' => 'exam_result_access',
            ],
            [
                'id'    => 101,
                'title' => 'history_admin_teacher_create',
            ],
            [
                'id'    => 102,
                'title' => 'history_admin_teacher_edit',
            ],
            [
                'id'    => 103,
                'title' => 'history_admin_teacher_show',
            ],
            [
                'id'    => 104,
                'title' => 'history_admin_teacher_delete',
            ],
            [
                'id'    => 105,
                'title' => 'history_admin_teacher_access',
            ],
            [
                'id'    => 106,
                'title' => 'content_management_access',
            ],
            [
                'id'    => 107,
                'title' => 'content_category_create',
            ],
            [
                'id'    => 108,
                'title' => 'content_category_edit',
            ],
            [
                'id'    => 109,
                'title' => 'content_category_show',
            ],
            [
                'id'    => 110,
                'title' => 'content_category_delete',
            ],
            [
                'id'    => 111,
                'title' => 'content_category_access',
            ],
            [
                'id'    => 112,
                'title' => 'content_tag_create',
            ],
            [
                'id'    => 113,
                'title' => 'content_tag_edit',
            ],
            [
                'id'    => 114,
                'title' => 'content_tag_show',
            ],
            [
                'id'    => 115,
                'title' => 'content_tag_delete',
            ],
            [
                'id'    => 116,
                'title' => 'content_tag_access',
            ],
            [
                'id'    => 117,
                'title' => 'content_page_create',
            ],
            [
                'id'    => 118,
                'title' => 'content_page_edit',
            ],
            [
                'id'    => 119,
                'title' => 'content_page_show',
            ],
            [
                'id'    => 120,
                'title' => 'content_page_delete',
            ],
            [
                'id'    => 121,
                'title' => 'content_page_access',
            ],
            [
                'id'    => 122,
                'title' => 'comment_create',
            ],
            [
                'id'    => 123,
                'title' => 'comment_edit',
            ],
            [
                'id'    => 124,
                'title' => 'comment_show',
            ],
            [
                'id'    => 125,
                'title' => 'comment_delete',
            ],
            [
                'id'    => 126,
                'title' => 'comment_access',
            ],
            [
                'id'    => 127,
                'title' => 'reply_create',
            ],
            [
                'id'    => 128,
                'title' => 'reply_edit',
            ],
            [
                'id'    => 129,
                'title' => 'reply_show',
            ],
            [
                'id'    => 130,
                'title' => 'reply_delete',
            ],
            [
                'id'    => 131,
                'title' => 'reply_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
