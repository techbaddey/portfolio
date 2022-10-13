
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pelumiolaiya01@gmail.com",
    Password : "A7F8B5EB9DA93FCAD3E7AFEDD75386CE7775",
    To : 'pelumiolaiya1403@gmail.com',
    From :  "pelumiolaiya01@gmail.com",
    Subject : "Message From My Portfolio Website",
    Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Subject: " + document.getElementById("subject").value
               + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Your message has been sent successfully, I will reach out to you soon!")
);
    }

