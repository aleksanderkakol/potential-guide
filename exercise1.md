(Opcjonalnie: TypeScript) Utwórz następujące interfejsy:
- Programmer (pola: name(string), framework(string), experience(number), available(boolean)),
- UniqueProgrammer (pola jak w Programmer i dodatkowo id(string)),
- ProgrammerFilter (pole: predicateFn (funkcja przyjmująca jako parametr obiekt typu Programmer i zwracająca wartość typu boolean)).

Zadanie: Utwórz klasę RecruitmentAgency, która przechowuję listę dostępnych programistów i udostępnia interfejs do manipulacji tą listą.
Wymagania dotyczące klasy:
- prywatne pole do przechowywania listy programistów,

- klasa w konstruktorze przyjmuje tablicę obiektów typu Programmer (domyślną wartością ma być pusta tablica),
- w konstruktorze należy utworzyć listę programistów i przypisać ją do prywatnego pola,
- (opcjonalnie) klucze w liście programistów mają być generowane automatycznie i być kolejnymi liczbami naturalnymi,

- metoda addProgrammer ma w parametrze otrzymać obiekt i dodać go do listy dostępnym programistów,
- metoda updateProgrammer ma w parametrze otrzymać obiekt i nadpisać obiekt z listy dostępnych programistów pod danym kluczem,
- metoda deleteProgrammer ma w parametrze otrzymać obiekt i usunąć go z listy dostępnych programistów,
- metoda getAllProgrammers ma zwrócić tablicę obiektów na podstawie listy dostępnych programistów,
- metoda getFilteredProgrammers ma zwrócić tablicę obiektów typu UniqueProgrammer które odpowiadają kryteriom przekazanym w postaci tablicy obiektów typu ProgrammerFilter,
- metoda getShowcase ma zwrócić powitalny tekst z listą imion dostępnych programistów (każde imię ma znaleźć się w nowej linii.

Dodatkowo punktowane będą:
- wykorzystanie TypeScript i funkcjonalności wprowadzonych w ES6+,
- zastosowanie 'immutable update pattern' do zarządzania listą dostępnych programistów,
- deklaratywny kod (wykorzystanie programowania funkcyjnego),
- poprawne formatowanie kodu.

W pliku random-data.json (dostępny pod adresem: https://files.gwo.pl/custom/random-data.json), znajdziesz przykładowe dane programistów (do wykorzstania w celu sprawdzenia poprawności działania kodu).

***********************************************************************************************************************
Benchmark code: 
```
const programmers = (dane z pliku random-data.json, należy pobrać dynamicznie z https://files.gwo.pl/custom/random-data.json)

const additionalProgrammer = {
    name: 'Alan',
    framework: 'Ember',
    experience: 10,
    available: true
};

const agency = new RecruitmentAgency(programmers);
console.log('Agency before adding programmer\n', {...agency});

agency.addProgrammer(additionalProgrammer);
console.log('Agency after adding programmer\n', {...agency});

let allProgrammers = agency.getAllProgrammers();
console.log('All programmers\n', allProgrammers);

agency.deleteProgrammer(allProgrammers[0]);
console.log('All programmers after removing first programmer', agency.getAllProgrammers());

allProgrammers = agency.getAllProgrammers();
agency.updateProgrammer({...allProgrammers[0], name: 'Johny'});
console.log('All programmers after updating first programmer', agency.getAllProgrammers());

const filters = [
	{predicateFn: programmer => programmer.available},
    {predicateFn: programmer => programmer.experience > 2},
    {predicateFn: programmer => programmer.framework === 'Angular'}
];

console.log('Filtered programmers\n', agency.getFilteredProgrammers(filters));
```

Przykładowy wynik działania powyższego kodu benchmarkowego w pliku benchmark.png
