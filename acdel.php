<?php
// Set your registered email address here
// $to = 'technobuzzsystems@gmail.com';
$to = 'sspingale2205@gmail.com';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = strip_tags(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    // $mobile = strip_tags(trim($_POST['mobile'] ?? ''));
    $registered_contact = strip_tags(trim($_POST['registered_contact'] ?? ''));

    // Validate required fields
    if ($name && $email && $registered_contact && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_subject = "Acdel Form Submission";
        $email_body = "You have received a new submission from the Acdel form.\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            // "Mobile Number: $mobile\n" .
            "Registered Contact Number: $registered_contact\n";
        $headers = "From: $name <$email>\r\nReply-To: $email";

        if (mail($to, $email_subject, $email_body, $headers)) {
            $msg = 'Thank you! Your details have been submitted successfully. Your account will be deleted within 45 days.';
            $type = 'success';
        } else {
            $msg = 'Sorry, there was an error sending your details. Please try again later.';
            $type = 'danger';
        }
    } else {
        $msg = 'Please fill in all required fields and provide a valid email address.';
        $type = 'danger';
    }
    // Output JS alert and redirect
    echo "<script>alert('" . addslashes($msg) . "'); window.location.href='acdel.php';</script>";
    exit();
} else {
    // Show the HTML form
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Deletion Form</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f5f7fa; margin: 0; padding: 0; }
        .acdel-form-container { max-width: 500px; margin: 60px auto; background: #fff; padding: 50px 90px 50px 80px; border-radius: 18px; box-shadow: 0 4px 24px rgba(0,0,0,0.09); }
        .acdel-form-container h2 { text-align: center; margin-bottom: 28px; color: #d73e4d; font-size: 1.7rem; letter-spacing: 0.5px; }
        .form-group { margin-bottom: 22px; }
        label { display: block; margin-bottom: 8px; font-weight: 600; color: #333; letter-spacing: 0.2px; }
        input[type="text"], input[type="email"] {
            width: 100%; padding: 12px 13px; border: 1.2px solid #ccc; border-radius: 6px; font-size: 15.5px; background: #fafbfc; transition: border 0.2s, box-shadow 0.2s;
        }
        input[type="text"]:focus, input[type="email"]:focus {
            border: 1.2px solid #d73e4d; outline: none; background: #fff; box-shadow: 0 0 0 2px rgba(215,62,77,0.08);
        }
        button {
            width: 100%; padding: 13px; background: #d73e4d; color: #fff; border: none; border-radius: 6px; font-size: 16.5px; font-weight: 700; cursor: pointer; transition: background 0.2s, box-shadow 0.2s;
            box-shadow: 0 2px 8px rgba(215,62,77,0.07);
        }
        button:hover, button:focus {
            background: #c12e3d;
            box-shadow: 0 4px 16px rgba(215,62,77,0.13);
        }
        @media (max-width: 600px) {
            .acdel-form-container { padding: 18px 6vw 18px 6vw; margin: 30px 0; }
            .acdel-form-container h2 { font-size: 1.2rem; }
        }
        .alert {
            max-width: 420px;
            margin: 30px auto 0 auto;
            padding: 16px 18px;
            border-radius: 7px;
            font-size: 1rem;
            text-align: center;
        }
        .alert-success {
            background: #eafaf1;
            color: #1a7f37;
            border: 1.2px solid #b7e4c7;
        }
        .alert-danger {
            background: #fff0f0;
            color: #d73e4d;
            border: 1.2px solid #f5c2c7;
        }
    </style>
</head>
<body>
    <div class="acdel-form-container">
        <h2>Account Deletion Form</h2>
        <form action="acdel.php" method="POST" autocomplete="off">
            <div class="form-group">
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="registered_contact">Registered Contact Number*</label>
                <input type="text" id="registered_contact" name="registered_contact" required pattern="[0-9]{10,15}" title="Enter a valid registered contact number">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>';
}
