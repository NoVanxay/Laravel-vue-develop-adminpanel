<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class School extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'schools';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'school',
        'village',
        'district',
        'province',
    ];

    protected $filterable = [
        'id',
        'school',
        'village',
        'district',
        'province',
    ];

    protected $fillable = [
        'school',
        'village',
        'district',
        'province',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
