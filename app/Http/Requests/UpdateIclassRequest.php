<?php

namespace App\Http\Requests;

use App\Models\Iclass;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateIclassRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('iclass_edit');
    }

    public function rules()
    {
        return [
            'iclass'      => [
                'string',
                'min:2',
                'max:50',
                'required',
                'unique:iclasses,iclass,' . request()->route('iclass')->id,
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
