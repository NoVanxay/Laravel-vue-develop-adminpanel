<?php

namespace App\Http\Requests;

use App\Models\Manual;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreManualRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('manual_create');
    }

    public function rules()
    {
        return [
            'file'      => [
                'array',
                'required',
            ],
            'file.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'name'      => [
                'string',
                'min:5',
                'max:50',
                'required',
                'unique:manuals',
            ],
        ];
    }
}
