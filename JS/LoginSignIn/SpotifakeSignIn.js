//función para crear 
const createUser = () => {
    const user = document.getElementById("user").value
    if (validateUserAbility(user)) {
        // Obtenemos todos los campos donde el usuario regitro información
        const password = document.getElementById("pass").value
        const subcription_type = document.getElementById("subtype").options[subcription_type.selectedIndex].value
        const name = document.getElementById("name").value
        const lastname = document.getElementById("lastname").value
        const company = document.getElementById ("company").value
        const address = document.getElementById("address").value
        const postal_code = document.getElementById("postal").value
        const city = document.getElementById("city").value
        const state = document.getElementById("state").value
        const country = document.getElementById("country").value
        const phone = document.getElementById("phone").value
        const fax = document.getElementById("fax").value
        const email = document.getElementById("email").value

        //Apartir de acá está lo de creación del usuario en las bases

        //instrucción Para redirigir al menu
        // window.location.href = "../UserMenu/SpotifakeMenu.html"
    } else {
        alert("Usuario ya existente")
    }
}

//Función para validar la disponibilidad del usuario //Retorna un booleano, true si no está creado, false si ya lo está
const validateUserAbility = (x) => {

}