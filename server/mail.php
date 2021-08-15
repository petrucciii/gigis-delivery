<?php
    function sendMail($reciver, $subject, $message, $headers) {
        mail($reciver, $subject, $message, $headers);
    }
?>