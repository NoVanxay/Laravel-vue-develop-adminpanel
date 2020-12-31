<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use \DateTimeInterface;

class HistoryAdminTeacher extends Model implements HasMedia
{
    use HasAdvancedFilter, SoftDeletes, InteractsWithMedia, HasFactory;

    public $table = 'history_admin_teachers';

    protected $appends = [
        'photo',
        'gender_label',
    ];

    protected $dates = [
        'dob',
        'pabbajja',
        'allow_date',
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
        'title',
        'fist_name',
        'last_name',
        'gender',
        'eng_name',
        'eng_last',
        'dob',
        'txt',
        'tribes',
        'religion',
        'pabbajja',
        'identification_card',
        'province_birth',
        'district_birth',
        'village_birth',
        'current_pro',
        'current_dist',
        'current_vill',
        'temple',
        'phone_no',
        'phone_mobile',
        'office_no',
        'census',
        'allow_date',
        'at',
    ];

    protected $filterable = [
        'id',
        'title',
        'fist_name',
        'last_name',
        'gender',
        'eng_name',
        'eng_last',
        'dob',
        'txt',
        'tribes',
        'religion',
        'pabbajja',
        'identification_card',
        'province_birth',
        'district_birth',
        'village_birth',
        'current_pro',
        'current_dist',
        'current_vill',
        'temple',
        'phone_no',
        'phone_mobile',
        'office_no',
        'census',
        'allow_date',
        'at',
    ];

    protected $fillable = [
        'title',
        'fist_name',
        'last_name',
        'gender',
        'eng_name',
        'eng_last',
        'dob',
        'txt',
        'tribes',
        'religion',
        'pabbajja',
        'identification_card',
        'province_birth',
        'district_birth',
        'village_birth',
        'current_pro',
        'current_dist',
        'current_vill',
        'temple',
        'phone_no',
        'phone_mobile',
        'office_no',
        'census',
        'allow_date',
        'at',
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

    public function getPhotoAttribute()
    {
        return $this->getMedia('history_admin_teacher_photo')->map(function ($item) {
            $media                      = $item->toArray();
            $media['url']               = $item->getUrl();
            $media['thumbnail']         = $item->getUrl('thumbnail');
            $media['preview_thumbnail'] = $item->getUrl('preview_thumbnail');

            return $media;
        });
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

    public function getPabbajjaAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setPabbajjaAttribute($value)
    {
        $this->attributes['pabbajja'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function getAllowDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setAllowDateAttribute($value)
    {
        $this->attributes['allow_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }
}
