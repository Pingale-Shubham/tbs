<?php
// Set your email address here
$to = 'technobuzzsystems@gmail.com';

// Check if POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = strip_tags(trim($_POST['firstname'] ?? ''));
    $lastname = strip_tags(trim($_POST['lastname'] ?? ''));
    $name = trim($firstname . ' ' . $lastname);
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST['phone'] ?? ''));
    $subject = strip_tags(trim($_POST['subject'] ?? ''));
    $message = strip_tags(trim($_POST['message'] ?? ''));

    // Validate required fields
    if ($firstname && $email && $phone && $subject && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_subject = "Contact Form: $subject";
        $email_body = "You have received a new message from the contact form on your website.\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Subject: $subject\n" .
            "Message:\n$message\n";
        $headers = "From: $name <$email>\r\nReply-To: $email";

        if (mail($to, $email_subject, $email_body, $headers)) {
            echo 'Thank you for contacting us! We will get back to you soon.';
        } else {
            echo 'Sorry, there was an error sending your message. Please try again later.';
        }
    } else {
        echo 'Please fill in all required fields and provide a valid email address.';
    }
} else {
    // Not a POST request
    header('Location: contact.html');
    exit();
} 