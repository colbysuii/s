<?php

function grab_json_definition($word, $ref, $key) {
    $uri = "https://dictionaryapi.com/api/v3/references/" . urlencode($ref) . "/json/" . urlencode($word) . "?key=" . urlencode($key);
    return file_get_contents($uri);
}

$word = $_GET['word'];
$jdef = grab_json_definition($word, "sd3", "c2df3e73-4c32-40e8-8517-7c624e8293de");
$decoded = json_decode($jdef, true);

if (isset($decoded[0]['shortdef'][0]) && isset($decoded[0]['meta']['stems'][0])) {
    $response = array(
        'english' => $decoded[0]['shortdef'][0],
        'spanish' => $decoded[0]['meta']['stems'][0]
    );
    echo json_encode($response);
} else {
    echo json_encode(false);
}
?>
