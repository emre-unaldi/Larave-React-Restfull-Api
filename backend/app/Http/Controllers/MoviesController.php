<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Movie;

class MoviesController extends Controller
{
    public function index() { return "index"; }

    public function create(Request $request) { 
        $movie = new Movie();
        $movie->title = $request->title;
        $movie->description = $request->description;
        $movie->image = $request->image;
        $movie->save();

        return $movie;
    }

	public function show() {
        $movie = Movie::query()->get();
        return $movie;
    }

    public function edit(Request $request) {
        $movie = Movie::query()->find($request->id);

        return $movie;
    }

    public function update(Request $request) { 
        $movie = Movie::query()->find($request->id);
        $movie->title = $request->title;
        $movie->description = $request->description;
        $movie->image = $request->image;
        $movie->save();

        return $movie;
    }

	public function delete(Request $request) {
        $movie = Movie::query()->find($request->id);
        $movie->delete();

        return $movie;
    }

}
