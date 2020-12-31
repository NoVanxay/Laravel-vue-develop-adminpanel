<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Iclass extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'iclasses';

    protected $orderable = [
        'id',
        'iclass',
    ];

    protected $filterable = [
        'id',
        'iclass',
        'school.school',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'iclass',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function school()
    {
        return $this->belongsToMany(School::class);
    }
}
