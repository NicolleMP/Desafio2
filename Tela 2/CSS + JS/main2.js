const login = document.querySelector('.botao');
botao.onclick = (e) => {
    e.preventDefault();

    const Email = document.getElementById ("email").value;
    const Password = document.getElementById("Password").value;

    const email = localStorage.getItem("Email");
    const password = localStorage.getItem("Password");

    if(email == "" && password == ""){
        alert("Erro");
    } else {
        if(email == email && password == password){
            alert("Login feito com sucesso!");
        } else {
            alert("Email ou senha incorretos.");
        }
    
    }
}