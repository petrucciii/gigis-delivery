<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json');

    function sendMail($reciver, $subject, $message, $headers) {
        mail($reciver, $subject, $message, $headers);
    }

    $reciver = "riccardo.petrucci99@gmail.com";
    $subject = "Rider";
    $message = "motivo: " . $_POST['reason'] . ", esperienza: " . $_POST['experience'];
    $headers = "email inviata da: " . $_POST['name'] . ", " . $_POST['email'] . ", residente a: " . $_POST['city'];


    sendMail($reciver, $subject, $message, $headers);
?>