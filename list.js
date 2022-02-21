var list = [
    ["Gatos","Amelie", "Tony", "Diana", "Outros gatos de rua"],
    ["Cachorros", "Safadão", "nescau"],
    ["Homens Gostosos","Mayquinho"]
]

list.forEach(function (nome, i) {
    if(nome[0] == "Gatos"){
        console.log('Gatos', nome);
    }

    if(nome[0] == "Cachorros"){
        console.log('Cachorros', nome);
    }

    if(nome[0] == "Homens Gostosos"){
        console.log('Homens Gostosos', nome);
    }
    
})
