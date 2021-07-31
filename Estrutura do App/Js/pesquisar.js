function myFunction() {
    var input = document.getElementById("pesquisar")
    var filter = input.value.toUpperCase()
    var table = document.getElementById("lista");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        var txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          console.log("nada")
          tr[i].style.display = "none";
        }
      }       
    }
  }