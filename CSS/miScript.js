document.getElementById("person").onclick = function() {
   
        document.getElementById("user_title").textContent="Mi Nombre es";
        document.getElementById("user_value").innerHTML = "Tracy Dixon";
};
document.getElementById("mail").onclick = function() {
        document.getElementById("user_title").textContent="Mi Correo electronico es";
        document.getElementById("user_value").innerHTML = "tracy.dixon@example.com";
};
document.getElementById("direccion").onclick = function() {
        document.getElementById("user_title").textContent="Mi Direccion es ";
        document.getElementById("user_value").innerHTML = "9603 Ash Dr";
};
document.getElementById("cumple").onclick = function() {
        document.getElementById("user_title").textContent="Fecha de Nacimiento";
        document.getElementById("user_value").innerHTML = "4/4/1965";
};
document.getElementById("cel").onclick = function() {
        document.getElementById("user_title").textContent="Mi Número de Telefono";
        document.getElementById("user_value").innerHTML = "(719) 246-9969";
};
document.getElementById("formacion").onclick=function FbotonOn() {
          var uno = document.getElementById('2h');
          if (uno.textContent == '') {

            document.getElementById("2h").textContent= " Educación";
            document.getElementById("1p").textContent="◆ Ago 2005 Escuela de Conducción Madrid, Licencia de";
            document.getElementById("2p").textContent="◆ Conducir Comercial Clase B";
            document.getElementById("3p").textContent="◆ Sep 2005 - Jun 2009 Escuela Secundaria Morris, Título de Secundaria";
            document.getElementById("4p").textContent="";
            document.getElementById("5p").textContent="";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
          else {
            uno.textContent = ''; 
            document.getElementById("2h").textContent= " Educación";
            document.getElementById("1p").textContent="◆ Ago 2005 Escuela de Conducción Madrid, Licencia de";
            document.getElementById("2p").textContent="◆ Conducir Comercial Clase B";
            document.getElementById("3p").textContent="◆ Sep 2005 - Jun 2009 Escuela Secundaria Morris, Título de Secundaria";
            document.getElementById("4p").textContent="";
            document.getElementById("5p").textContent="";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
        }
document.getElementById("perfil").onclick=function FbotonOn() {
          var uno = document.getElementById('2h');
         if (uno.textContent == '') {
            document.getElementById("2h").textContent= " MI Perfil";
            document.getElementById("1p").textContent="Conductor experimentado y fiable con amplia experiencia en el";
            document.getElementById("2p").textContent="transporte de mercancías y pasajeros. Dominio de las prácticas";
            document.getElementById("3p").textContent= "de conducción segura y de las leyes de tráfico. Logra un";
            document.getElementById("4p").textContent="historial de conducción limpio, así como un historial";
            document.getElementById("5p").textContent="profesional lleno de clientes y consumidores satisfechos.";
            document.getElementById("6p").textContent="Experiencia en el mantenimiento y en las reparaciones";
            document.getElementById("7p").textContent="menores de vehículos. Comprometido con la seguridad y el";
            document.getElementById("8p").textContent="éxito del transporte de mercancías, pasajeros, y vehículos.";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
          else {
            uno.textContent = ''; 
            document.getElementById("2h").textContent= " MI Perfil";
            document.getElementById("1p").textContent="Conductor experimentado y fiable con amplia experiencia en el";
            document.getElementById("2p").textContent="transporte de mercancías y pasajeros. Dominio de las prácticas";
            document.getElementById("3p").textContent= "de conducción segura y de las leyes de tráfico. Logra un";
            document.getElementById("4p").textContent="historial de conducción limpio, así como un historial";
            document.getElementById("5p").textContent="profesional lleno de clientes y consumidores satisfechos.";
            document.getElementById("6p").textContent="Experiencia en el mantenimiento y en las reparaciones";
            document.getElementById("7p").textContent="menores de vehículos. Comprometido con la seguridad y el";
            document.getElementById("8p").textContent="éxito del transporte de mercancías, pasajeros, y vehículos.";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
        } 
document.getElementById("experiencia").onclick=function FbotonOn() {
          var uno = document.getElementById('2h');
         if (uno.textContent == '') {
            document.getElementById("2h").textContent= " Experiencia";
            document.getElementById("1p").textContent="▶ 700 mil kilómetros sin accidentes.";
            document.getElementById("2p").textContent="▶ Galardonado con el premio al mejor piloto en 2011.";
            document.getElementById("3p").textContent="▶ Transporte seguro y eficiente de la carga a los destinos.";
            document.getElementById("4p").textContent="▶ Trabajo para lograr la máxima satisfacción del cliente";
            document.getElementById("5p").textContent="▶ Inspección y mantenimiento del vehículo antes de los viajes.";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
          else {
            uno.textContent = ''; 
            document.getElementById("2h").textContent= " Experiencia";
            document.getElementById("1p").textContent="▶ 700 mil kilómetros sin accidentes.";
            document.getElementById("2p").textContent="▶ Galardonado con el premio al mejor piloto en 2011.";
            document.getElementById("3p").textContent="▶ Transporte seguro y eficiente de la carga a los destinos.";
            document.getElementById("4p").textContent="▶ Trabajo para lograr la máxima satisfacción del cliente";
            document.getElementById("5p").textContent="▶ Inspección y mantenimiento del vehículo antes de los viajes.";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
        } 
        document.getElementById("habilidades").onclick=function FbotonOn() {
          var uno = document.getElementById('2h');
          if (uno.textContent == '') {

            document.getElementById("2h").textContent= " Habilidades";
            document.getElementById("1p").textContent="● Coordinación mano-ojo";
            document.getElementById("2p").textContent="● Técnicas deconducción segura";
            document.getElementById("3p").textContent="● Destreza manual";
            document.getElementById("4p").textContent="● Capacidad de lectura de mapas";
            document.getElementById("5p").textContent="● Servicio de atención al cliente";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
          else {
            uno.textContent = ''; 
            document.getElementById("2h").textContent= " Habilidades";
            document.getElementById("1p").textContent="● Coordinación mano-ojo";
            document.getElementById("2p").textContent="● Técnicas deconducción segura";
            document.getElementById("3p").textContent="● Destreza manual";
            document.getElementById("4p").textContent="● Capacidad de lectura de mapas";
            document.getElementById("5p").textContent="● Servicio de atención al cliente";
            document.getElementById("6p").textContent="";
            document.getElementById("7p").textContent="";
            document.getElementById("8p").textContent="";
            document.getElementById("9p").textContent="";
            document.getElementById("10p").textContent="";
          }
        }