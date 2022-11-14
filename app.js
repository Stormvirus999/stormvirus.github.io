var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        
    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}


/*function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vedantlonkar2004@gmail.com",
        Password : "DIGITALpirate@23",
        To : 'lvedant99@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message) 
    );
    
}*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbykcwPb1X4PehB5WrNatBJAjPLbyX_zfnDsItQWlRQqazZZJ_BCtdhFyYacXNQJCfhr/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})