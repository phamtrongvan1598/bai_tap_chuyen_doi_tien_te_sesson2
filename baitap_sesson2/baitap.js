

function input1(){


        let sotien = document.getElementById("sotien").value;
        sotien = parseInt(sotien)
        let nguon = document.getElementById("nguon").value;
        let dich = document.getElementById("dich").value;
        let result;
        if(nguon==="VND"&& dich==="USD") {result = sotien/23000};
        if (nguon==="USD"&& dich==="VND") {result= sotien*23000};
        document.getElementById("result").innerHTML = result;
    }
