<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;


Route::get('/', [PropertyController::class, 'index'])->name('index');


Route::get('/propiedades-en-venta', [PropertyController::class, 'comprarIndex'])->name('comprar.index');
