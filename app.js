//sumber belajar https://www.raymondcamden.com/2022/03/14/building-table-sorting-and-pagination-in-javascript
document.addEventListener('DOMContentLoaded', init, false);
//menampilkan data
async function init() {
    let table = document.querySelector('#catTable tbody');
    let resp = await fetch('https://www.raymondcamden.com/.netlify/functions/get-cats');
    let data = await resp.json();
    let result = '';
    data.forEach(function(c) {
        result += `<tr>
            <td>${c.name}</td>
            <td>${c.age}</td>
            <td>${c.breed}</td>
            <td>${c.gender}</td>
            </tr>`;
    });
    table.innerHTML = result;
}