function remove(){
    var selectElement = document.getElementById("MembershipType").value;
    var selectMembership1 = document.getElementById("selectMembership1");
    var selectMembership2 = document.getElementById("selectMembership2");

    if (selectElement == "1") {
        selectMembership1.classList.remove("hidden");
        selectMembership2.classList.add("hidden");
    }
    if (selectElement == "2") {
        selectMembership2.classList.remove("hidden");
        selectMembership1.classList.add("hidden");
    }
    if (selectElement == "0") {
      selectMembership2.classList.add("hidden");
      selectMembership1.classList.add("hidden");
    }

}
