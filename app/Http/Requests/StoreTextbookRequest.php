<?php

namespace App\Http\Requests;

use App\Models\Textbook;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreTextbookRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('textbook_create');
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
                'unique:textbooks',
            ],
        ];
    }
}
