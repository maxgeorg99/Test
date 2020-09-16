window.onload = function(){
    var $ = function(e){
        return document.querySelector(e);
    }
    
    var setColor = function(e, c){
        e.style.backgroundColor = c;
    }
  
    // Getting DOM objects
    // Mendapat Objek DOM
    var redLamp = $("#red");
    var yelLamp = $("#yellow");
    var greLamp = $("#green");
    var timerNum = $("#timer-num");
    
    // Color
    // Warna
    var green = "#00EE00";
    var yellow = "#DDDD00";
    var red = "#EE0000";
    var gDim = "#113311";
    var yDim = "#222211";
    var rDim = "#331111";
    
    var gOn = new isOn();
    var yOn = new isOn();
    var rOn = new isOn();
    
    function greenActive(){
            // Green Light Turn On
            // Lampu Hijau Menyala
            setColor(yelLamp, yDim);
            setColor(redLamp, rDim);
            setColor(greLamp, green);
            setTimeout(yellowActive, greTimer);a
    }
    function yellowActive(){
            // Yellow Light Turn On
            // Lampu Kuning Menyala
            setColor(greLamp, gDim);
            setColor(redLamp, rDim);
            setColor(yelLamp, yellow);
            setTimeout(redActive, yelTimer);
    }
    function redActive(){
            // Red Light Turn On
            // Lampu Merah Menyala
            setColor(yelLamp, yDim);
            setColor(greLamp, gDim);
            setColor(redLamp, red);
            setTimeout(greenActive, redTimer);
    }
}

var isOn = function(){
    this.on = false;
    this.setOn = function(b){
        this.on = b;
    }
    this.getOn = function(){
        return this.on;
    }
}
