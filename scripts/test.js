window.onload = function () {
    var i ; 
    var trArray = document.getElementsByTagName("tr");
    if (trArray.length > 0) {
        console.log(trArray.length);
        //console.log(trArray);
    }  
    
    for (i = 2; i <= trArray.length; i++) {
        console.log("inside loop");
        console.log(trArray[i - 1]);
    }
    
   
    
}

function createRow() {
        console.log("Clicked + to create a new row"); 
        var tbltbody = document.getElementById("tbltbody");
        var tblChildNodes = tbltbody.childNodes;
        for ( key in tblChildNodes) {
            if (key.nodeValue == 1 ) {
                    console.log(key);
            }
             console.log(key + key.nodeValue);
        }
        var tdName = document.createElement("td");
        var tdNameText = document.createTextNode("Name 1");
        tdName.appendChild(tdNameText);
        tbltbody.appendChild(tdName);
    
        var tdName = document.createElement("td");
        var tdDescription = document.createTextNode("Name 1");
};
    
