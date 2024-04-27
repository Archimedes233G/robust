document.getElementById('downloadButton').addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = 'robust-standalone.zip';
    a.download = 'robust-standalone.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
