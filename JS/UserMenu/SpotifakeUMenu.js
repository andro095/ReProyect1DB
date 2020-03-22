//Función para crear las opciones. F
const createOption = (x, y) => {
    const menublock = document.getElementById("menuoptions")
    const option = document.createElement('div')
    option.classList.add("option")
    const text = document.createElement('p')
    text.classList.add("text")
    text.append(x)
    option.append(text)
    menublock.append(option)
    option.addEventListener("click", () => {
        const myframe = document.getElementById("myFrame")
        myframe.src = "../MenuOptions/" + y
    })
}

//Añadimos la opción de Busqueda es es de cajón en todos los usuarios
createOption("Busqueda", "SpotifakeSearch.html")

//Función para saber que opciones pintarle al usuario según su rol y permiso #Función no terminada
const getOptions = () =>{

    //Array que recibe las opciones a las que el usuario puede acceder
    const options = []

    //Array que recibe los links a los cuales redirige cada dirección
    const urloptions = []

    //Pintamos los elementos en el menú
    options.forEach((elemento, indice, array) =>{
        createOption(elemento, urloptions[indice])
    })
    
}

//Función para saber el nombre del usuario. #Función no terminada
const getUser = () => {

    //Variable donde colocaremos el nombre del usuario que obtuvimos de los queries
    const user = ""
    
    const usertext = document.getElementById("user")
    usertext.append(user)
}

//Función para saber el tipo de subscripción del usuario. #Función no terminada
const getSubcription = () => {
    
    //Variable donde colocaremos el nombre del usuario que obtuvimos de los queries
    const subscription = ""
    
    const usersubscription = document.getElementById("typesub")
    usersubscription.append(subscription)
}

//Llamamos a la función que va obtener a nuestro usuario
// getUser()

//Llamamos a la función que va obtener el tipo de subscripción del usuario
// getSubcription()

//Llamamos a la función que va obtener las opciones del usuario
// getOptions()
