<?php

namespace App\Http\Requests;

use App\Models\Allbook;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreAllbookRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('allbook_create');
    }

    public function rules()
    {
        return [
            'file'        => [
                'array',
                'required',
            ],
            'file.*.id'   => [
                'integer',
                'exists:media,id',
            ],
            'name'        => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'category'    => [
                'string',
                'min:5',
                'max:50',
                'required',
                'unique:allbooks',
            ],
            'publisher'   => [
                'string',
                'min:5',
                'max:50',
                'nullable',
            ],
            'page'        => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'isbn'        => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'price'       => [
                'numeric',
                'nullable',
            ],
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
                'nullable',
            ],
        ];
    }
}
