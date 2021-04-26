const table = document.querySelector('table');
    let projects = [];
    function populate(response) {
      console.log(response)
      projects = response.projects.map(project => {
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdProject = document.createElement('td');
        tdId.innerHTML = project.id;
        tdProject.innerHTML = project.name;
        tr.append(tdProject,tdId);
        return tr
      })
      table.append(...projects)
    }

    function myFunction() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");


      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

    const myRequest = new Request('http://localhost:3000');
    fetch(myRequest)
      .then(response => response.json())
      .then(projects => populate(projects));