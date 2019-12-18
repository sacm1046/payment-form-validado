let form = document.querySelector("form");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
    let enviar = false;
    
    let alerta=document.querySelector("#alerta");

    let card = document.querySelector("#card");
    if(card.value===""){
        card.classList.add("is-invalid");
        card.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        card.classList.remove("is-invalid");
        card.style.background="#fff";
        card.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let cvc = document.querySelector("#cvc");
    if(cvc.value===""){
        cvc.classList.add("is-invalid");
        cvc.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        cvc.classList.remove("is-invalid");
        cvc.style.background="#fff";
        cvc.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let amount = document.querySelector("#amount");
    if(amount.value===""){
        amount.classList.add("is-invalid");
        amount.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        amount.classList.remove("is-invalid");
        amount.style.background="#fff";
        amount.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let firstname = document.querySelector("#firstname");
    if(firstname.value===""){
        firstname.classList.add("is-invalid");
        firstname.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        firstname.classList.remove("is-invalid");
        firstname.style.background="#fff";
        firstname.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let lastname = document.querySelector("#lastname");
    if(lastname.value===""){
        lastname.classList.add("is-invalid");
        lastname.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        lastname.classList.remove("is-invalid");
        lastname.style.background="#fff";
        lastname.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let city = document.querySelector("#city");
    if(city.value===""){
        city.classList.add("is-invalid");
        city.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        city.classList.remove("is-invalid");
        city.style.background="#fff";
        city.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let state = document.querySelector("#state");
    if(state.value===""){
        state.classList.add("is-invalid");
        state.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        state.classList.remove("is-invalid");
        state.style.background="#fff";
        state.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let postalcode = document.querySelector("#postalcode");
    if(postalcode.value===""){
        postalcode.classList.add("is-invalid");
        postalcode.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        postalcode.classList.remove("is-invalid");
        postalcode.style.background="#fff";
        postalcode.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    let mc = document.querySelector("#checkmc");
    let visa = document.querySelector("#checkvisa");
    let diners = document.querySelector("#checkdiners");
    let amex = document.querySelector("#checkamex");
    if(mc.checked===false && visa.checked===false && diners.checked===false && amex.checked===false ){
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        alerta.classList.add("d-none");
        enviar = false;
    }

    let message = document.querySelector("#message");
    if(message.value===""){
        message.classList.add("is-invalid");
        message.style.background="#F8D7DA";
        alerta.classList.remove("d-none");
        enviar = false;
    }else{
        message.classList.remove("is-invalid");
        message.style.background="#fff";
        message.classList.add("is-valid");
        alerta.classList.add("d-none");
        enviar = false;
    }

    if(card.value!=="" && cvc.value!=="" && amount.value!=="" && firstname.value!=="" && lastname.value!=="" && 
    city.value!=="" && state.value!=="" && postalcode.value!=="" && message.value!=="" && mc.checked==true || 
    mc.checked==true || mc.checked==true || mc.checked==true)
    {enviar = true}

    if(enviar){
        form.submit();
    }
});