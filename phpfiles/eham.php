<?php
header("Content-Type: application/json");

$term = strtolower($_GET["zoek"]);

$url = "https://pokeapi.co/api/v2/pokemon/" . $term;

$apiResponse = @file_get_contents($url);


if (!$apiResponse) {
    echo json_encode([
        "error" => "Pokémon niet gevonden"
    ]);
    exit;
}

$data = json_decode($apiResponse, true);

$resultaat = [
    "naam" => $data["name"],
    "sprite" => $data["sprites"]["front_default"],
    "gewicht" => $data["weight"]
];

echo json_encode($resultaat);