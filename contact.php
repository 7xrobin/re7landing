<?php

    $CONTACTS = '/data/re7.solutions/contacts.json';

    $contact = array();
    $contact['name'] = $_POST['name'];
    $contact['email'] = $_POST['email'];

    if (!empty($contact['name']) && !empty($contact['email'])) {
        $success = file_put_contents($CONTACTS, json_encode($contact) . PHP_EOL, FILE_APPEND);
        if ($success) {
            http_response_code(200);
        } else {
            http_response_code(500);
        }

    } else {
        // Bad Request, name and e-mail are required.
        http_response_code(400);
    }

?>
