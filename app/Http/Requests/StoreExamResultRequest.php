<?php

namespace App\Http\Requests;

use App\Models\ExamResult;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreExamResultRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('exam_result_create');
    }

    public function rules()
    {
        return [
            'title'        => [
                'string',
                'min:1',
                'max:50',
                'required',
            ],
            'table_code'   => [
                'string',
                'min:1',
                'max:50',
                'nullable',
            ],
            'gender_id'    => [
                'integer',
                'exists:students,id',
                'required',
            ],
            'student'      => [
                'required',
                'array',
            ],
            'student.*.id' => [
                'integer',
                'exists:students,id',
            ],
            'last_name_id' => [
                'integer',
                'exists:students,id',
                'required',
            ],
            'subject'      => [
                'required',
                'array',
            ],
            'subject.*.id' => [
                'integer',
                'exists:subjects,id',
            ],
            'exam_date'    => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'study_years'  => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'iclass_id'    => [
                'integer',
                'exists:iclasses,id',
                'required',
            ],
            'school_id'    => [
                'integer',
                'exists:schools,id',
                'required',
            ],
            'point'        => [
                'numeric',
                'required',
            ],
            'note'         => [
                'string',
                'min:1',
                'max:50',
                'nullable',
            ],
        ];
    }
}
