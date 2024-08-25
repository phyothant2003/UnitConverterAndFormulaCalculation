
        
    function select_option(){
        grr=window.formula;
    for(i=0;i<grr.length;i++){
        grrName=window.formula[i].value;
        window[grrName].style.display="none";
    }
    window[grr.value].style.display="";
    }

    function calculateCubeVolume(){
        var s=parseFloat(document.getElementById("s").value);
        var rr=document.getElementById("c1");
        var result=s*s*s;
        rr.innerHTML="Cube Volulme :"+result.toFixed(4)+" cube unit.";
        return true;
    } 

    function calculateCuboidVolume(){
        var l=parseFloat(document.getElementById("l").value);
        var b=parseFloat(document.getElementById("b").value);
        var h=parseFloat(document.getElementById("h").value);
        var rla=document.getElementById("c2");
        var result=l*b*h;
        rla.innerHTML="Cuboid Volume :"+result.toFixed(4)+" cube unit.";
        return true;
    }
   
    function calculateCylinderVolume(){
        var r2=parseFloat(document.getElementById("r2").value);
        var h2=parseFloat(document.getElementById("h2").value);
        var rta=document.getElementById("c3");
        var result=3.142*r2*r2*h2;
        rta.innerHTML="Cylinder Volume :"+result.toFixed(4)+" cube unit.";
        return true;
    }  
   
    function calculateConeVolume(){
        var r3=parseFloat(document.getElementById("r3").value);
        var h=parseFloat(document.getElementById("h3").value);
        var rtpa=document.getElementById("c4");
        var result=1/3*(3.142*r3*r3*h);
        rtpa.innerHTML="Cone Volume :"+result.toFixed(4)+" cube unit.";
        return true;
    }  
   
    function calculateSphereVolume(){
        var r4=parseFloat(document.getElementById("r4").value);
        var ca=document.getElementById("c5");
        var result=4/3*(3.142*r4*r4*r4);
       ca.innerHTML="Sphere Volume :"+result.toFixed(4)+" cube unit.";
        return true;
    }  
   
    function calculateHemiSphereVolume(){
        var r5=parseFloat(document.getElementById("r5").value);
        var cb=document.getElementById("c6");
        var result=2/3*(3.142*r5*r5*r5);
       cb.innerHTML="HemiSphere Volume :"+result.toFixed(4)+" cube unit.";
        return true;
    } 
   
    


    