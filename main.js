$(document).ready(function() {
// write your code here
$.getJSON("data.json", function(data) {
    let spots = [];
    $.each(data, function(index, value) {
        spots.push(value);
    });
    let col = [];
    for(let i = 0; i < spots.length; i += 1){
        for(let key in spots[i]) {
            if(col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    let table = document.createElement("table");
    let tr = table.insertRow(-1);

    for(let i = 0; i < col.length; i += 1) {
        let th = document.createElement("th");
        th.innerHTML = col[i].charAt(0).toUpperCase() + col[i].substring(1);
        tr.appendChild(th);
    }

    for(let i = 0; i < spots.length; i += 1) {
        tr = table.insertRow(-1);

         for(let j = 0; j < 2; j += 1) {
             let tabCell = tr.insertCell(-1);
             tabCell.innerHTML = spots[i][col[j]];
         }

        let c = 2;
             let tabCell1 = tr.insertCell(-1);
             let gps = spots[i][col[c]];
             let link = 'http://maps.google.com/maps?q=' + gps;
             tabCell1.innerHTML = '<a href="' + link + '"><button type="button" class="btn btn-info">Take Me There!</button></a>';
         

     }

    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
    });

});
