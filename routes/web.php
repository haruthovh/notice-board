<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\NoticeBoardController;
use App\Http\Controllers\StoryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])
        ->middleware('guest')
        ->name('login');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware('guest');
});

Route::middleware('auth')->group(function() {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::prefix('/stories')->name('stories.')->group(function () {
        Route::get('/', [StoryController::class, 'listStories'])->name('list');
        Route::get('/create', [StoryController::class, 'showCreateForm'])->name('create');
        Route::post('/create', [StoryController::class, 'createStory']);
    });
});

Route::prefix('/notice-board')->name('notice_board.')->group(function() {
    Route::get('/', [NoticeBoardController::class, 'listStories'])->name('list');
    Route::get('/approve/{link}', [NoticeBoardController::class, 'approve'])->name('approve');
});
