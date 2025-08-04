<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MultilingualContent;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function getSectionContent($section)
{
    $contents = MultilingualContent::where('section_name', $section)->get();
    
    if ($contents->isEmpty()) {
        return response()->json(['error' => 'Section not found'], 404);
    }
    
    return response()->json($contents);
}
}