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
       // console.log(tblChildNodes);
        for ( i=0;i<=tblChildNodes.length-1;i++) {
            if (tblChildNodes[i].nodeType == 1 ) {
                    cnode = tblChildNodes[i].cloneNode(true);
                    console.log("logging cnode " + "length of nodeList : " + tblChildNodes.length + " " + i + " " + cnode);
                            console.log(tblChildNodes);

            }
        }
    
        tbltbody.appendChild(cnode);
        console.log(tblChildNodes);

      /*
        var tdName = document.createElement("td");
        var tdNameText = document.createTextNode("Name 1");
        tdName.appendChild(tdNameText);
        tbltbody.appendChild(tdName);
    
        var tdName = document.createElement("td");
        var tdDescription = document.createTextNode("Name 1");
    */
};
    
