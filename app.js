const programmers = 'https://files.gwo.pl/custom/random-data.json';

const additionalProgrammer = {
    name: 'Alan',
    framework: 'Ember',
    experience: 10,
    available: true
};

class RecruitmentAgency {
    constructor(url) {

        this.allProgrammers = [];

        fetch(url)
            .then(resp => resp.json())
            .then(resp => resp.map(e => {
                return this.allProgrammers.push(e);
            }));


    }


    addProgrammer(add) {

        return this.allProgrammers = [...this.allProgrammers, add];

    }

    getAllProgrammers() {

        return this.allProgrammers;
    }

    // deleteProgrammer(){
    //     return console.log('deleteprogrammer');
    // }
    //
    // updateProgrammer(){
    //     return console.log('updprogrammer');
    // }
    //
    // getFilteredProgrammers(filter){
    //     return console.log(filter)
    // }

}

const agency = new RecruitmentAgency(programmers);
console.log('Agency before adding programmer\n', {...agency});
//
agency.addProgrammer(additionalProgrammer);
console.log('Agency after adding programmer\n', {...agency});
//
let allProgrammers = agency.getAllProgrammers();
console.log('All programmers\n', allProgrammers);
//
// agency.deleteProgrammer(allProgrammers[0]);
// console.log('All programmers after removing first programmer', agency.getAllProgrammers());
//
// allProgrammers = agency.getAllProgrammers();
// agency.updateProgrammer({...allProgrammers[0], name: 'Johny'});
// console.log('All programmers after updating first programmer', agency.getAllProgrammers());
//
//
// const filters = [
//     {predicateFn: programmer => programmer.available},
//     {predicateFn: programmer => programmer.experience > 2},
//     {predicateFn: programmer => programmer.framework === 'Angular'}
// ];


// console.log('Filtered programmers\n', agency.getFilteredProgrammers(filters));

