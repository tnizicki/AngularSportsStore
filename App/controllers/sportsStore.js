angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope) {
    $scope.data = {
        products: [{ "name": "Kajak", "description": "Łódka przeznaczona dla jednej osoby", "category": "Sporty wodne", "price": 275, "id": "b384725a2ea8280e" },
            { "name": "Kamizelka ratunkowa", "description": "Chroni i dodaje uroku", "category": "Sporty wodne", "price": 48, "id": "007027d7228c6ae7" },
            { "name": "Piłka", "description": "Zatwierdzone przez FIFA rozmiar i waga", "category": "PiĹka noĹźna", "price": 19, "id": "460b761554b0f84a" },
            { "name": "Flagi naroĹźne", "description": "NadadzÄ twojemu boisku profesjonalny wyglÄd", "category": "PiĹka noĹźna", "price": 34, "id": "8dfb708e1ccc4922" },
            { "name": "Stadion", "description": "SkĹadany stadion na 35 000 osĂłb", "category": "PiĹka noĹźna", "price": 79500, "id": "bccda4b39e0689ad" },
            { "name": "Czapka", "description": "ZwiÄksza efektywnosc mĂłzgu o 75%", "category": "Szachy", "price": 16, "id": "995d05d0846aa8d8" },
            { "name": "Niestabilne krzesĹo", "description": "Zmniejsza szanse przeciwnika ", "category": "Szachy", "price": 29, "id": "6ea2cabec1e0d959" },
            { "name": "Ludzka szachownica", "description": "Przyjemna gra dla caĹej rodziny!", "category": "Szachy", "price": 75, "id": "86f8e5a49eb1d8a7" },
            { "name": "BĹyszczÄcy krĂłl", "description": "Pokryty zĹotem i wysadzany diamentami krĂłl", "category": "Szachy", "price": 1200, "id": "d9269513520c5b52" },
            { "name": "Kinia", "description": "Stara kotka przeznaczona na miÄso", "category": "Durne sny", "price": 1700, "id": "5472f92fecf46b91" },
            { "name": "Ĺťabcia", "description": "MĹodsza kotka przeznaczona na miÄso", "category": "Durne sny", "price": 2000, "id": "04eb3c3c0bc42b7d" },
            { "name": "Ares", "description": "On nie byĹ przeznaczony na miÄso", "category": "Durne sny", "price": 3000, "id": "9d14eb7c980dca30" },
            { "name": "Koliberek", "description": "Ĺťadnego miÄsa to by z niego nie byĹo", "category": "Durne sny", "price": 500000000, "id": "b3978e06a7aeb87d" },
            { "name": "Najstarszy", "description": "Zajebista ksiÄĹźka?", "category": "Christopher Paolini", "price": 36, "id": "d992904b9cf1386b" },
            { "name": "Dziedzictwo", "description": "Zajebistej ksiÄĹźki czesc 2", "category": "Christopher Paolini", "price": 39, "id": "ce6a9eb09737f8d1" },
            { "name": "Brisinger", "description": "Zajebistej ksiÄĹźki czesc 3", "category": "Christopher Paolini", "price": 39, "id": "e0b664ad15ff9842" },
            { "name": "Without you", "description": "Singiel ", "category": "Mariah Carey", "price": 15, "id": "f3f5c5ce77a0f9cd" },
            { "name": "Hero", "description": "Singiel 2", "category": "Mariah Carey", "price": 12, "id": "f5293dd1b0c68855" },
            { "name": "I want to know what love is", "description": "Singiel 3", "category": "Mariah Carey", "price": 10, "id": "29cef40a7a9ea93b" },
            { "name": "I'll be there", "description": "Singiel 4", "category": "Mariah Carey", "price": 8, "id": "d7571227c1fa0838" }]
    };
});