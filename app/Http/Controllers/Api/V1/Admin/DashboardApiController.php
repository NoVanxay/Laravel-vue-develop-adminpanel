<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Services\ChartsService;

class DashboardApiController extends Controller
{
    public function index()
    {
        $stats0 = new ChartsService([
            'title'        => 'ຈຳນວນຜູ້ໃຊ້',
            'chart_type'   => 'stats',
            'model'        => 'App\Models\User',
            'column_class' => 'col-md-6',
            'footer_icon'  => 'date_range',
            'footer_text'  => 'Lifetime total',
        ]);

        $stats1 = new ChartsService([
            'title'        => 'ຈຳນວນໜັງສື',
            'chart_type'   => 'stats',
            'model'        => 'App\Models\Allbook',
            'column_class' => 'col-md-6',
            'footer_icon'  => 'date_range',
            'footer_text'  => 'Lifetime total',
        ]);

        $stats2 = new ChartsService([
            'title'        => 'ຈຳນວນນັກຮຽນ',
            'chart_type'   => 'stats',
            'model'        => 'App\Models\Student',
            'column_class' => 'col-md-6',
            'footer_icon'  => 'date_range',
            'footer_text'  => 'Lifetime total',
        ]);

        $line3 = new ChartsService([
            'title'           => 'ຈຳນວນໂພດ',
            'chart_type'      => 'line',
            'model'           => 'App\Models\ContentPage',
            'group_by_field'  => 'title',
            'group_by_period' => 'day',
            'column_class'    => 'col-md-4',
        ]);

        $pie4 = new ChartsService([
            'title'           => 'ຈຳນວນບັນພະຊິດ-ບໍລິຫານ',
            'chart_type'      => 'pie',
            'model'           => 'App\Models\HistoryAdminTeacher',
            'group_by_field'  => 'title',
            'group_by_period' => 'day',
            'column_class'    => 'col-md-6',
        ]);

        $latest5 = new ChartsService([
            'title'        => 'ຄະແນນຜົນການສອບ',
            'chart_type'   => 'latest',
            'model'        => 'App\Models\ExamResult',
            'column_class' => 'col-md-12',
            'fields'       => ['table_code', 'exam_date', 'study_years', 'point'],
            'limit'        => 20,
        ]);

        return response()->json(compact('stats0', 'stats1', 'stats2', 'line3', 'pie4', 'latest5'));
    }
}
