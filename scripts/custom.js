window.onload = function() {
    
    console.log( "starting!" );
    console.log(typeof window.onload);

    var tagItems = document.getElementsByTagName("*");
    //console.log(tagItems);
    
    for (i=0;i<tagItems.length;i++) {
        console.log(tagItems[i]);
    }
    
                              };
    
    