<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] == "post") {
        if (isset($_POST['request']) && $_POST['request'] == "UPLOAD") {
            echo json_encode(upload($_FILES, "uploaded/"));
        }
    }

    function upload($files, $dest) {
        $fname = "";
        $output = "";

        foreach ($files as $file) {
            $filename = basename(($file['name']));
            $target_file = $dest . $filename;
            $fname = $filename;

            if (!move_uploaded_file($file['tmp_name'], $target_file)) {
                $output .= "Errore durante la fase di upload del file";
            }
        }
        if ($output == "") {
            return array("OK");
        }

        return array("KO", $output);
    }
?>