const URL = 'http://localhost:3000/characters'
fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (characters) {
        console.log(characters)

        for (i = 0; i < characters.length; i++) {
            body.innerHTML += `
            <section>
            <div class="sectionWrapper-2">
            <div class="secBlock-1">
            <img src="${characters[i].image}" class="characterImg" alt="character">
</div>
<div class="secBlock-2">
<p class="aboutDesc"><strong>${characters[i].characterName}</strong>${characters[i].characterDesc}</p>
            <p class="aboutDesc">${characters[i].characterHistory}</p>
            <p class="aboutDesc"><strong>Звание: </strong> ${characters[i].characterLevel}</p>
            <p class="aboutDesc"><strong>Национальность: </strong> ${characters[i].characterCountry}</p>
            <p class="aboutDesc"><strong>Возраст: </strong> ${characters[i].characterAge}</p>
            <p class="aboutDesc"><strong>Рост: </strong> ${characters[i].characterHeight}</p>
</div>
</div>
</section>
            `
        }

    })

const body = document.querySelector('.body')