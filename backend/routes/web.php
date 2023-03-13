<?php

use App\Http\Controllers\MoviesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () { return "Laravel Restfull Api"; });
Route::fallback(function () { return "Not Found Page"; });

Route::middleware(['cors'])->group(function () {
    Route::prefix('movie')->group(function () {
        Route::get('/', [MoviesController::class, 'index']);
        Route::post('/create', [MoviesController::class, 'create']);
        Route::post('/edit', [MoviesController::class, 'edit']);
        Route::get('/show', [MoviesController::class, 'show']);
        Route::post('/update', [MoviesController::class, 'update']);
        Route::post('/delete', [MoviesController::class, 'delete']);
        Route::fallback(function () { return "Movie Not Found Page"; });
    });
});


