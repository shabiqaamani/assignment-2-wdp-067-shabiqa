function editForm() {
    var x = document.getElementById("formEdit");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function tampilkanData(){
    var x = document.getElementById("formEdit");
    if (x.style.display === "block"){
        document.getElementById("namaku2").value= document.getElementById("namaku").innerHTML;
        document.getElementById("myRole").value = document.getElementById("roleku").innerHTML; 
        document.getElementById("myAvailability").value = document.getElementById("availabilityku").innerHTML;
        document.getElementById("myAge").value = document.getElementById("umurku").innerHTML;
        document.getElementById("myLocation").value = document.getElementById("lokasiku").innerHTML;
        document.getElementById("myExperience").value = document.getElementById("pengalamanku").innerHTML;
        document.getElementById("myEmail").value = document.getElementById("emailku").innerHTML;
    }
   
}

function simpanForm(){
    // document.getElementById("myEmail").value = document.getElementById("emailku").innerHTML;
    
    var x = document.getElementById("formEdit");
    if (x.style.display === "block"){
        document.getElementById("namaku").innerHTML = document.getElementById("namaku2").value;
        document.getElementById("roleku").innerHTML = document.getElementById("myRole").value;
        document.getElementById("availabilityku").innerHTML = document.getElementById("myAvailability").value;
        document.getElementById("umurku").innerHTML = document.getElementById("myAge").value;
        document.getElementById("lokasiku").innerHTML = document.getElementById("myLocation").value;
        document.getElementById("pengalamanku").innerHTML = document.getElementById("myExperience").value;
        document.getElementById("emailku").innerHTML = document.getElementById("myEmail").value;
        x.style.display = "none";
    }
}

function confirmChange(){
    let result = confirm("Apakah anda yakin ingin mengubah data?");
    if (result === true){
        simpanForm()
        alert("Data telah Berhasil Diubah")
    }
}

function resetData(){
    var x = document.getElementById("formEdit");
    document.getElementById("namaku").innerHTML = "Shabiqa Amani";
    document.getElementById("roleku").innerHTML = "Front End Designer";
    document.getElementById("availabilityku").innerHTML = "Full Time";
    document.getElementById("umurku").innerHTML = "22";
    document.getElementById("lokasiku").innerHTML = "Depok, Indonesia";
    document.getElementById("pengalamanku").innerHTML = "3";
    document.getElementById("emailku").innerHTML = "Shabiqaamani@gmail.com";
    x.style.display = "none";
}
  