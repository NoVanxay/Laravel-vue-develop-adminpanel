<?php

namespace App\Http\Requests;

use App\Models\Policy;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePolicyRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('policy_create');
    }

    public function rules()
    {
        return [
            'policy'      => [
                'array',
                'required',
            ],
            'policy.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'name'        => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'lavel_no'    => [
                'string',
                'min:2',
                'max:10',
                'required',
            ],
            'allow_date'  => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'description' => [
                'string',
                'required',
            ],
        ];
    }
}
