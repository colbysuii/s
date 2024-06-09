function switchLanguage() {
    var currentLanguage = document.documentElement.lang;
    if (currentLanguage === 'en') {
        document.documentElement.lang = 'es';
        translateToSpanish();
    } else {
        document.documentElement.lang = 'en';
        translateToEnglish();
    }
}

function translateToSpanish() {
    document.getElementById('switchBtn').innerText = 'Cambiar Idioma';
    // Translate other elements to Spanish
    var titles = document.querySelectorAll('.recipe h2');
    var ingredients = document.querySelectorAll('.recipe strong');
    var instructions = document.querySelectorAll('.recipe p:nth-of-type(2)');
    var costs = document.querySelectorAll('.recipe p:nth-of-type(3)');

    for (var i = 0; i < titles.length; i++) {
        titles[i].innerText = 'Espaguetis a la Carbonara';
    }
    for (var j = 0; j < ingredients.length; j++) {
        ingredients[j].innerText = 'Ingredientes:';
    }
    for (var k = 0; k < instructions.length; k++) {
        instructions[k].innerText = 'Instrucciones:';
    }
    for (var l = 0; l < costs.length; l++) {
        costs[l].innerText = 'Costo: $8-12 para cuatro porciones';
    }
}

function translateToEnglish() {
    document.getElementById('switchBtn').innerText = 'Switch Language';
    // Translate other elements to English
    var titles = document.querySelectorAll('.recipe h2');
    var ingredients = document.querySelectorAll('.recipe strong');
    var instructions = document.querySelectorAll('.recipe p:nth-of-type(2)');
    var costs = document.querySelectorAll('.recipe p:nth-of-type(3)');

    for (var i = 0; i < titles.length; i++) {
        titles[i].innerText = titles[i].innerText.replace('Espaguetis a la Carbonara', 'Spaghetti Carbonara');
    }
    for (var j = 0; j < ingredients.length; j++) {
        ingredients[j].innerText = ingredients[j].innerText.replace('Ingredientes:', 'Ingredients:');
    }
    for (var k = 0; k < instructions.length; k++) {
        instructions[k].innerText = instructions[k].innerText.replace('Instrucciones:', 'Instructions:');
    }
    for (var l = 0; l < costs.length; l++) {
        costs[l].innerText = costs[l].innerText.replace('Costo: $8-12 para cuatro porciones', 'Cost: $8-12 for a serving for four');
    }
}
