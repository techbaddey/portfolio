
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pelumijuwonteejay@gmail.com",
    Password : "E09108C03DAE7C34BCA66CCE63E7617720B0",
    To : 'oyinkansolashoroye@gmail.com',
    From :  "pelumijuwonteejay@gmail.com",
    Subject : "Message From My Portfolio Website",
    Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Subject: " + document.getElementById("subject").value
               + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Your message has been sent successfully, I will reach out to you soon!")
);
    }
