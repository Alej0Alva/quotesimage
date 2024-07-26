const images = ['images/img_000.jpeg', 'images/img_001.jpeg', 'images/img_002.jpeg', 'images/img_003.jpeg', 'images/img_004.jpeg', 'images/img_005.jpeg', 
                'images/img_006.jpeg', 'images/img_007.jpeg', 'images/img_008.jpeg', 'images/img_009.jpg', 'images/img_010.jpg', 
                'images/img_011.jpg', 'images/img_012.jpg', 'images/img_013.jpg', 'images/img_014.jpg', 'images/img_015.jpg', 
                'images/img_016.jpg', 'images/img_017.jpg', 'images/img_018.jpg', 'images/img_019.jpg', 'images/img_020.jpg', 
                'images/img_021.jpg', 'images/img_022.jpg', 'images/img_023.jpg', 'images/img_024.jpg', 'images/img_025.jpg', 
                'images/img_026.jpg', 'images/img_027.jpg', 'images/img_028.jpg', 'images/img_029.jpg', 'images/img_030.jpg', 
                'images/img_031.jpg', 'images/img_032.jpg', 'images/img_033.jpg', 'images/img_034.jpg', 'images/img_035.jpg', 
                'images/img_036.jpg', 'images/img_037.jpg', 'images/img_038.jpg', 'images/img_039.jpg', 'images/img_040.jpg', 
                'images/img_041.jpg', 'images/img_042.jpg', 'images/img_043.jpg', 'images/img_044.jpg', 'images/img_045.jpg', 
                'images/img_046.jpg', 'images/img_047.jpg', 'images/img_048.jpg', 'images/img_049.jpg', 'images/img_050.jpg', 
                'images/img_051.jpg', 'images/img_052.jpg', 'images/img_053.jpg', 'images/img_054.jpg', 'images/img_055.jpg', 
                'images/img_056.jpg', 'images/img_057.jpg', 'images/img_058.jpg', 'images/img_059.jpg', 'images/img_060.jpg', 
                'images/img_061.jpg', 'images/img_062.jpg', 'images/img_063.jpg', 'images/img_064.jpg', 'images/img_065.jpg', 
                'images/img_066.jpg', 'images/img_067.jpg', 'images/img_068.jpg', 'images/img_069.jpg', 'images/img_070.jpg', 
                'images/img_071.jpg', 'images/img_072.jpg', 'images/img_073.jpg', 'images/img_074.jpg', 'images/img_075.jpg', 
                'images/img_076.jpg', 'images/img_077.jpg', 'images/img_078.jpg', 'images/img_079.jpg', 'images/img_080.jpg', 
                'images/img_081.jpg', 'images/img_082.jpg', 'images/img_083.jpg', 'images/img_084.jpg', 'images/img_085.jpg', 
                'images/img_086.jpg', 'images/img_087.jpg', 'images/img_088.jpg', 'images/img_089.jpg', 'images/img_090.jpg', 
                'images/img_091.jpg', 'images/img_092.jpg', 'images/img_093.jpg', 'images/img_094.jpg', 'images/img_095.jpg', 
                'images/img_096.jpg', 'images/img_097.jpg', 'images/img_098.jpg'
];
// Seleccionar una imagen al azar para mostrarla al cargar la página
let currentIndex = Math.floor(Math.random() * images.length); // Índice de la imagen actual

// Referencias a los elementos del DOM
const carouselImage = document.getElementById('carouselImage'); // Elemento de imagen del carrusel
const prevBtn = document.getElementById('prevBtn'); // Botón para imagen anterior
const nextBtn = document.getElementById('nextBtn'); // Botón para imagen siguiente

// Función para mostrar una imagen basada en el índice proporcionado
function showImage(index) {
    carouselImage.src = images[index];
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

// Función para mostrar una imagen aleatoria diferente
function nextImage() {
    let randomIndex;
    // Asegurarse de que la nueva imagen sea diferente a la actual
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    showImage(currentIndex);
}

// Agregar eventos de clic a los botones
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Mostrar imagen al azar al cargar la página
showImage(currentIndex);

setInterval(nextImage, 60000); // Cambia la imagen cada 60 segundos
