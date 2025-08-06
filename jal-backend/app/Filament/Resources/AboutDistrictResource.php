<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutDistrictResource\Pages;
use App\Filament\Resources\AboutDistrictResource\RelationManagers;
use App\Models\AboutDistrict;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AboutDistrictResource extends Resource
{
    protected static ?string $model = AboutDistrict::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('District Information')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('name_en')
                                    ->required()
                                    ->label('Name (English)'),
                                Forms\Components\Textarea::make('description_en')
                                    ->required()
                                    ->label('Description (English)')
                                    ->columnSpanFull(),
                                Forms\Components\Repeater::make('stats_en')
                                    ->label('Statistics (English)')
                                    ->schema([
                                        Forms\Components\TextInput::make('title')
                                            ->required()
                                            ->label('Stat Title'),
                                        Forms\Components\TextInput::make('value')
                                            ->required()
                                            ->label('Stat Value'),
                                    ])
                                    ->defaultItems(4)
                                    ->columnSpanFull(),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('name_mr')
                                    ->required()
                                    ->label('Name (Marathi)'),
                                Forms\Components\Textarea::make('description_mr')
                                    ->required()
                                    ->label('Description (Marathi)')
                                    ->columnSpanFull(),
                                Forms\Components\Repeater::make('stats_mr')
                                    ->label('Statistics (Marathi)')
                                    ->schema([
                                        Forms\Components\TextInput::make('title')
                                            ->required()
                                            ->label('Stat Title (Marathi)'),
                                        Forms\Components\TextInput::make('value')
                                            ->required()
                                            ->label('Stat Value (Marathi)'),
                                    ])
                                    ->defaultItems(4)
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('image_path')
                    ->label('District Image')
                    ->image()
                    ->directory('district-images')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('Image'),
                Tables\Columns\TextColumn::make('name_en')
                    ->label('Name (English)')
                    ->searchable(),
                Tables\Columns\TextColumn::make('name_mr')
                    ->label('Name (Marathi)')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAboutDistricts::route('/'),
            'create' => Pages\CreateAboutDistrict::route('/create'),
            'edit' => Pages\EditAboutDistrict::route('/{record}/edit'),
        ];
    }
}
