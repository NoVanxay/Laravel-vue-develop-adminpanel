<?php

namespace App\Http\Requests;

use App\Models\Subject;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreSubjectRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('subject_create');
    }

    public function rules()
    {
        return [
            'subject_code' => [
                'string',
                'min:1',
                'max:100',
                'nullable',
            ],
            'subject'      => [
                'string',
                'min:1',
                'max:50',
                'required',
                'unique:subjects',
            ],
            'iclass'       => [
                'required',
                'array',
            ],
            'iclass.*.id'  => [
                'integer',
                'exists:iclasses,id',
            ],
        ];
    }
}
