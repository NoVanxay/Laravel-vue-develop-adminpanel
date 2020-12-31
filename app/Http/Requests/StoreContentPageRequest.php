<?php

namespace App\Http\Requests;

use App\Models\ContentPage;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreContentPageRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('content_page_create');
    }

    public function rules()
    {
        return [
            'title'               => [
                'string',
                'required',
            ],
            'page_text'           => [
                'string',
                'required',
            ],
            'excerpt'             => [
                'string',
                'nullable',
            ],
            'featured_image'      => [
                'array',
                'nullable',
            ],
            'featured_image.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'category'            => [
                'required',
                'array',
            ],
            'category.*.id'       => [
                'integer',
                'exists:content_categories,id',
            ],
            'tag'                 => [
                'required',
                'array',
            ],
            'tag.*.id'            => [
                'integer',
                'exists:content_tags,id',
            ],
        ];
    }
}
