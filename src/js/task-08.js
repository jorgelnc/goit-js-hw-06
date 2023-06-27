// Escriba un script para controlar el formulario de acceso.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// El procesamiento de form.login-form debe ser por el evento submit.
// La página no debe recargarse cuando se envía el formulario.
// Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia diciendo que todos los espacios deben ser rellenados.
// Si el usuario ha rellenado todos los espacios y ha enviado el formulario, reúne los valores de los espacios en donde el nombre del espacio 
// es el nombre de la propiedad y el valor del espacio es la propiedad.Use la propiedad elements para acceder a los elementos del formulario.
// Muestre el objeto con los datos introducidos en la consola y borre los valores de los camposespacio del formulario usando el método reset.


const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", (e) => {
   e.preventDefault();
   let inputMail = e.target[0].value.trim();
   let inputPass = e.target[1].value.trim();
   if (inputMail === ("") || inputPass === ("")) {
      alert("Todos los espacios deben ser completados");
   } else {
      const results = {email : inputMail, password: inputPass};
       mainForm.reset();
      alert("Enviando Datos");
      console.log(results);
    }
});

