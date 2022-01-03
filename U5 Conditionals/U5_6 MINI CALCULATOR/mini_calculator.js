// RECTANGLE AREA CODE
let elRectLength = document.getElementById ("rect-length")
let elRectWidth = document.getElementById ( "rect-Width")
let btnCalcRectArea= document.getElementById ("Calc rect-Area")
let elRectArea= document.getElementById ("rect-Area")

btnCalcRectArea. onclick = function () 
{
let rectLength =  elRectLength.value;
let rectWidth =  elRectWidth.value;
let rectarea =  rectLength * rectWidth;
elRectArea.value = rectarea;
}

// SPHERE VOLUME CODE
let elSphereRadius = document.getElementById("Sphere-Radius")
let btnCalcSphereVol =  document.getElementById("Calc sphere-Volume")
let elSphereVol = document.getElementById("Sphere-Volume")

btnCalcSphereVol. onclick = function ()
{
let SphereRadius = elSphereRadius.value;
let SphereVol = 4/3 * Math.PI * SphereRadius ** 3;
elSphereVol.value = SphereVol;
}

// Circle AREA CODE
let elCircleRadius = document.getElementById("Circle-Radius")
let btnCalcCircleArea = document.getElementById("Calc Circle-Area")
let elCircleArea = document.getElementById("Circle Area")
 
 btnCalcCircleArea.onclick = function ()
{
let CircleRadius = elCircleRadius.value;
let CircleArea = Math.PI * CircleRadius **2;
elCircleArea.value = CircleArea;
}

// CONE VOLUME CODE

let elConeHeight = document.getElementById("cone-height")
let elConeRadius = document.getElementById("cone-radius")
let btnCalcConeVolume = document.getElementById("Calc cone-volume")
let elConeVolume = document.getElementById("cone-volume")
 btnCalcConeVolume . onclick = function()
 {
     let ConeHeight = elConeHeight.value;
     let ConeRadius = elConeRadius.value;
     let ConeVolume = 1/3 * Math.PI * ConeRadius ** 2 * ConeHeight;
     let ConeVolumeFinal = ConeVolume.toFixed (3);
     elConeVolume.value = ConeVolumeFinal;
 }
      
 // RECTANGLUAR PRISM VOLUME CODE
 let elPrismHeight  = document.getElementById  ("prism-height")
 let elPrismWidth = document.getElementById   ("prism-width")
 let elPrismLength = document.getElementById  ("prism-length")
 let btnCalcPrismVolume = document.getElementById ("Calc prism-volume")
 let elPrismVolume = document.getElementById ("prism-volume")
 btnCalcPrismVolume.onclick = function()
  {
      let PrismHeight = elPrismHeight.value;
      let PrismLength = elPrismLength.value;
      let PrismWidth =  elPrismWidth.value;
      let PrismVolume = PrismHeight * PrismLength * PrismWidth;
       elPrismVolume.value = PrismVolume;
  }

// QUADRATIC EQUATION SOLUTIONS CODE 
let elA = document.getElementById  ("a value")
let elB = document.getElementById  ("b value")
let elC = document.getElementById ("c value")
let btnCalcQuadraticSolutions = document.getElementById ("calcQuadratic-Solutions")
let elQuadraticSolution1 = document.getElementById ("quadratic solution1")
let elQuadraticSolution2 = document.getElementById ("quadratic solution2")

btnCalcQuadraticSolutions.onclick = function()
  {
      let a = elA.value;
      let b = elB.value;
      let c = elC.value;
      let discriminant = (b ** 2 - 4 * a * c);
      alert ("Discrminant value of b^2-4ac = "+discriminant+" ");

      if (discriminant > 0)
      {
         let QuadraticSolution1 = (-b + Math.sqrt (discriminant)) / (2 * a);
         let QuadraticSolution2 = (-b - Math.sqrt (discriminant)) / (2 * a);
           QuadraticSolution1final = QuadraticSolution1.toFixed(3);
           QuadraticSolution2final=  QuadraticSolution2. toFixed (3);
       alert ("The two real solutions for this quadratic equation are "+QuadraticSolution1final+" OR "+QuadraticSolution2final+". ");
       
       elQuadraticSolution1.value =QuadraticSolution1final;
         elQuadraticSolution2.value =QuadraticSolution2final;
       alert ("Refresh the website window for the next quadratic equation solution.");   
      }
       
 
      else if (discriminant == 0)
      {
        alert ("Only 1 real solution can be obtained.");
        
        let QuadraticSolution1 = (-b / (2 * a));
        let QuadraticSolution2 = 0;
        let QuadraticSolution1final = QuadraticSolution1.toFixed(3);
        alert ("The one real solution for this quadratic equation is "+QuadraticSolution1final+". ");
        elQuadraticSolution1.value = QuadraticSolution1final;
        elQuadraticSolution2.value = QuadraticSolution2final;
        alert ("Refresh the website window for the next quadratic equation solution.");
      }


     else { 
        alert ("No real solutions can be obtained for this quadratic equation.");
      alert ("Refresh the website window for the next quadratic equation solution.");
         }
  
   }      
