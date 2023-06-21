
    var clase = document.querySelectorAll("h4");
    var titulo=document.querySelector("#titulo");
    let navSc= document.querySelector(".navbar");
	var nosotrosTexto = document.querySelector("#nosotros");
   var cabecera = document.querySelector("#cuerpo");
   var varones=document.querySelector("#varones");
   var mujeres=document.querySelector("#mujeres");
   var adolescente=document.querySelector("#adolescente");
   var matrimonios=document.querySelector("#matrimonios");
   var ninos= document.querySelector("#ninos");
   var menuCelulas=document.querySelector("#menuCelulas");
   
   var imgPuerta= document.querySelector("#imgPuerta");
   
   // función para cambiar color de letra según 
   //el tamaño de pantalla.
    
function cambio(){

  if (window.screen.width > 891){
      
    imgPuerta.style.height="450px";
	 
      for(let i=0; i<clase.length;i++){
          clase[i].style.color="white";
          clase[i].style.borderBottom="2px solid Grey";
      }
      
      
      //Evento scroll para cambiar el estilo de navbar.
      
      
         window.addEventListener("scroll",()=>{
         
         if(window.scrollY>200){
             
            navSc.classList.add("navScroll");
               for(let i=0; i<clase.length;i++){
          clase[i].style.color="white";
          clase[i].style.borderBottom="2px solid Grey";
      }
            
            titulo.style.color="white";
            
            
         }
else if(window.scrollY <200){
             
   for(let i=0; i<clase.length;i++){
         // clase[i].style.color="black";
          clase[i].style.borderBottom="2px solid Grey";
      }

      titulo.style.color="black";
             
             navSc.classList.remove("navScroll");
           
         }
     });


  
}else if(window.screen.width < 892){
    console.log(window.screen.width);
   window.addEventListener("scroll",()=>{
         
         if(window.scrollY>200){
             
            navSc.classList.add("navScroll");
               for(let i=0; i<clase.length;i++){
				//clase[0].style.marginTop="20px";  
				clase[i].style.marginLeft="15px";
          clase[i].style.color="black";
         menuCelulas.style.color="black";
		  
          //clase[i].style.borderBottom="2px solid Grey";
      }
            
            titulo.style.color="white";
           //titulo.style.marginTop="-15px";
            
         }
else if(window.scrollY <200){
             
   for(let i=0; i<clase.length;i++){
         clase[i].style.color="white";
         menuCelulas.style.color="white";
         // clase[i].style.borderBottom="2px solid Grey";
      }
      
      titulo.style.color="black";
             
             navSc.classList.remove("navScroll");
           
         }
     });
    
}
}
cambio();
function inicioPag(){
	cabecera.style="display:blok";
	varones.style="display:none";
    nosotrosTexto.style="display:none";
    mujeres.style="display:none";
    adolescente.style="display:none"
    matrimonios.style="display:none";
    ninos.style="display:none";
	window.location = '#cuerpo';
}

function celula(){
	     cabecera.style="display:blok";
		 varones.style="display:none";
		 nosotrosTexto.style="display:none";
    mujeres.style="display:none";
    adolescente.style="display:none"
    matrimonios.style="display:none";
    ninos.style="display:none";
          window.location = '#celula';
		  //nosotrosTexto.style="display:none";
}
  
function nosotros(){
	nosotrosTexto.style="display:blok";
	cabecera.style="display:none";
	varones.style="display:none";
   mujeres.style="display:none";
    adolescente.style="display:none"
    matrimonios.style="display:none";
    ninos.style="display:none";
	window.location='#nosotros';
	
}
function varonesF(){
	varones.style="display:blok";
	cabecera.style="display:none";
nosotrosTexto.style="display:none";
adolescente.style="display:none"
matrimonios.style="display:none";
mujeres.style="display:none";
ninos.style="display:none";
	window.location='#varones';
	
}

function mujeresF(){
  mujeres.style="display:blok"
	varones.style="display:none";
	cabecera.style="display:none";
nosotrosTexto.style="display:none";
	adolescente.style="display:none"
matrimonios.style="display:none";
ninos.style="display:none";
	window.location='#mujeres';
	
}
function adolescentesF(){
  adolescente.style="display:blok";
  mujeres.style="display:none";
	varones.style="display:none";
	cabecera.style="display:none";
nosotrosTexto.style="display:none";
matrimonios.style="display:none";
ninos.style="display:none";
	window.location='#adolescente';
	
}
function matrimoniosF(){
  matrimonios.style="display:blok";
  adolescente.style="display:none";
  mujeres.style="display:none";
	varones.style="display:none";
	cabecera.style="display:none";
nosotrosTexto.style="display:none";
ninos.style="display:none";
	window.location='#matrimonios';
	
}
function ninosF(){
  ninos.style="display:blok";
  matrimonios.style="display:none";
  adolescente.style="display:none";
  mujeres.style="display:none";
	varones.style="display:none";
	cabecera.style="display:none";
nosotrosTexto.style="display:none";
	window.location='#ninos';
	
}
function contactoF(){
  window.location="#pie";
  
}