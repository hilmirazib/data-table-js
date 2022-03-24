document.addEventListener('DOMContentLoaded', init, false);
//sorting table
let data, table, sortCol;
let sortAsc = false;

async function init() {
    // Select the table (well, tbody)
    table = document.querySelector('#catTable tbody');
    // get the cats
    let resp = await fetch('https://www.raymondcamden.com/.netlify/functions/get-cats');
    data = await resp.json();
    renderTable();

    // listen for sort clicks
    document.querySelectorAll('#catTable thead tr th').forEach((t) => {
        t.addEventListener('click', sort, false);
    });
}

function renderTable() {
    // create html
    let result = '';
    data.forEach((c) => {
        result += `<tr>
     <td>${c.name}</td>
     <td>${c.age}</td>
     <td>${c.breed}</td>
     <td>${c.gender}</td>
     </tr>`;
    });
    table.innerHTML = result;
}

function sort(e) {
    let thisSort = e.target.dataset.sort;
    // console.log(thisSort, '1');
    // console.log(sortCol, '2');

    if (sortCol === thisSort) sortAsc = !sortAsc;
    sortCol = thisSort;
    // console.log(sortCol, '3');
    data.sort((a, b) => {
        if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
        // console.log(a[sortCol], '4');
        // console.log(b[sortCol], '5');
        if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
        return 0;
    });
    renderTable();
}