let vehicles = [];

function addVehicle() {

    let vehicleNo = document.getElementById("vehicleNo").value;
    let ownerName = document.getElementById("ownerName").value;

    if(vehicleNo === "" || ownerName === ""){
        alert("Fill all fields");
        return;
    }

    vehicles.push({
        vehicleNo,
        ownerName
    });

    document.getElementById("vehicleNo").value = "";
    document.getElementById("ownerName").value = "";

    displayVehicles();
}

function displayVehicles() {

    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    vehicles.forEach((vehicle,index)=>{

        tableBody.innerHTML += `
        <tr>
            <td>${vehicle.vehicleNo}</td>
            <td>${vehicle.ownerName}</td>
            <td>
                <button onclick="editVehicle(${index})">Edit</button>
                <button onclick="deleteVehicle(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function editVehicle(index){

    let newVehicleNo = prompt(
        "Enter New Vehicle Number",
        vehicles[index].vehicleNo
    );

    let newOwnerName = prompt(
        "Enter New Owner Name",
        vehicles[index].ownerName
    );

    if(newVehicleNo && newOwnerName){
        vehicles[index].vehicleNo = newVehicleNo;
        vehicles[index].ownerName = newOwnerName;
        displayVehicles();
    }
}

function deleteVehicle(index){
    vehicles.splice(index,1);
    displayVehicles();
}
