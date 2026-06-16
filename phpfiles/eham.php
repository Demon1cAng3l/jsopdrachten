<?php
header("Content-Type: application/json");

$term = strtolower($_GET["zoek"]);

// URL naar PokéAPI
$url = "https://pokeapi.co/api/v2/pokemon/" . $term;

// API opvragen
$apiResponse = @file_get_contents($url);

// Als Pokémon niet bestaat
if (!$apiResponse) {
    echo json_encode([
        "error" => "Pokémon niet gevonden"
    ]);
    exit;
}

$data = json_decode($apiResponse, true);

// Bouw je eigen JSON
$resultaat = [
    "naam" => $data["name"],
    "sprite" => $data["sprites"]["front_default"],
    "gewicht" => $data["weight"]
];

// Stuur terug naar JavaScript
echo json_encode($resultaat);