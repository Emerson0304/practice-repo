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
function filterByMedication(array, medication){
 // if you return a value for this function you would then have console log the result 
 //of invoking the function.
 return array.filter()
}
console.log(filterByMedication(pets, 'Gabapentin'))
  


// Problem #2 //
function speciesAndNumberOfMedications(array, species){


}
//console.log(speciesAndNumberOfMedications(pets, 'cat' ))

// Problem #3 //
function getDailyFrequency(array){

}

// Problem #4 //
function createStrings(array){

}

// Problem #5 //
function reduceSpecies(array, species){

}

// Problem #6 //
function namesAndMedications(array){

}

// Problem #7 //
function filterByDailyFrequency(array){

}

// Problem #8 // 
function createEntriesByLocation(array, location){
return array
.filter(pet => pet.location.includes(location));
}
console.log(createEntriesByLocation(pets, 'New Orleans'));

