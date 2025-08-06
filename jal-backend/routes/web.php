<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\AboutDistrictController;

Route::prefix('api')->group(function() {
    Route::get('/content/{section}', [LanguageController::class, 'getSectionContent']);
    // Route::get('/district', [DistrictController::class, 'index']);
    // Route::put('/district', [DistrictController::class, 'update'])->middleware('auth:sanctum');
    Route::get('/districts', [AboutDistrictController::class, 'index']);
});