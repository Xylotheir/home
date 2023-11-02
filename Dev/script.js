window.onerror = function(e){alert(e);};
function unban() {
    localStorage.setItem('banned', 'false');
}
/*function test() {
    alert('Syn')
}*/
document.head = document.head || document.getElementsByTagName('head')[0];
/*var btn = document.getElementsByTagName('button')[0];
btn.onclick =*/
function cloak() {
    document.querySelector('#ico').href = 'https://instructure-uploads.s3.amazonaws.com/account_29340000000000001/attachments/112692/Screen%20Shot%202018-08-20%20at%206.22.27%20PM.png';
    document.title = "Dashboard";
};