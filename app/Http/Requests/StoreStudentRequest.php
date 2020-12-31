<?php

namespace App\Http\Requests;

use App\Models\Student;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreStudentRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('student_create');
    }

    public function rules()
    {
        return [
            'st_code'       => [
                'string',
                'min:1',
                'max:50',
                'required',
                'unique:students',
            ],
            'first_name'    => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'last_name'     => [
                'string',
                'min:2',
                'max:60',
                'required',
            ],
            'gender'        => [
                'required',
                'in:' . implode(',', Arr::pluck(Student::GENDER_RADIO, 'value')),
            ],
            'dob'           => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'village_birth' => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'district'      => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'province'      => [
                'string',
                'min:1',
                'max:60',
                'required',
            ],
            'father_name'   => [
                'string',
                'min:1',
                'max:50',
                'required',
            ],
            'father_no'     => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'mother_name'   => [
                'string',
                'min:2',
                'max:50',
                'nullable',
            ],
            'mother_no'     => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'current_vill'  => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'current_dis'   => [
                'string',
                'min:2',
                'max:50',
                'required',
            ],
            'current_pro'   => [
                'string',
                'min:2',
                'max:60',
                'required',
            ],
            'iclass_id'     => [
                'integer',
                'exists:iclasses,id',
                'required',
            ],
            'school_id'     => [
                'integer',
                'exists:schools,id',
                'required',
            ],
            'end_from'      => [
                'string',
                'min:2',
                'max:50',
                'nullable',
            ],
            'end_date'      => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'photo'         => [
                'array',
                'nullable',
            ],
            'photo.*.id'    => [
                'integer',
                'exists:media,id',
            ],
            'phone'         => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'note'          => [
                'string',
                'min:1',
                'max:255',
                'nullable',
            ],
            'email'         => [
                'nullable',
            ],
            'password'      => [
                'nullable',
            ],
            'role'          => [
                'required',
                'array',
            ],
            'role.*.id'     => [
                'integer',
                'exists:roles,id',
            ],
        ];
    }
}
