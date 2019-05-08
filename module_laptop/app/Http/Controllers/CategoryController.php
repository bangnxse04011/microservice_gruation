<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Method show all data laptop
     */
    public function index()
    {
        return Category::all();
    }
}
