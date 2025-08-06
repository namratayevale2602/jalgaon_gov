<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutDistrict extends Model
{
    protected $table = 'aboutdistricts'; // Explicitly set the table name
    protected $fillable = [
        'name_en',
        'name_mr',
        'description_en',
        'description_mr',
        'image_path',
        'stats_en',
        'stats_mr'
    ];

    protected $casts = [
        'stats_en' => 'array',
        'stats_mr' => 'array'
    ];
}
