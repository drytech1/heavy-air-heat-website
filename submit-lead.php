<?php
declare(strict_types=1);

/**
 * Heavy Air & Heat lead form handler
 *
 * What this does:
 * 1. Accepts POST requests from your landing page form
 * 2. Validates and sanitizes the input
 * 3. Sends the lead to Airtable using the Airtable Web API
 * 4. Returns a JSON success/error response
 *
 * Setup:
 * - Replace YOUR_AIRTABLE_ACCESS_TOKEN
 * - Replace YOUR_BASE_ID
 * - Replace YOUR_TABLE_NAME
 */

header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

// Optional: only allow requests from your domain
$allowedOrigin = 'https://www.heavyairandheat.com';
if (!empty($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
}

// Airtable config
$airtableToken = 'patMZDn9NHSCmQzxo.8aa7bfa6141ceb0cba4b9f51edb042099e9a52b1f553e29f36b2158db8141b19';
$baseId = 'apph1kLBnbdiQNLpX/tbloPMkmxKPJ1rUlb/viwOi0z2Ytd1RYVlj';
$tableName = 'Leads';

// Collect and sanitize input
$name = trim((string)($_POST['name'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

// Basic validation
$errors = [];

if ($name === '') {
    $errors[] = 'Name is required.';
}

if ($phone === '') {
    $errors[] = 'Phone number is required.';
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email address is invalid.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed.',
        'errors' => $errors
    ]);
    exit;
}

// Build Airtable request
$airtableUrl = "https://api.airtable.com/v0/{$baseId}/" . rawurlencode($tableName);

$payload = [
    'fields' => [
        'Name' => $name,
        'Phone' => $phone,
        'Email' => $email,
        'Service Requested' => $service,
        'Message' => $message,
        'Source' => 'Heavy Air & Heat Landing Page',
        'Status' => 'New Lead',
        'Created At' => gmdate('c'),
    ]
];

$ch = curl_init($airtableUrl);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $airtableToken,
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_SLASHES),
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);

curl_close($ch);

if ($response === false || $curlError !== '') {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Could not connect to Airtable.',
        'error' => $curlError
    ]);
    exit;
}

$responseData = json_decode($response, true);

if ($httpCode < 200 || $httpCode >= 300) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Airtable rejected the request.',
        'airtable_response' => $responseData ?: $response
    ]);
    exit;
}

// Success
echo json_encode([
    'success' => true,
    'message' => 'Lead submitted successfully.'
]);
