<?php

namespace App\Filament\Resources\MultilingualContentResource\Pages;

use App\Filament\Resources\MultilingualContentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMultilingualContents extends ListRecords
{
    protected static string $resource = MultilingualContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
