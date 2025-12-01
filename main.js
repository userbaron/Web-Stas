const profile = {
    name: "Иван", 
    age: 30,
    contacts: {
        city: "Москва",
        street: "Ленина",
        house: 20,
        phone: "+79998887766"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    job: null
};

console.log(`Имя: ${profile.name}, возраст: ${profile.age}, город: ${profile.contacts.city}, улица: ${profile.contacts.street}, дом: ${profile.contacts.house}, номер телефона: ${profile.contacts.phone}, навыки: ${profile.skills}, работа: ${profile.job}`);

if (profile.job?.title){
    console.log("Работа найдена");
}
else{
    console.log("Работа не найдена");
}

function getFullAddress(user){
    const {city, street, house} = user.contacts;
    return `${city}, ${street}, ${house}`;
}

console.log(getFullAddress(profile));