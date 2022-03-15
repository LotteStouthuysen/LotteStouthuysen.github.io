function enableHome() {
document.getElementById("homeBody").style.display = "block";
document.getElementById("homeBody").disabled = "false";
document.getElementById("werkwijzenBody").style.display = "none";
document.getElementById("werkwijzenBody").disabled = "true";
document.getElementById("tarievenBody").style.display = "none";
document.getElementById("tarievenBody").disabled = "true";
document.getElementById("blogBody").style.display = "none";
document.getElementById("blogBody").disabled = "true";
document.getElementById("contactBody").style.display = "none";
document.getElementById("contactBody").disabled = "true";
window.scrollTo(0, 0)
}
function enableWerkwijzen() {
document.getElementById("homeBody").style.display = "none";
document.getElementById("homeBody").disabled = "true";
document.getElementById("werkwijzenBody").style.display = "block";
document.getElementById("werkwijzenBody").disabled = "false";
document.getElementById("tarievenBody").style.display = "none";
document.getElementById("tarievenBody").disabled = "true";
document.getElementById("blogBody").style.display = "none";
document.getElementById("blogBody").disabled = "true";
document.getElementById("contactBody").style.display = "none";
document.getElementById("contactBody").disabled = "true";
window.scrollTo(0, 0)
}
function enableTarieven() {
document.getElementById("homeBody").style.display = "none";
document.getElementById("homeBody").disabled = "true";
document.getElementById("werkwijzenBody").style.display = "none";
document.getElementById("werkwijzenBody").disabled = "true";
document.getElementById("tarievenBody").style.display = "block";
document.getElementById("tarievenBody").disabled = "none";
document.getElementById("blogBody").style.display = "none";
document.getElementById("blogBody").disabled = "true";
document.getElementById("contactBody").style.display = "none";
document.getElementById("contactBody").disabled = "true";
window.scrollTo(0, 0)
}
function enableBlog() {
document.getElementById("homeBody").style.display = "none";
document.getElementById("homeBody").disabled = "true";
document.getElementById("werkwijzenBody").style.display = "none";
document.getElementById("werkwijzenBody").disabled = "true";
document.getElementById("tarievenBody").style.display = "none";
document.getElementById("tarievenBody").disabled = "true";
document.getElementById("blogBody").style.display = "block";
document.getElementById("blogBody").disabled = "false";
document.getElementById("contactBody").style.display = "none";
document.getElementById("contactBody").disabled = "true";
window.scrollTo(0, 0)
}
function enableContact() {
document.getElementById("homeBody").style.display = "none";
document.getElementById("homeBody").disabled = "true";
document.getElementById("werkwijzenBody").style.display = "none";
document.getElementById("werkwijzenBody").disabled = "true";
document.getElementById("tarievenBody").style.display = "none";
document.getElementById("tarievenBody").disabled = "true";
document.getElementById("blogBody").style.display = "none";
document.getElementById("blogBody").disabled = "true";
document.getElementById("contactBody").style.display = "block";
document.getElementById("contactBody").disabled = "false";
window.scrollTo(0, 0)
}
function sendEmail(){
window.open('mailto:lotte.stouthuysen@gmail.com?subject=afspraak bij dietiste Lotte&body=voornaam: ' + document.getElementById("voornaam").value + '%0D%0A' +'naam: ' +document.getElementById("achternaam").value + '%0D%0A' + 'telefoonnummer(niet verplicht): '+ document.getElementById("telefoon").value + '%0D%0A' + 'Bericht: '+ document.getElementById("bericht").value);
}