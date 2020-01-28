var Atrybut = {};
function Odcienie(){
  doClear( );
  var originalImage = document.getElementById("myCanvas1");
  
  var filteredImageCanvas = document.getElementById("myCanvas2");
  var filteredImageCanvas1 = document.getElementById("myCanvas3");
  var filteredImageCanvas2 = document.getElementById("myCanvas4");
  var filteredImageCanvas3 = document.getElementById("myCanvas5");
  var filteredImageCanvas4 = document.getElementById("myCanvas6");
  
  var filtrCzerwony = Atrybut["czerwien"];
  var filtrZielony= Atrybut["zielen"];
  var filtrNiebieski = Atrybut["niebieski"];
  var filtrTurkusowy = Atrybut["turkusowy"];
  var filtrFioletowy = Atrybut["fiolet"];
  
  Atrybut.filtrZdjecia(filteredImageCanvas, filtrCzerwony, originalImage);
  Atrybut.filtrZdjecia(filteredImageCanvas1, filtrZielony, originalImage);
  Atrybut.filtrZdjecia(filteredImageCanvas2, filtrNiebieski, originalImage);
  Atrybut.filtrZdjecia(filteredImageCanvas3, filtrTurkusowy, originalImage);
  Atrybut.filtrZdjecia(filteredImageCanvas4, filtrFioletowy, originalImage);
  
}

function progowanie(){
  doClear( );
  var zdjecieOrginalne = document.getElementById("myCanvas1");
  var zdjecieProgowane1 = document.getElementById("myCanvas2");
  var zdjecieProgowane2 = document.getElementById("myCanvas3");
  var zdjecieProgowane3 = document.getElementById("myCanvas4");
  var zdjecieProgowane4 = document.getElementById("myCanvas5");
  var zdjecieProgowane5 = document.getElementById("myCanvas6");

  var progowanie = Atrybut["progowanie"];
  var progowanie1 = Atrybut["progowanie1"];
  var progowanie2 = Atrybut["progowanie2"];    
  var progowanie3 = Atrybut["progowanie3"];
  var progowanie4 = Atrybut["progowanie4"];

  Atrybut.filtrZdjecia(zdjecieProgowane1, progowanie, zdjecieOrginalne);
  Atrybut.filtrZdjecia(zdjecieProgowane2, progowanie1, zdjecieOrginalne);
  Atrybut.filtrZdjecia(zdjecieProgowane3, progowanie2, zdjecieOrginalne);
  Atrybut.filtrZdjecia(zdjecieProgowane4, progowanie3, zdjecieOrginalne);
  Atrybut.filtrZdjecia(zdjecieProgowane5, progowanie4, zdjecieOrginalne);

}

function odwrotnosc(){
  doClear( );
  var zdjecieOrginalne = document.getElementById("myCanvas1");
  var zdjecieOdwrocone = document.getElementById("myCanvas2");
  var zdjecieSaturacja = document.getElementById("myCanvas3");
  var odwracanie = Atrybut["odwroc"];
  var saturacja = Atrybut["saturacja"];
  Atrybut.filtrZdjecia(zdjecieOdwrocone, odwracanie, zdjecieOrginalne);
  Atrybut.filtrZdjecia(zdjecieSaturacja, saturacja, zdjecieOrginalne);

}

function wzory(){
  doClear( );
  var zdjecieOrginalne = document.getElementById("myCanvas1");
  var filteredImageCanvas2 = document.getElementById("myCanvas2");
  var filteredImageCanvas3 = document.getElementById("myCanvas3");
  var filteredImageCanvas4 = document.getElementById("myCanvas4");
  var filteredImageCanvas5 = document.getElementById("myCanvas5");
  var filteredImageCanvas6 = document.getElementById("myCanvas6");

  var filtrA = Atrybut["filtrA"];
  var filtrB = Atrybut["filtrB"];
  var filtrC = Atrybut["filtrC"];
  var filtrD = Atrybut["filtrD"];
  var filtrE = Atrybut["filtrE"];

  Atrybut.filtrZdjecia(filteredImageCanvas2, filtrA, zdjecieOrginalne);
  Atrybut.filtrZdjecia(filteredImageCanvas3, filtrB, zdjecieOrginalne);
  Atrybut.filtrZdjecia(filteredImageCanvas4, filtrC, zdjecieOrginalne);
  Atrybut.filtrZdjecia(filteredImageCanvas5, filtrD, zdjecieOrginalne);
  Atrybut.filtrZdjecia(filteredImageCanvas6, filtrE, zdjecieOrginalne);
}


Atrybut.czerwien = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {
    d[i] = d[i]
    d[i+1] = 0
    d[i+2] = 0
  }

  return pixels
}

Atrybut.zielen = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {
    d[i] = 0
    d[i+2] = 0
  }

  return pixels
}

Atrybut.niebieski = function(pixels) {
  var d = pixels.data

  for (var i = 0; i < d.length; i += 4) {
    d[i] = 0
    d[i+1] = 0
  }

  return pixels
}

Atrybut.turkusowy = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 4) {
      d[i] = 0
      d[i] = 0
    }
  
    return pixels
  }
  
  Atrybut.fiolet = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 4){
      d[i+1] = 0
      d[i+1] = 0
      
    }
    return pixels
  }
  Atrybut.filtrA = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 5) {
      d[i+2] = 0
      
    }
    return pixels
  }

  Atrybut.filtrB = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 6 ){
      d[i] = d[i*2]
      d[i+2] = 0
      
    }
    return pixels
  }

  Atrybut.filtrC = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 7) {
     d[i] = d[i*3]
     d[i+1] = d[i]
  
    }
    return pixels
  }

  Atrybut.filtrD = function(pixels) {
    var d = pixels.data
    for (var i = 10; i < d.length; i += 7) {
    
      d[i] = d[i*4]
      d[i+1] = d[i*2]
      d[i+2]=d[i*4]
      d[i+3] = d[i*2]
    }
    
    return pixels
  }

  Atrybut.filtrE = function(pixels) {
    var d = pixels.data
  
    for (var i = 0; i < d.length; i += 6) {
    
     d[i] = d[i*0.10]
     d[i+1] = d[i*0.07]
     d[i*2] = d[i*0.30]
      
    }
    return pixels
  }

Atrybut.saturacja = function(pixels) {
  var level = 2.9,
    RW = 0.3086,
    RG = 0.6084,
    RB = 0.0820,
    RW0 = (1 - level) * RW + level,
    RW1 = (1 - level) * RW,
    RW2 = (1 - level) * RW,
    RG0 = (1 - level) * RG,
    RG1 = (1 - level) * RG + level,
    RG2 = (1 - level) * RG,
    RB0 = (1 - level) * RB,
    RB1 = (1 - level) * RB,
    RB2 = (1 - level) * RB + level

  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i]   = RW0*pixels.data[i] + RG0*pixels.data[i+1] + RB0*pixels.data[i+2]
    pixels.data[i+1] = RW1*pixels.data[i] + RG1*pixels.data[i+1] + RB1*pixels.data[i+2]
    pixels.data[i+2] = RW2*pixels.data[i] + RG2*pixels.data[i+1] + RB2*pixels.data[i+2]
  }

  return pixels
}

Atrybut.progowanie = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.2126*r + 0.7152*g + 0.0722*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}

Atrybut.progowanie1 = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.7152*r + 0.0722*g + 0.2126*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}

Atrybut.progowanie2 = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.0022*r + 0.2126*g + 0.7152*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}

Atrybut.progowanie3 = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.9288*r + 0.7874*g + 0.2848*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}

Atrybut.progowanie4 = function(pixels, args) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    var r = pixels.data[i],
      g = pixels.data[i+1],
      b = pixels.data[i+2]

    var v = 0.0052*r + 0.0722*g + 0.7126*b
    var thr = args || 128

    pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = v > thr ? 255 : 0
  }

  return pixels
}

Atrybut.zdjecie = function(img) {

  var pomocnicza = document.createElement('canvas');
  pomocnicza.width = img.width;
  pomocnicza.height = img.height;

  var podstaw = pomocnicza.getContext('2d');
      podstaw.drawImage(img, 0, 0);

  return podstaw.getImageData(0, 0, img.width, img.height);
};

Atrybut.drukuj = function(selector, idata) {

  selector.width = idata.width;
  selector.height = idata.height;

  var podstaw = selector.getContext('2d');
  podstaw.putImageData(idata, 0, 0);

};

Atrybut.filtrZdjecia = function(selector, filter, image) {

  var args = [this.zdjecie(image)];

  return this.drukuj(selector, filter.apply(null, args));
};

Atrybut.odwroc = function(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = 255 - pixels.data[i]
    pixels.data[i+1] = 255 - pixels.data[i+1]
    pixels.data[i+2] = 255 - pixels.data[i+2]
  }

  return pixels
}
