var deutschland: string = "Deutschland 2022:";
var frankreich: string = "Frankreich 2022:";
var italien: string = "Italien 2022:";
var spanien: string = "Spanien 2022:";


var einwohner_de: number = 83.2;
var einwohner_fr: number = 65.8;
var einwohner_it: number = 60.6;
var einwohner_sp: number = 46.6;


var deutschland2: string = "Deutschland:";
var frankreich2: string = "Frankreich:";
var italien2: string = "Italien:";
var spanien2: string = "Spanien:";

var de_2008: number = 82.2;
var fr_2008: number = 62.1;
var it_2008: number = 58.7;
var sp_2008: number = 45.7;


var multipilkator: number= 100;
var gesamt_eu: number = 447.1;




console.log ("Gesamtzahl Einwohnerinnen und Einwohner in" + " " + deutschland + einwohner_de + "Mio.");
console.log ("Relativ zur Gesamtanzahl in der Eu von" + " " + deutschland + einwohner_de/gesamt_eu*multipilkator + "%" );
console.log ("Wachstumsrate seit 2008 in" + " " + deutschland2 +(((einwohner_de-de_2008)/de_2008)*multipilkator) + "%" );
console.log ("Wachstumsrate gesamt zwischen 2006 und 2022 in" + " " + deutschland2 + (einwohner_de-de_2008) + "Mio." );



console.log ("Gesamtzahl Einwohnerinnen und Einwohner in" + " " + frankreich + einwohner_fr + "Mio.");
console.log ("Relativ zur Gesamtanzahl in der Eu von" + " " + frankreich + einwohner_fr/gesamt_eu*multipilkator + "%" );
console.log ("Wachstumsrate seit 2008 in" + " " + frankreich2 + (((einwohner_fr-fr_2008)/fr_2008)*multipilkator) + "%" );
console.log ("Wachstumsrate gesamt zwischen 2006 und 2022 in" + " " + frankreich2 + (einwohner_fr-fr_2008) + "Mio." );



console.log ("Gesamtzahl Einwohnerinnen und Einwohner in" + " " + italien + einwohner_it + "Mio.");
console.log ("Relativ zur Gesamtanzahl in der Eu von" + " " + italien + einwohner_it/gesamt_eu*multipilkator + "%" );
console.log ("Wachstumsrate seit 2008 in" + " " + italien2 + (((einwohner_it-it_2008)/it_2008)*multipilkator) + "%" );
console.log ("Wachstumsrate gesamt zwischen 2006 und 2022 in" + " " + italien2 + (einwohner_it-it_2008) + "Mio." );



console.log ("Gesamtzahl Einwohnerinnen und Einwohner in" + " " + spanien + einwohner_sp + "Mio.");
console.log ("Relativ zur Gesamtanzahl in der Eu von" + " " + spanien + einwohner_sp/gesamt_eu*multipilkator + "%" );
console.log ("Wachstumsrate seit 2008 in" + " " + spanien2 + (((einwohner_sp-sp_2008)/sp_2008)*multipilkator) + "%" );
console.log ("Wachstumsrate gesamt zwischen 2006 und 2022 in" + " " + spanien2 + (einwohner_sp-sp_2008) + "Mio." );
