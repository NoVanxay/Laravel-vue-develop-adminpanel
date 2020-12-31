<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Hash;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use \DateTimeInterface;

class User extends Authenticatable
{
    use HasAdvancedFilter, SoftDeletes, Notifiable, HasFactory;

    public $table = 'users';

    protected $appends = [
        'gender_label',
    ];

    protected $hidden = [
        'remember_token',
        'password',
    ];

    protected $dates = [
        'dob',
        'email_verified_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    const GENDER_RADIO = [
        [
            'label' => 'ຊາຍ',
            'value' => '1',
        ],
        [
            'label' => 'ຍິງ',
            'value' => '2',
        ],
    ];

    protected $orderable = [
        'id',
        'name',
        'last',
        'gender',
        'dob',
        'village',
        'district',
        'province',
        'phone_no',
        'is_verified',
        'email',
        'email_verified_at',
    ];

    protected $filterable = [
        'id',
        'name',
        'last',
        'gender',
        'dob',
        'village',
        'district',
        'province',
        'phone_no',
        'is_verified',
        'email',
        'email_verified_at',
        'roles.title',
    ];

    protected $fillable = [
        'name',
        'last',
        'gender',
        'dob',
        'village',
        'district',
        'province',
        'phone_no',
        'is_verified',
        'email',
        'email_verified_at',
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getIsAdminAttribute()
    {
        return $this->roles()->where('title', 'Admin')->exists();
    }

    public function getGenderLabelAttribute()
    {
        return collect(static::GENDER_RADIO)->firstWhere('value', $this->gender)['label'] ?? '';
    }

    public function getDobAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setDobAttribute($value)
    {
        $this->attributes['dob'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setEmailVerifiedAtAttribute($value)
    {
        $this->attributes['email_verified_at'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
