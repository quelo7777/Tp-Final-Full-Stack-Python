function validar(){
    
      
    
    //guardamos los campos en variables.
    var form = document.getElementById("form");
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var email = document.querySelector("#email").value;
    var telefono = document.querySelector("#telefono").value;
    var textarea = document.querySelector(".materialize-textarea").value;
    
    //guardamos en variables las expresiones regulares que podemos necesitar
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos
    var regexnombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // expresion regular para campos de solo texto
    var regextelefono= /^\d{7,14}$/; // 7 a 14 numeros.
    var regextextarea = /^[0-9a-zA-Z._.-À-ÿ\s]$/; // expresion regular para campos de solo texto
    

    var mensaje ="";
    var error =0;

    if(nombre ==""){
        alert('[ERROR] El campo Nombre debe tener un valor');
    return false;
    }else{
        if(!(regexnombre).test(nombre)){
            alert('[ERROR] El campo Nombre solo puede contener letras');
        return false;
        }
    }

    if(apellido ==""){
        alert('[ERROR] El campo Apellido debe tener un valor');
    return false;
    }else{
        if(!(regexnombre).test(apellido)){
            alert('[ERROR] El campo Apellido solo puede contener letras');
        return false;
        }
    }

    if(email ==""){
        alert('[ERROR] El campo Email debe tener un valor');
    return false;
    }else{
        if(!(regexemail).test(email)){
            alert('[ERROR] El campo Email solo puede contener un email valido');
        return false;
        }
    }
    if(telefono==""){
        alert('[ERROR] El campo Telefono debe tener un valor');
    return false;
    }else{
        if(!(regextelefono).test(telefono)){
            alert('[ERROR] El campo Telefono solo puede contener numeros telefonicos');
        return false;
        }
    }
    if(textarea==""){
        alert('[ERROR] El campo Mensaje debe tener un valor de');
    return false;
        
    }
    
    
    
    
    
    if (error>0){
        document.getElementById("mensaje").innerHTML=mensaje;
        return false;
    }
    else{
        return true;
    }

}