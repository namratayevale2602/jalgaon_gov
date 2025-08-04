<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'population',
        'area',
        'literacy_rate',
        'villages_count',
        'image_path'
    ];
}
