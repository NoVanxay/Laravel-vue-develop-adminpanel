<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Comment extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'comments';

    protected $dates = [
        'at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'users.name',
        'title.title',
        'comment',
        'at',
    ];

    protected $filterable = [
        'id',
        'users.name',
        'title.title',
        'comment',
        'at',
    ];

    protected $fillable = [
        'users_id',
        'title_id',
        'comment',
        'at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function title()
    {
        return $this->belongsTo(ContentPage::class);
    }

    public function getAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setAtAttribute($value)
    {
        $this->attributes['at'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }
}
