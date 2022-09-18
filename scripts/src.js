
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pelumiolaiya1403@gmail.com",
    Password : "629A6BD1E261C3384AB669807290B66F411D",
    To : 'pelumiolaiya1403@gmail.com',
    From :  "pelumiolaiya1403@gmail.com",
    Subject : "Message From My Portfolio Website",
    Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Subject: " + document.getElementById("subject").value
               + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Your message has been sent successfully, I will reach out to you soon!")
);
    }


