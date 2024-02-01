function starClasification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasifier= ml5.soundClassifier('https://storage.googleapis.com/tm-model/vMZUZK61N/model.json',modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Oreja') 
    img1 = document.getElementById('Perro')
    img2 = document.getElementById('Gato')

    if (results[0].label == "Ruido de fondo") {
      img.src = 'OIP (4).jpeg';
      img1.src = 'OIP(3).jpg';
      img2.src = '3b112c056a8658954c4e3c1eecc2549b.png';
    } else if (results[0].label == "Gato") {
      img.src = 'OIP (4).jpeg';
      img1.src = 'OIP(3).jpg';
      img2.src = '3b112c056a8658954c4e3c1eecc2549b.png';
    } else if (results[0].label == "Perro") {
        img.src = 'OIP (4).jpeg';
        img1.src = 'OIP(3).jpg';
        img2.src = '3b112c056a8658954c4e3c1eecc2549b.png';
    }else{
      img.src = 'OIP (4).jpeg';
      img1.src = 'OIP(3).jpg';
      img2.src = '3b112c056a8658954c4e3c1eecc2549b.png';
    
    }
  }
}