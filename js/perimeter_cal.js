
    function select_option(){
        grr=window.formula;
    for(i=0;i<grr.length;i++){
        grrName=window.formula[i].value;
        window[grrName].style.display="none";
    }
    window[grr.value].style.display="";
    }

    function calculateSquarePerimeter(){
        var l=parseFloat(document.getElementById("l5").value);
        var rp=document.getElementById("sp");
        var result=4*l;
        rp.innerHTML="Square Perimeter :"+result.toFixed(4)+" unit.";
        return true; 
    }
   
    function calculateRectanglePerimeter(){
        var l=parseFloat(document.getElementById("l6").value);
        var b=parseFloat(document.getElementById("b6").value);
        var rr1=document.getElementById("rp");
        var result=2*l*b;
        rr1.innerHTML="Rectangle Perimeter :"+result.toFixed(4)+" unit.";
        return true;
    } 
    function calculateTrianglePermeter(){
        var s1=parseFloat(document.getElementById("s1").value);
        var s2=parseFloat(document.getElementById("s2").value);
        var s3=parseFloat(document.getElementById("s3").value);
        var tp1=document.getElementById("tp");
        var result=s1+s2+s3;
        tp1.innerHTML="Triangle Perimeter :"+result.toFixed(4)+" unit.";
        return true;
    } 
    function calculateQuadrilateralPerimeter(){
        var s1=parseFloat(document.getElementById("s4").value);
        var s2=parseFloat(document.getElementById("s5").value);
        var s3=parseFloat(document.getElementById("s6").value);
        var s4=parseFloat(document.getElementById("s7").value);
        var qp1=document.getElementById("qp");
        var result=s1+s2+s3+s4;
        qp1.innerHTML="Quadrilateral Perimeter :"+result.toFixed(4)+" unit.";
        return true;
    } 
    function calculateCirclePerimeter(){
        var r=parseFloat(document.getElementById("r").value);
        var cp1=document.getElementById("cp");
        var result=2*3.142*r;
        cp1.innerHTML="Square Perimeter :"+result.toFixed(4)+" unit.";
        return true; 
    }
    function calculateParallelogramPermeter(){
        var w=parseFloat(document.getElementById("w").value);
        var h=parseFloat(document.getElementById("h").value);
        var pp1=document.getElementById("pp");
        var result=2*(w+h);
        pp1.innerHTML="Parallelogram Perimeter :"+result.toFixed(4)+" unit.";
        return true; 
    }
   
