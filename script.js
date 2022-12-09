var popup;
function alertup() {
    console.log("alertup - start")
    popup =  window.open('', 'newWindow', 'width=800, height=600');
    if (popup) popup.document.write('<html><body>Child Window<br><button onclick="opener.fontSize(48)">Test</button></body></html>');
    console.log("alertup - end")
}

function fontSize(size) {
    console.log("fontSize - start");
    popup.document.body.style.fontSize = size + 'px';
    console.log("fontSize - stop")
}
    
     
	
   

