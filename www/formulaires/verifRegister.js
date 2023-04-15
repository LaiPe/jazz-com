let registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(e) {
    //e.preventDefault();
    let input = [];
    input.push(document.getElementById('lastname'));
    input.push(document.getElementById('firstname'));
    //input.push(document.getElementById('birthdate'));

    input.push(document.getElementById('username'));
    input.push(document.getElementById('useremail'));
    input.push(document.getElementById('userpwd'));
    console.log(input);
    for (let i=0;i<5;i++){
        if (input[i].value.trim() == "") {
            let erreur = document.getElementById('erreur' + input[i].id);
            erreur.innerHTML = "Veuillez remplir ce champ.";
            erreur.style.color = 'red';
            e.preventDefault();
        } 
        else{
            let erreur = document.getElementById('erreur' + input[i].id);
            erreur.innerHTML = "";
        }
    }
});

/*
1. faire liste pour les inputs
2. let erreur[i] = document.getElementById('erreur' + input[i]);
*/