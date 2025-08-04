Fillament
Username : jalgaon@gmail.com
Password : Jalgaon@123

Step 1: Database Setup
Create a migration for multilingual content:

bash
php artisan make:migration create_multilingual_contents_table
Update the migration file (database/migrations/xxxx_xx_xx_xxxxxx_create_multilingual_contents_table.php):

php
Schema::create('multilingual_contents', function (Blueprint $table) {
$table->id();
$table->string('section_name');
$table->string('field_name');
$table->text('english_content');
$table->text('marathi_content');
$table->timestamps();
});
Run the migration:

bash
php artisan migrate
Step 2: Backend Setup (Laravel)
Create a model:

bash
php artisan make:model MultilingualContent
Create a Filament resource:

bash
php artisan make:filament-resource MultilingualContent
Update the Filament resource (app/Filament/Resources/MultilingualContentResource.php):

php
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

public static function form(Form $form): Form
{
return $form
->schema([
TextInput::make('section_name')->required(),
TextInput::make('field_name')->required(),
Textarea::make('english_content')->required(),
Textarea::make('marathi_content')->required(),
]);
}

public static function table(Table $table): Table
{
return $table
->columns([
TextColumn::make('section_name'),
TextColumn::make('field_name'),
]);
}
Create an API controller:

bash
php artisan make:controller Api/LanguageController
Update the controller (app/Http/Controllers/Api/LanguageController.php):

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

Add API route in routes/api.php:

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LanguageController;

Route::prefix('api')->group(function() {
    Route::get('/content/{section}', [LanguageController::class, 'getSectionContent']);
});
