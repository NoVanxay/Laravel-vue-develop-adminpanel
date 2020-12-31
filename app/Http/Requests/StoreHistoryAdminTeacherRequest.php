<?php

namespace App\Http\Requests;

use App\Models\HistoryAdminTeacher;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreHistoryAdminTeacherRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('history_admin_teacher_create');
    }

    public function rules()
    {
        return [
            'title'               => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'photo'               => [
                'array',
                'nullable',
            ],
            'photo.*.id'          => [
                'integer',
                'exists:media,id',
            ],
            'fist_name'           => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'last_name'           => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'gender'              => [
                'required',
                'in:' . implode(',', Arr::pluck(HistoryAdminTeacher::GENDER_RADIO, 'value')),
            ],
            'eng_name'            => [
                'string',
                'min:2',
                'max:60',
                'required',
            ],
            'eng_last'            => [
                'string',
                'min:2',
                'max:60',
                'required',
            ],
            'dob'                 => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'txt'                 => [
                'string',
                'min:2',
                'max:255',
                'required',
            ],
            'tribes'              => [
                'string',
                'min:2',
                'max:10',
                'required',
            ],
            'religion'            => [
                'string',
                'min:2',
                'max:10',
                'required',
            ],
            'pabbajja'            => [
                'date_format:' . config('project.datetime_format'),
                'nullable',
            ],
            'identification_card' => [
                'string',
                'min:1',
                'max:30',
                'required',
            ],
            'province_birth'      => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'district_birth'      => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'village_birth'       => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'current_pro'         => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'current_dist'        => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'current_vill'        => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'temple'              => [
                'string',
                'min:2',
                'max:255',
                'required',
            ],
            'phone_no'            => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'phone_mobile'        => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'office_no'           => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'census'              => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'allow_date'          => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'at'                  => [
                'string',
                'min:2',
                'max:255',
                'required',
            ],
        ];
    }
}
