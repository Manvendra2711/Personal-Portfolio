<?php
$fullName = $_POST['Full-Name'];
$email = $_POST['Email-Address'];
$mobileNumber = $_POST['Mobile-Number'];
$emailSub = $_POST['Email-sub'];
$message = $_POST['message'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'portfolio');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO contact(fullName, email, mobileNumber, emailSub, message) VALUES(?, ?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ssiss", $fullName, $email, $mobileNumber, $emailSub, $message);
        $execval = $stmt->execute();
        if (!$execval) {
            echo "Error: " . $conn->error;
        } else {
            echo "Your message has been successfully submitted.";
        }
        $stmt->close();
    } else {
        echo "Error in preparing statement: " . $conn->error;
    }
    $conn->close();
}
?>