<?php

namespace App\Http\Requests;

use App\Models\Template;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateTemplateRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('template_edit');
    }

    public function rules()
    {
        return [
            'template'      => [
                'array',
                'required',
            ],
            'template.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'name'          => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
        ];
    }
}
