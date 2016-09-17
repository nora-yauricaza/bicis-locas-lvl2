# bicis-locas-lvl2

![](http://2.1m.yt/oLTRLLm.jpg)
CON EL SPAN NOS APARECE EL MENSAJE ("Ingresar su nombre"), TAMBIEN HACEMOS LA MISMA FUNCION 

PARA EL APELLIDO, EMAIL Y CONTRASEÑA

  function validateForm(){
  
  var nombre = document.getElementById("name").value;
  
  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
  
        var span = document.createElement("span");
        
        var referencia= document.getElementById("name");
        
        var padre=referencia.parentNode;
        
        padre.insertBefore(span,referencia);
        
        var texto = document.createTextNode("Ingresar su nombre");
        
        span.appendChild(texto);
        
    }
    
  }
