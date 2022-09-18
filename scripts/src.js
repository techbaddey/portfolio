
function sendEmail(){
  Email.send({
    SecureToken : "30f6ec16-a286-4ff6-8bf9-87a9d12c0ecf",
    To : 'oyinkansolashoroye@gmail.com',
    From : "pelumiolaiya1403@gmail.com",
    Subject : "Message From My Portfolio Website",
    Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Subject: " + document.getElementById("subject").value
               + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Your message has been sent successfully, I will reach out to you soon!")
);
    }


