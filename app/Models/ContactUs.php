<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class ContactUs extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'contactuses';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'address',
        'phone_number',
        'email',
        'location',
    ];

    protected $filterable = [
        'id',
        'address',
        'phone_number',
        'email',
        'location',
    ];

    protected $fillable = [
        'address',
        'phone_number',
        'email',
        'location',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
