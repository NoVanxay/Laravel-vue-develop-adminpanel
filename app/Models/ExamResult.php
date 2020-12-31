<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class ExamResult extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'exam_results';

    protected $dates = [
        'exam_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'title',
        'table_code',
        'gender.gender',
        'last_name.last_name',
        'exam_date',
        'study_years',
        'iclass.iclass',
        'school.school',
        'point',
        'note',
    ];

    protected $fillable = [
        'title',
        'table_code',
        'gender_id',
        'last_name_id',
        'exam_date',
        'study_years',
        'iclass_id',
        'school_id',
        'point',
        'note',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'title',
        'table_code',
        'gender.gender',
        'student.first_name',
        'last_name.last_name',
        'subject.subject',
        'exam_date',
        'study_years',
        'iclass.iclass',
        'school.school',
        'point',
        'note',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function gender()
    {
        return $this->belongsTo(Student::class);
    }

    public function student()
    {
        return $this->belongsToMany(Student::class);
    }

    public function lastName()
    {
        return $this->belongsTo(Student::class);
    }

    public function subject()
    {
        return $this->belongsToMany(Subject::class);
    }

    public function getExamDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setExamDateAttribute($value)
    {
        $this->attributes['exam_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function iclass()
    {
        return $this->belongsTo(Iclass::class);
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }
}
