
var header= document.getElementById("header");
            var ms= document.getElementById("Scorpio");
            var m3= document.getElementById("Toyota");
            var mx= document.getElementById("Bmw");
            var my= document.getElementById("Thar");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/128413/scorpio-classic-exterior-right-front-three-quarter-45.jpeg?isig=0&q=80)";
                model.innerHTML="SCORPIO";
                mph.innerHTML="11s";
                speed.innerHTML="170 km/h";
                range.innerHTML="6500 km";
            
            }            

            m3.onclick=function(){
                header.style.backgroundImage="url(https://i.pinimg.com/originals/16/9f/97/169f975f74c1c95aea62e97505f174f0.jpg)";
                model.innerHTML="TOYOTA";
                mph.innerHTML="11.2s";
                speed.innerHTML="200 km/h";
                range.innerHTML="6200 km";
            }

            mx.onclick=function(){
                header.style.backgroundImage="url(https://wallpapers.com/images/featured/bmw-d942a3zxd8i3uqc8.jpg)";
                model.innerHTML="BMW";
                mph.innerHTML="2.5s";
                speed.innerHTML="250 km/h";
                range.innerHTML="7000 km";
            }

            my.onclick=function(){
                header.style.backgroundImage="url(https://wallpapers.com/images/featured/mahindra-thar-2021-bkshxu7y8dibj131.jpg)";
                model.innerHTML="THAR";
                mph.innerHTML="3.3s";
                speed.innerHTML="155 km/h";
                range.innerHTML="6000 km";
            }