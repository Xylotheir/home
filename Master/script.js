window.onerror = function(e){alert(e);};
function copy(a){
    navigator.clipboard.writeText(a).then(function(){alert('Copying to clipboard was successful!');}, function(err){alert('Could not copy text: '+err);});
}
window.addEventListener('click', function(e){
    if(e.target.classList.contains('copy')){
        copy(e.target.innerText);
    }
});