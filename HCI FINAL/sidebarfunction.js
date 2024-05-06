document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === "-250px") {
      sidebar.style.right = "0";
    } else {
      sidebar.style.right = "-250px";
    }
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.right = "-250px";
  });