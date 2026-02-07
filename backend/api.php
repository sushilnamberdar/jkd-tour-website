<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$request_uri = $_SERVER['REQUEST_URI'];

if ($request_uri === '/tours') {
    $tours = array(
        array(
            "id" => 1,
            "title" => "Amazing Kashmir",
            "description" => "A beautiful tour of the Kashmir valley.",
            "price" => "500",
            "duration" => "5 Days",
            "image" => "https://images.unsplash.com/photo-1595815779941-38062b02254b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        array(
            "id" => 2,
            "title" => "Ladakh Adventure",
            "description" => "An adventurous tour of Ladakh.",
            "price" => "700",
            "duration" => "7 Days",
            "image" => "https://images.unsplash.com/photo-1608428256337-b0cf73786523?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        array(
            "id" => 3,
            "title" => "Himachal Diaries",
            "description" => "Explore the serene beauty of Himachal.",
            "price" => "600",
            "duration" => "6 Days",
            "image" => "https://images.unsplash.com/photo-1616388969582-45483def9885?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )
    );
    echo json_encode($tours);
} elseif ($request_uri === '/destinations') {
    $destinations = array(
        array(
            "id" => 1,
            "name" => "Kashmir",
            "image" => "https://images.unsplash.com/photo-1595815779941-38062b02254b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        array(
            "id" => 2,
            "name" => "Ladakh",
            "image" => "https://images.unsplash.com/photo-1608428256337-b0cf73786523?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        array(
            "id" => 3,
            "name" => "Himachal",
            "image" => "https://images.unsplash.com/photo-1616388969582-45483def9885?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )
    );
    echo json_encode($destinations);
} else {
    echo json_encode(
        array(
            "message" => "Welcome to the JKD Tour API",
            "endpoints" => array(
                "/tours" => "Get all tours",
                "/destinations" => "Get all destinations"
            )
        )
    );
}
?>