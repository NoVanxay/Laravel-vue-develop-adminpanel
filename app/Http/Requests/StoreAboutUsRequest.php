<?php

namespace App\Http\Requests;

use App\Models\AboutUs;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreAboutUsRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('about_us_create');
    }

    public function rules()
    {
        return [
            'photo'       => [
                'array',
                'nullable',
            ],
            'photo.*.id'  => [
                'integer',
                'exists:media,id',
            ],
            'description' => [
                'string',
                'required',
            ],
        ];
    }
}
