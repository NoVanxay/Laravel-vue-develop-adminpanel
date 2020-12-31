<?php

namespace App\Http\Requests;

use App\Models\School;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreSchoolRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('school_create');
    }

    public function rules()
    {
        return [
            'school'   => [
                'string',
                'min:2',
                'max:100',
                'required',
            ],
            'village'  => [
                'string',
                'min:2',
                'max:100',
                'required',
            ],
            'district' => [
                'string',
                'min:2',
                'max:100',
                'required',
            ],
            'province' => [
                'string',
                'min:2',
                'max:100',
                'required',
            ],
        ];
    }
}
