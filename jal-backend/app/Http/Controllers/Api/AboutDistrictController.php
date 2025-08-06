<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutDistrict;

class AboutDistrictController extends Controller
{
    public function index()
    {
        $districts = AboutDistrict::all()->map(function($district) {
            return [
                'name' => [
                    'en' => $district->name_en,
                    'mr' => $district->name_mr,
                ],
                'description' => [
                    'en' => $district->description_en,
                    'mr' => $district->description_mr,
                ],
                'image' => $district->image_path ? asset('storage/' . $district->image_path) : null,
                'stats' => [
                    'en' => $district->stats_en,
                    'mr' => $district->stats_mr,
                ]
            ];
        });

        return response()->json($districts);
    }

    public function show($id)
    {
        $district = AboutDistrict::findOrFail($id);

        return response()->json([
            'name' => [
                'en' => $district->name_en,
                'mr' => $district->name_mr,
            ],
            'description' => [
                'en' => $district->description_en,
                'mr' => $district->description_mr,
            ],
            'image' => $district->image_path ? asset('storage/' . $district->image_path) : null,
            'stats' => [
                'en' => $district->stats_en,
                'mr' => $district->stats_mr,
            ]
        ]);
    }
}
