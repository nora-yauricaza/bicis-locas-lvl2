 function validateForm(){
    /* Escribe tú código aquí */
    var nombre = document.getElementById("name").value;
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar su nombre");
        span.appendChild(texto);
    }
    var apellido = document.getElementById("lastname").value;
    if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar su apellido");
        span.appendChild(texto);
    }
    var email = document.getElementById("input-email").value;
    if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar su email");
        span.appendChild(texto);
    }
    var password = document.getElementById("input-password").value;
    if( password == null || password.length == 0 || /^\s+$/.test(password) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresar Contraseña");
        span.appendChild(texto);
    }
}