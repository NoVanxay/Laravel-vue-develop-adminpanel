<?php

namespace App\Http\Requests;

use App\Models\Iclass;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreIclassRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('iclass_create');
    }

    public function rules()
    {
        return [
            'iclass'      => [
                'string',
                'min:2',
                'max:50',
                'required',
                'unique:iclasses',
            ],
            'school'      => [
                'required',
                'array',
            ],
            'school.*.id' => [
                'integer',
                'exists:schools,id',
            ],
        ];
    }
}
