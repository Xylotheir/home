window.onerror = function(e){alert(e);};
function copy(a){
    navigator.clipboard.writeText(a).then(function(){/*alert('Copying to clipboard was successful!');*/}, function(err){alert('Could not copy text: '+err);});
}
window.addEventListener('click', function(e){
    if(e.target.classList.contains('copy')){
        copy(e.target.innerText);
    }
});
window.addEventListener('hashchange', function(){
    window.scrollBy(0, -1*document.querySelector('nav').offsetHeight);
});
let i = 0;
let un = ['You can\'t click this, it\'s unclickable', 'Stop.', 'If you continue, you will regret it...', 'Pls Stop', 'Welp, you\'ve been warned....']
function no(){
    if(i<5){
        document.querySelector('.unclickable').innerText=un[i];
        i++;
    }else{
        localStorage.setItem('banned', 'true');
        ban();
    }
}
function ban(){
    if(localStorage.getItem('banned') == 'true'){
        document.write('<!DOCTYPE html><html><head><title>your fault</title><link rel="stylesheet" href="/Quickboard/style.css"><script>let m = new Audio();m.src = \'https://codehs.com/uploads/97ce171ed0d3126ab48a009a9c0a17dd\';m.load();m.loop = true;m.play();</script></head><body id="button"></body></html>');
    }
}