const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const part4 = document.getElementById('part4');
const video = document.getElementById('video');

const imageSets = {
    front: ['./img/index/essaiFullLand.png'],
    back: ['./img/index/back4.png'],
    backLight: ['./img/index/backLight4.png'],
    frontLight: ['./img/index/frontLight4.png'],
    interiorLight: ['./img/index/interiorLight4.png'],
    interiorDark: ['./img/index/interiorDark4.png'],
    interiorSide: ['./img/index/interiorSide.jpg'],
    side: ['./img/index/side4.png']
};

let currentImages = imageSets.front;

function updateBackgroundImages(images) {
    part1.style.backgroundImage = `url(${images[0]})`;
    part2.style.backgroundImage = `url(${images[0]})`;
    part3.style.backgroundImage = `url(${images[0]})`;
    part4.style.backgroundImage = `url(${images[0]})`;
}


document.getElementById('home').addEventListener('click', () => {
    video.style.display = "block"
});

function toggleAnimationAndChangeImages(images) {
    video.style.display = "none"
    part1.classList.remove('animPart1');
    part2.classList.remove('animPart2');
    part3.classList.remove('animPart3');
    part4.classList.remove('animPart4');
    
    // Utilisation d'un setTimeout pour déclencher l'animation après une petite pause
    setTimeout(() => {
        updateBackgroundImages(images);
        
        // Utilisation d'un setTimeout pour ajouter la classe d'animation avec fondu
        setTimeout(() => {
            part1.classList.add('animPart1');
            part2.classList.add('animPart2');
            part3.classList.add('animPart3');
            part4.classList.add('animPart4');
        }, 10);
    }, 10);
}

// Génération des gestionnaires d'événements pour chaque bouton
for (const key in imageSets) {
    if (imageSets.hasOwnProperty(key)) {
        const button = document.getElementById(key);
        button.addEventListener('click', () => {
            toggleAnimationAndChangeImages(imageSets[key]);
        });
    }
}
