var input = document.getElementById("input");
input.addEventListener("change", function () {
  readXlsxFile(input.files[0]).then(function (rows) {
    // `rows` is an array of rows
    // each row being an array of cells.

    //Spørmål 1
    /* for (const i of rows) {
        
         if (i[2] == "forNavn") {
          continue
        } else {
  document.write(`${i[2]} ${i[3]} <br>`); 
        } 
        }  */

    //spørsmål 2
    /* let sum = 0;
        for (const i of rows) {
          if (i[11] == "kvinne") {
            sum++;
          }
        }
  console.log(`I listen har vi ${sum} jenter`); */

    //spørsmål 3
    /* let sum = 0;
        for (const i of rows) {
          if (i[11] == "kvinne" && i[10] == "1MKB") {
            sum++;
          }
        }
  console.log(`I listen har vi ${sum} jenter som går i 1MKB`); */

    //spørsmål 4
    /* var divContainer = document.createElement("div");
    divContainer.className = 'container';
    document.body.appendChild(divContainer);

    rows.forEach(function(row, index) {
      if (index === 0) {
        return;
      }

      var img = document.createElement('img');
      img.src = row[7]; 
      divContainer.appendChild(img);
    }); */

    //spørsmål 5
   /*  var divContainer = document.createElement("div");
    divContainer.className = 'container';
    document.body.appendChild(divContainer);

    if (rows.length >= 15) {  
      var row = rows[14]; 
      var img = document.createElement('img');
      img.src = row[7]; 
      divContainer.appendChild(img);
    }  */

    //spørsmål 6
    /* var divContainer = document.createElement("div");
    divContainer.className = 'container';
    document.body.appendChild(divContainer);
 
    rows.forEach(element => {
      if (element[8] == "Asker") {
        var img = document.createElement('img');
        img.src = element[7];
        divContainer.appendChild(img);
      }
    }); */

    //spørsmål 7
    var eldsteElevContainer = document.createElement("div");
    eldsteElevContainer.className = "eldste-elev";
    document.body.appendChild(eldsteElevContainer);
 
    var eldsteElev = null;
    rows.forEach(function (row, index) {
      if (index === 0) {
        return;
      }
      var fødselsår = parseInt(row[5]);
      if (!eldsteElev || fødselsår < eldsteElev.fødselsår) {
        eldsteElev = {
          fornavn: row[2],
          etternavn: row[3],
          fødselsår: fødselsår,
        };
      }
    });
 
    if (eldsteElev) {
      var currentYear = new Date().getFullYear();
      var alder = currentYear - eldsteElev.fødselsår;
      eldsteElevContainer.innerHTML = `Den eldste eleven er ${eldsteElev.fornavn} ${eldsteElev.etternavn}.`;
    }

  });
});
