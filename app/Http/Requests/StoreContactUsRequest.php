<?php

namespace App\Http\Requests;

use App\Models\ContactUs;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreContactUsRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('contact_us_create');
    }

    public function rules()
    {
        return [
            'address'      => [
                'string',
                'required',
            ],
            'phone_number' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'email'        => [
                'required',
            ],
            'location'     => [
                'string',
                'min:5',
                'max:255',
                'required',
            ],
        ];
    }
}
