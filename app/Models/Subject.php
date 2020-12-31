<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Subject extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'subjects';

    protected $orderable = [
        'id',
        'subject_code',
        'subject',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'subject_code',
        'subject',
        'iclass.iclass',
    ];

    protected $fillable = [
        'subject_code',
        'subject',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function iclass()
    {
        return $this->belongsToMany(Iclass::class);
    }
}
