var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paletaColores = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var pintar;
generaPaletaColores();
generaGrillaPixeles();


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual    
    var indicador = document.getElementById('indicador-de-color');
    indicador.style.backgroundColor = colorActual;
  })
);

function generaPaletaColores (){
  for (i=0; i<nombreColores.length; i++){
  var color = document.createElement('div');
  color.style.backgroundColor = nombreColores[i];
  color.className='color-paleta';
  paletaColores.appendChild(color);
  }
}

function generaGrillaPixeles (){
  for (i=0; i<=1750; i++) {
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}


paletaColores.addEventListener('click', (e) => {
  var indicador = document.getElementById('indicador-de-color');
  var color = e.target;
  indicador.style.backgroundColor = color.style.backgroundColor;
});

grilla.addEventListener('click', (e) =>{
  var colorGrilla = e.target;
  var indicador = document.getElementById('indicador-de-color');
  colorGrilla.style.backgroundColor = indicador.style.backgroundColor;
});

grilla.addEventListener('mousedown', (e) => {
  pintar = true;
  console.log(pintar);
});

grilla.addEventListener('mouseup', (e) => {
  pintar=false;
  console.log(pintar);
});


  
grilla.addEventListener('mouseover', (e) => {
  if (pintar == true) {
    var colorGrilla = e.target;
    var indicador = document.getElementById('indicador-de-color');
    colorGrilla.style.backgroundColor = indicador.style.backgroundColor;
  }
  else {
    var colorGrilla = e.target;
    colorGrilla.style.backgroundColor ='';
  }
});
  

