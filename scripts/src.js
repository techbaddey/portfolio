
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "oyinkansolashoroye@gmail.com",
    Password : "0B10679E30E506481633B8C03280CBFD2CAC",
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


