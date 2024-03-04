const container = document.querySelector(".container");
const tables = document.querySelectorAll(".row .table:not(.sold)");
const count = document.getElementById("count");

const seatSelect = document.getElementById("seat");


populateUI();

let ticketPrice = +seatSelect.value;

var inputNama = document.getElementById('reservation-name');
var NamaElement = document.getElementById('Nama');

inputNama.addEventListener('input', function () {
    var nama = inputNama.value;
    NamaElement.textContent = nama !== '' ? ' ' + nama + '!' : '';
  });

  
// Save selected seat index and price
function setseatData(seatIndex, seatPrice) {
  localStorage.setItem("selectedseatIndex", seatIndex);
  localStorage.setItem("selectedseatPrice", seatPrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedtables = document.querySelectorAll(".row .table.selected");

  const tablesIndex = [...selectedtables].map((table) => [...tables].indexOf(table));

  localStorage.setItem("selectedtables", JSON.stringify(tablesIndex));

  const selectedtablesCount = selectedtables.length;

  count.innerText = selectedtablesCount;

  setseatData(seatSelect.selectedIndex, seatSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedtables = JSON.parse(localStorage.getItem("selectedtables"));

  if (selectedtables !== null && selectedtables.length > 0) {
    tables.forEach((table, index) => {
      if (selectedtables.indexOf(index) > -1) {
        console.log(table.classList.add("selected"));
      }
    });
  }

  const selectedseatIndex = localStorage.getItem("selectedseatIndex");

  if (selectedseatIndex !== null) {
    seatSelect.selectedIndex = selectedseatIndex;
    console.log(selectedseatIndex)
  }
}

// seat select event
seatSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setseatData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// table click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("table") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

function showAlert() {
   
  }

  function showAlert() {
    // Mengambil semua elemen dengan kelas 'table' yang memiliki kelas tambahan 'selected'
    var selectedTables = document.querySelectorAll('.table.selected');
  
    // Mengubah warna semua elemen yang dipilih menjadi putih
    selectedTables.forEach(function(table) {
      table.classList.remove('selected');
      table.classList.add('sold');
    });
  
  

    alert("The table has been successfully booked!");
  }
  

// Initial count and total set
updateSelectedCount();

