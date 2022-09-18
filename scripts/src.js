
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pelumiolaiya01@gmail.com",
    Password : "50F842E32430F2246048CD85B2EA106ABDA7",
    To : 'teqbaddie@gmail.com',
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



    // Host : "smtp.elasticemail.com",
    // Username : "pelumijuwonteejay@gmail.com",
    // Password : "7269E31C54FEA1D45C4D12CDC5EAEDA7BA34",
    // To : 'teqbaddie@gmail.com',
    // From :  "pelumijuwonteejay@gmail.com",