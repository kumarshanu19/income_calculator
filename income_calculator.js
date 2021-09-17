var services = [
    { id: 'flight', minIndex: 1, name: 'Flight', commission: 100 },
    { id: 'bus', minIndex: 4, name: 'Bus', commission: 50 },
    { id: 'bbps', minIndex: 1, name: 'BBPS', commission: 100 },
    { id: 'recharge', minIndex: 2, name: 'Recharge', commission: 2 },
];


var incomePerDay = 0

var incomeMonth = 0


function updateIncome() {
    incomePerDay = 0
    for (const service of services) {
        var elem = document.getElementById(service.id);
        elem.value = elem.value >= service.minIndex ? elem.value : service.minIndex;
        if (elem) {
            incomePerDay += parseInt(elem.value, 10) * service.commission;
            var commissionElem = document.getElementById(service.id + 'commission')
            if (commissionElem) {
                commissionElem.innerHTML = '₹' + parseInt(elem.value, 10) * service.commission;
            }
        }
    }
    var incomePerDayElem = document.getElementById('incomePerDay')
    var incomePerMonthElem = document.getElementById('incomePerMonth')

    incomePerDayElem.innerHTML = '₹' + incomePerDay;
    incomePerMonthElem.innerHTML = '₹' + incomePerDay * 30;
}



function createTable() {
    var template = `
    <table class="table">
    <thead>
 <tr>
 <th>Services</th>
 <th>No. of Daily Transactions</th>
 <th>Income Per Transaction</th>
 </tr>
    </thead>
    <tbody>

`;
    for (const service of services) {
        template += `
        <tr>
    <td>${service.name}</td>
    <td>
    <div class="form-group">
  <input type="text"
    class="form-control" name="${service.id}" id="${service.id}" onchange="updateIncome()" >
</div>
    </td>
    <td id="${service.id}commission">${service.commission}</td>
    </tr>
        `
    }

    var endtemplate = `



    <tbody>
    </table>


    <div class="container text-center">
        <div>
            Income Per Day <br>
            <button type="button" class="btn btn-primary btn-lg " id="incomePerDay"> 0 </button>
        </div>
        <div>
            Income Per Day X 30 Days
            <br>
            <button type="button" class="btn btn-primary btn-lg " id="incomePerMonth"> 0 </button>

        </div>
    </div>

    `;
    template += endtemplate

    document.getElementById('root').innerHTML = template

}

createTable();
updateIncome();
