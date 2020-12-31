<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Reply extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'replies';

    protected $orderable = [
        'id',
        'comment.comment',
        'body',
        'at',
    ];

    protected $dates = [
        'at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'users.name',
        'comment.comment',
        'body',
        'at',
    ];

    protected $fillable = [
        'comment_id',
        'body',
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
        return $this->belongsToMany(User::class);
    }

    public function comment()
    {
        return $this->belongsTo(Comment::class);
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
