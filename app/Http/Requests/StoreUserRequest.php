<?php

namespace App\Http\Requests;

use App\Models\User;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreUserRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('user_create');
    }

    public function rules()
    {
        return [
            'name'        => [
                'string',
                'required',
            ],
            'last'        => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'gender'      => [
                'required',
                'in:' . implode(',', Arr::pluck(User::GENDER_RADIO, 'value')),
            ],
            'dob'         => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'village'     => [
                'string',
                'min:2',
                'max:30',
                'required',
            ],
            'district'    => [
                'string',
                'min:2',
                'max:30',
                'required',
            ],
            'province'    => [
                'string',
                'min:5',
                'max:50',
                'required',
            ],
            'phone_no'    => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'is_verified' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'email'       => [
                'required',
                'unique:users',
            ],
            'password'    => [
                'required',
            ],
            'roles'       => [
                'required',
                'array',
            ],
            'roles.*.id'  => [
                'integer',
                'exists:roles,id',
            ],
        ];
    }
}
