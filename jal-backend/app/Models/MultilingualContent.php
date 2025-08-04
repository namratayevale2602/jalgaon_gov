<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MultilingualContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_name',
        'field_name',
        'english_content',
        'marathi_content'
    ];

    public static function getSectionContent($section)
    {
        return static::where('section_name', $section)
            ->get()
            ->mapWithKeys(function ($item) {
                return [
                    $item->field_name => [
                        'en' => $item->english_content,
                        'mr' => $item->marathi_content
                    ]
                ];
            });
    }
}