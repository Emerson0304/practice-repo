// Data
const pets = [
    {
      name: 'Noodles',
      age: 6,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Can increase dosage to 7 ml.'
        },
        {
          name: 'Laxitone',
          type: 'Paste',
          dosage: 'Dab',
          frequency: 'Daily',
          notes: 'Apply with food.'
        }
      ]
    },
    {
      name: 'Dezi',
      age: 14,
      species: 'cat',
      location: 'New Orleans, LA',
      treatments: [
        {
          name: 'Methimazole',
          type: 'Liquid',
          dosage: '5 ml',
          frequency: 'Daily',
          notes: 'Prescribed for kidney functioning.'
        },
        {
          name: 'Gabepentin',
          type: 'Liquid',
          dosage: '7 ml',
          frequency: 'As needed',
          notes: 'Give at least one hour before vet vists.'
        }
      ]
    },
    {
      name: 'Bart',
      age: 2,
      species: 'dog',
      location: 'Baton Rouge, LA',
      treatments: [
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season.'
        }
      ]
    },
    {
      name: 'Bernie',
      age: 5,
      species: 'dog',
      location: 'Baltimore, Maryland',
      treatments: [
        {
          name: 'Meloxicam',
          type: 'capsule',
          dosage: '15 mg',
          frequency: 'Daily',
          notes: 'Re-evaluate symptoms after 1 month of using medication.'
        },
        {
          name: 'Diphenhydramine',
          type: 'capsule',
          dosage: '50 mg',
          frequency: 'As needed',
          notes: 'Give as needed during allergy season'
        }
      ]
    }
  ];

// Problem #1 //
//Expected: To filter the pets array based on whether they have a treatment with a specified medication.
function filterByMedication(array, medication){
  //I created an arrow function as a callback function that takes a pet as its parameter and returns a boolean value.
 return array.filter(pet => pet.treatments.some(treatment => treatment.name === medication)).map(({ name }) => name)
/* .some() check if at least one element in the `pet.treatments` array meets a specified condition.
it also checks if there is at least one treatment in the `pet.treatments` 
array where the `treatment.name` is equal to the specified `medication`*/
};
// logging the result of invoking the filterByMedication function with the arguments pets and Gabepentin.
console.log(filterByMedication(pets, 'Gabepentin')); // [ 'Noodles', 'Desi' ]
  

// Problem #2 //
function speciesAndNumberOfMedications(array, species){
//Expected: filters through the pets array of a specific species that have more than one treatment. Returns an array of pets that meet the criteria.
return array.filter(pet => pet.species === species && pet.treatments.length > 1);

}
//logging the result of invoking the speciesAndNumberOfMedications function 
console.log(speciesAndNumberOfMedications(pets, 'cat'))// Noodles, Dezi

//  Problem #3 //
function getDailyFrequency(array){
  //Expected: To count the number of pets that have at least one treatment with a daily frequency.
  return array.filter(pet => pet.treatments.some(treatment => treatment.frequency === 'Daily' )).length;
}
console.log(getDailyFrequency(pets));// 3

// Problem #4 //
function createPetStrings(array){
//Expected: To create an array of strings, each string containing info about a pet in the pets array.
//pets age, name, species, etc.
return array.map(pet => `name: ${pet.name} - age: ${pet.age} - species: ${pet.species} - location: ${pet.location} 
- treatments: ${pet.treatments.length}`
);
}
console.log(createPetStrings(pets));

// Problem #5 //
function reduceSpecies(array, species){
/*Expected: Using the reduce method to accumulate an array of objects
containing name, species, and age of pets that match the specified species.*/
  return array.reduce((result, pet)=> {
    if(pet.species === species){
      result.push({name: pet.name, species: pet.species, age: pet.age});
    }
    return result;

  }, []);
}
console.log(reduceSpecies(pets, 'cat'));

// Problem #6 //
function namesAndMedications(array){
/*Expected: To create an array of objects, each containing a pet's
name and an array of medications they are undergoing */
result = array.map(pet =>{
  return {
    name: pet.name,
medication: pet.treatments.map(treatment => treatment.name)
  }
});
}
console.log(namesAndMedications(pets));

// Problem #7 //
function filterByDailyFrequency(array){
  /*Expected: To filter the pets array based on whether they have at
  least one treatment with a daily frequency, it returns an array of names of those pets.*/
return array.filter(({treatments}) => treatments.some(({frequency}) => frequency === 'Daily'))
.map(({name}) => name);
}

console.log(filterByDailyFrequency(pets));// [ <Noodles>, <Dezi>, <Bernie> ]

// Problem #8 // 
function createEntriesByLocation(array, location){
/*Expected: To filter pets based on whether their location
includes the specidied location. It creates an array of arrays, 
each containing the pet's name and species */
   return array
   .filter(pet => pet.location.includes(location))
   .map(pet => [pet.name, pet.species]);
}
console.log(createEntriesByLocation(pets, 'New Orleans'));// [['Noodles', 'cat'], ['Dezi', 'cat']];

