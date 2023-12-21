<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class PropertyController extends Controller
{

    public function index() : View {
        
        return view('inicio.inicio');
    }


    public function comprarIndex() : View {
        
        return view('comprar.comprar');
    }
}
