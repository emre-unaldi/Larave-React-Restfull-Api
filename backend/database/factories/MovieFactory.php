<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class MovieFactory extends Factory
{
    protected $model = Movie::class;

    public function definition()
    {
        return [
            "title" => $this->faker->realText(10),
            "description" => $this->faker->realText(20),
            "image" => "https://source.unsplash.com/random"
        ];
    }
}
