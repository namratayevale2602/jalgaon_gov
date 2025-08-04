<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MultilingualContentResource\Pages;
use App\Filament\Resources\MultilingualContentResource\RelationManagers;
use App\Models\MultilingualContent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class MultilingualContentResource extends Resource
{
    protected static ?string $model = MultilingualContent::class;

    protected static ?string $navigationIcon = 'heroicon-o-language';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('section_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('field_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('english_content')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('marathi_content')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('section_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('field_name')
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
            'index' => Pages\ListMultilingualContents::route('/'),
            'create' => Pages\CreateMultilingualContent::route('/create'),
            'edit' => Pages\EditMultilingualContent::route('/{record}/edit'),
        ];
    }
}