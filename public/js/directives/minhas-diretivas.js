angular.module('minhasDiretivas', []).directive("meuPainel", function(){

    var ddo = {}; // Criando objeto
    ddo.restrict = "AE"; // Restringindo a diretiva para Atributos e Elementos
    ddo.transclude = true; // Posibilitando a inclusão de filhos dentro da diretiva

    ddo.scope = {
        titulo: "@"
    };

    ddo.templateUrl = "js/directives/meu-painel.html";

    return ddo; // retorna o ddo
});