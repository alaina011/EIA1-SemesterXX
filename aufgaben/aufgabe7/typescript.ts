namespace aufgabe7 { 

window.addEventListener('load', function() {


var deutschland: string = "Deutschland 2022:";
var frankreich: string = "Frankreich 2022:";
var italien: string = "Italien 2022:";
var spanien: string = "Spanien 2022:";


var einwohner_de: number = 83.2;
var einwohner_fr: number = 65.8;
var einwohner_it: number = 60.6;
var einwohner_sp: number = 46.6;


var de_2008: number = 82.2;
var fr_2008: number = 62.1;
var it_2008: number = 58.7;
var sp_2008: number = 45.7;


var multipilkator: number= 100;
var gesamt_eu: number = 447.1;
var eu_2008: number = 497.7;



function gesamtzahl( einwohner: number, gesamt_eu: number, multipilkator: number): number {
    var relativ: number = (einwohner/gesamt_eu*multipilkator);
    return relativ;
};

var result_de: number = gesamtzahl(einwohner_de, gesamt_eu, multipilkator);

var result_fr: number = gesamtzahl(einwohner_fr, gesamt_eu, multipilkator);

var result_it: number = gesamtzahl(einwohner_it, gesamt_eu, multipilkator);

var result_sp: number = gesamtzahl(einwohner_sp, gesamt_eu, multipilkator);




function wachstumsrate (einwohner: number, einwohner2008: number, multipilkator: number ) : number{
    var wachstum: number = (((einwohner-einwohner2008)/einwohner2008)*multipilkator);
    return wachstum;
};

var resultwachstum_de: number = wachstumsrate(einwohner_de, de_2008, multipilkator);

var resultwachstum_fr: number = wachstumsrate(einwohner_fr, fr_2008, multipilkator);

var resultwachstum_it: number = wachstumsrate(einwohner_it, it_2008, multipilkator);

var resultwachstum_sp: number = wachstumsrate(einwohner_sp, sp_2008, multipilkator);

var resultwachstum_eu: number = wachstumsrate(gesamt_eu, eu_2008, multipilkator);



function gesamtwachstumsrate (einwohner: number, einwohner2008: number): number {
    var wachstumgesamt: number = (einwohner-einwohner2008);
    return wachstumgesamt;

    
};

var resultwachstumgesamt_de: number = gesamtwachstumsrate(einwohner_de, de_2008);

var resultwachstumgesamt_fr: number = gesamtwachstumsrate(einwohner_fr, fr_2008);

var resultwachstumgesamt_it: number = gesamtwachstumsrate(einwohner_it, it_2008);

var resultwachstumgesamt_sp: number = gesamtwachstumsrate(einwohner_sp, sp_2008);

var resultwachstumgesamt_eu: number = gesamtwachstumsrate(gesamt_eu, eu_2008);





document.querySelector(".germany").addEventListener('click', de_klick );

function de_klick (){

    document.querySelector("#gesamtzahl").innerHTML = einwohner_de.toFixed(2) + "Mio";
    document.querySelector("#textgesamt").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Deutschland 2022";
    document.querySelector("#relativ").innerHTML= result_de.toFixed(2) + "%";
    document.querySelector("#wachstum").innerHTML= resultwachstum_de.toFixed(2) + "%";
    document.querySelector("#gesamtwachstum").innerHTML= resultwachstumgesamt_de.toFixed(2) + "Mio";
    document.querySelector(".hidden").setAttribute("style", "display:inline-block;");
    document.querySelector("h1").innerHTML="Einwohnerzahl in Deutschland";
    document.querySelector(".chart").setAttribute("style", "height: "+result_de+"%");
    

}


document.querySelector(".france").addEventListener('click', fr_klick );

function fr_klick () {
    document.querySelector("#gesamtzahl").innerHTML = einwohner_fr.toFixed(2) + "Mio";
    document.querySelector("#textgesamt").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Frankreich 2022";
    document.querySelector("#relativ").innerHTML= result_fr.toFixed(2) + "%";
    document.querySelector("#wachstum").innerHTML= resultwachstum_fr.toFixed(2) + "%";
    document.querySelector("#gesamtwachstum").innerHTML= resultwachstumgesamt_fr.toFixed(2) + "Mio";
    document.querySelector(".hidden").setAttribute("style", "display:inline-block;");
    document.querySelector("h1").innerHTML="Einwohnerzahl in Frankreich";
    document.querySelector(".chart").setAttribute("style", "height: "+result_fr+"%");
}


document.querySelector(".italy").addEventListener('click', it_klick );

function it_klick () {
    document.querySelector("#gesamtzahl").innerHTML = einwohner_it.toFixed(2) + "Mio";
    document.querySelector("#textgesamt").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Italien 2022";
    document.querySelector("#relativ").innerHTML= result_it.toFixed(2) + "%";
    document.querySelector("#wachstum").innerHTML= resultwachstum_it.toFixed(2) + "%";
    document.querySelector("#gesamtwachstum").innerHTML= resultwachstumgesamt_it.toFixed(2) + "Mio";
    document.querySelector(".hidden").setAttribute("style", "display:inline-block;");
    document.querySelector("h1").innerHTML="Einwohnerzahl in Italien";
    document.querySelector(".chart").setAttribute("style", "height: "+result_it+"%");
}

document.querySelector(".spain").addEventListener('click', sp_klick );

function sp_klick () {
    document.querySelector("#gesamtzahl").innerHTML = einwohner_sp.toFixed(2) + "Mio";
    document.querySelector("#textgesamt").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner in Spanien 2022";
    document.querySelector("#relativ").innerHTML= result_sp.toFixed(2) + "%";
    document.querySelector("#wachstum").innerHTML= resultwachstum_sp.toFixed(2) + "%";
    document.querySelector("#gesamtwachstum").innerHTML= resultwachstumgesamt_sp.toFixed(2) + "Mio";
    document.querySelector(".hidden").setAttribute("style", "display:inline-block;");
    document.querySelector("h1").innerHTML="Einwohnerzahl in Spanien";
    document.querySelector(".chart").setAttribute("style", "height: "+result_sp+"%");
    
}


document.querySelector(".stars").addEventListener('click', eu);

function eu() {
    document.querySelector("#gesamtzahl").innerHTML = gesamt_eu.toFixed(2) + "Mio";
    document.querySelector("#textgesamt").innerHTML="Gesamtzahl Einwohnerinnen und Einwohner 2022";
    document.querySelector(".hidden").setAttribute("style", "display:none;");
    document.querySelector("#wachstum").innerHTML= resultwachstum_eu.toFixed(2) + "%";
    document.querySelector("#gesamtwachstum").innerHTML= resultwachstumgesamt_eu.toFixed(2) + "Mio";
    document.querySelector("h1").innerHTML="Einwohnerzahl in der EU";
    document.querySelector(".chart").setAttribute("style", "height: 100%");
}



});
}