<?php

namespace App\Http\Controllers;

use App\Laptop;
use Illuminate\Http\Request;

class LaptopController extends Controller
{
    /**
     * Method show all data laptop
     */
    public function index()
    {
        return Laptop::all();
    }

    /**
     * Method find laptop by id
     */
    public function show($id)
    {
        return Laptop::find($id);
    }

    /**
     * Method insert new laptop
     */
    public function store(Request $request)
    {
        return Laptop::create($request->all());
    }

    /**
     * Method update laptop
     */
    public function update(Request $request, $id)
    {
        $article = Laptop::findOrFail($id);
        $article->update($request->all());
        return $article;
    }

    /**
     * Method delete laptop
     */
    public function delete(Request $request, $id)
    {
        $article = Laptop::findOrFail($id);
        $article->delete();
        return $article;
    }
}
