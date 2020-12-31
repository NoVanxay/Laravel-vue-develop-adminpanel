<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use \DateTimeInterface;

class Student extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, InteractsWithMedia, HasFactory;

    public $table = 'students';

    protected $hidden = [
        'password',
    ];

    protected $appends = [
        'gender_label',
        'photo',
    ];

    protected $dates = [
        'dob',
        'end_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    const GENDER_RADIO = [
        [
            'label' => 'ທ້າວ',
            'value' => '1',
        ],
        [
            'label' => 'ນາງ',
            'value' => '2',
        ],
        [
            'label' => 'ພຣະ',
            'value' => '3',
        ],
        [
            'label' => 'ສ.ນ',
            'value' => '4',
        ],
    ];

    protected $orderable = [
        'id',
        'st_code',
        'first_name',
        'last_name',
        'gender',
        'dob',
        'village_birth',
        'district',
        'province',
        'father_name',
        'father_no',
        'mother_name',
        'mother_no',
        'current_vill',
        'current_dis',
        'current_pro',
        'iclass.iclass',
        'school.school',
        'end_from',
        'end_date',
        'phone',
        'note',
        'email',
    ];

    protected $filterable = [
        'id',
        'st_code',
        'first_name',
        'last_name',
        'gender',
        'dob',
        'village_birth',
        'district',
        'province',
        'father_name',
        'father_no',
        'mother_name',
        'mother_no',
        'current_vill',
        'current_dis',
        'current_pro',
        'iclass.iclass',
        'school.school',
        'end_from',
        'end_date',
        'phone',
        'note',
        'email',
        'role.title',
    ];

    protected $fillable = [
        'st_code',
        'first_name',
        'last_name',
        'gender',
        'dob',
        'village_birth',
        'district',
        'province',
        'father_name',
        'father_no',
        'mother_name',
        'mother_no',
        'current_vill',
        'current_dis',
        'current_pro',
        'iclass_id',
        'school_id',
        'end_from',
        'end_date',
        'phone',
        'note',
        'email',
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

    public function registerMediaConversions(Media $media = null): void
    {
        $thumbnailWidth  = 50;
        $thumbnailHeight = 50;

        $thumbnailPreviewWidth  = 120;
        $thumbnailPreviewHeight = 120;

        $this->addMediaConversion('thumbnail')
            ->width($thumbnailWidth)
            ->height($thumbnailHeight)
            ->fit('crop', $thumbnailWidth, $thumbnailHeight);
        $this->addMediaConversion('preview_thumbnail')
            ->width($thumbnailPreviewWidth)
            ->height($thumbnailPreviewHeight)
            ->fit('crop', $thumbnailPreviewWidth, $thumbnailPreviewHeight);
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

    public function iclass()
    {
        return $this->belongsTo(Iclass::class);
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function getEndDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setEndDateAttribute($value)
    {
        $this->attributes['end_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function getPhotoAttribute()
    {
        return $this->getMedia('student_photo')->map(function ($item) {
            $media                      = $item->toArray();
            $media['url']               = $item->getUrl();
            $media['thumbnail']         = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
    }

    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function role()
    {
        return $this->belongsToMany(Role::class);
    }
}
