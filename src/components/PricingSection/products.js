const products = [
  {
    item: "Sladoled",
    amount: "Kugla",
    price: "60.00",
  },
  {
    item: "Sladoled",
    amount: "Porcija",
    price: "300.00",
  },
  {
    item: "Sladoled",
    amount: "kg",
    price: "1200.00",
  },
  {
    item: "Sitni Kolači",
    amount: "kg",
    price: "1000.00",
  },
  {
    item: "Baklava",
    amount: "Komad",
    price: "150.00",
  },
  {
    item: "Krempita",
    amount: "Komad",
    price: "170.00",
  },
  {
    item: "Išler",
    amount: "Komad",
    price: "150.00",
  },
  {
    item: "Indijaner",
    amount: "Komad",
    price: "150.00",
  },
  {
    item: "Torta Parče",
    amount: "Komad",
    price: "220.00",
  },
  {
    item: "Torta svečana",
    amount: "kg",
    price: "1350.00",
  },
  {
    item: "Kornet Keks",
    amount: "Komad",
    price: "35.00",
  },
  {
    item: "Kornet Slatki",
    amount: "Komad",
    price: "15.00",
  },
  {
    item: "Limunada",
    amount: "0,3 l",
    price: "110.00",
  },
  {
    item: "Kesten Pire",
    amount: "Porcija",
    price: "190.00",
  },
  {
    item: "Šlag",
    amount: "Kugla",
    price: "40.00",
  },
  {
    item: "Paja Patak Kup",
    amount: "Komad",
    price: "300.00",
  },
  {
    item: "Džeri Kup",
    amount: "Komad",
    price: "300.00",
  },
  {
    item: "Pinokio Kup",
    amount: "Komad",
    price: "300.00",
  },
  {
    item: "Magični Kup",
    amount: "Komad",
    price: "300.00",
  },
  {
    item: "Arabeska Kup",
    amount: "Komad",
    price: "320.00",
  },
  {
    item: "Karamela Kup",
    amount: "Komad",
    price: "320.00",
  },
  {
    item: "Banana Kup",
    amount: "Komad",
    price: "320.00",
  },
  {
    item: "Galija Kup",
    amount: "Komad",
    price: "320.00",
  },
  {
    item: "Orhideja",
    amount: "Komad",
    price: "295.00",
  },
  {
    item: "Sitni Cvet",
    amount: "Komad",
    price: "35.00",
  },
  {
    item: "Ruza 1",
    amount: "Komad",
    price: "125.00",
  },
  {
    item: "Ruza 2",
    amount: "Komad",
    price: "235.00",
  },
  {
    item: "Mini Torta",
    amount: "kg",
    price: "1300.00",
  },
  {
    item: "Tiramisu Kolač",
    amount: "Komad",
    price: "220.00",
  },
  {
    item: "Zimski sladoled",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Princes Krofne/Ekler",
    amount: "Komad",
    price: "160.00",
  },
  {
    item: "Voćni Kolač/Tart",
    amount: "Komad",
    price: "150.00",
  },
  {
    item: "Čoko Čašice",
    amount: "kg",
    price: "150.00",
  },
  {
    item: "Mafin Fon",
    amount: "Komad",
    price: "200.00",
  },
  {
    item: "Mafin",
    amount: "Komad",
    price: "130.00",
  },
  {
    item: "Dekoracija Torte Mladencima “U naručju”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Prvi ples”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Bianca”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Naš dan”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Šaljivi mladenci”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Dva srca”",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Čipka”",
    amount: "Komad",
    price: "1220.00",
  },
  {
    item: "Dekoracija Torte Mladencima “Rotirajuci”",
    amount: "Komad",
    price: "2500.00",
  },
  {
    item: "Dekoracija Torte Fudbalerima",
    amount: "Komad",
    price: "620.00",
  },
  {
    item: "Anemona v.",
    amount: "Komad",
    price: "265.00",
  },
  {
    item: "Anemona m.",
    amount: "Komad",
    price: "195.00",
  },
  {
    item: "Mini Modelirana Figura",
    amount: "Komad",
    price: "764.00",
  },
  {
    item: "Porodica",
    amount: "Komad",
    price: "860.00",
  },
  {
    item: "Žito",
    amount: "kg",
    price: "900.00",
  },
  {
    item: "Čašica",
    amount: "Komad",
    price: "15.00",
  },
  {
    item: "Čašica XL",
    amount: "Komad",
    price: "35.00",
  },
  {
    item: "Velika Kopačka i Lopta",
    amount: "Komad",
    price: "870.00",
  },
  {
    item: "Sveca Slova Srećan Rodjendan",
    amount: "Komad",
    price: "330.00",
  },
  {
    item: "Sveca Jubilej 25,50",
    amount: "Komad",
    price: "125.00",
  },
  {
    item: "Sveca Elegant Zlatna",
    amount: "Komad",
    price: "85.00",
  },
  {
    item: "Sveca Elegant Srebrna",
    amount: "Komad",
    price: "85.00",
  },
  {
    item: "Sveca Mega Zlatni",
    amount: "Komad",
    price: "160.00",
  },
  {
    item: "Sveca Mega Srebrni",
    amount: "Komad",
    price: "160.00",
  },
  {
    item: "Prskalice",
    amount: "Komad",
    price: "85.00",
  },
  {
    item: "Mala Kopačka i Lopta",
    amount: "Komad",
    price: "760.00",
  },
  {
    item: "Cup Cake",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Lollipops",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Božur 5cm",
    amount: "Komad",
    price: "225.00",
  },
  {
    item: "Božur 7cm",
    amount: "Komad",
    price: "520.00",
  },
  {
    item: "Božur 8cm",
    amount: "Komad",
    price: "245.00",
  },
  {
    item: "Božur 10cm",
    amount: "Komad",
    price: "605.00",
  },
  {
    item: "Božur 12cm",
    amount: "Komad",
    price: "740.00",
  },
  {
    item: "Ostin r. 6cm",
    amount: "Komad",
    price: "280.00",
  },
  {
    item: "Ostin r. 8cm",
    amount: "Komad",
    price: "310.00",
  },
  {
    item: "Ostin r. 10cm",
    amount: "Komad",
    price: "550.00",
  },
  {
    item: "Školjke 5/1",
    amount: "Komad",
    price: "180.00",
  },
  {
    item: "Fluo 12",
    amount: "Komad",
    price: "95.00",
  },
  {
    item: "Sveća Spiralna Zlatna (12 kom)",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Sveća Spiralna Srebrna (12 kom)",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Sveća Klasik Crveni (12 kom)",
    amount: "Komad",
    price: "75.00",
  },
  {
    item: "Sveća Klasik Plavi (12 kom)",
    amount: "Komad",
    price: "75.00",
  },
  {
    item: "Sveća Extra Magični Broj Zlatni",
    amount: "Komad",
    price: "78.00",
  },
  {
    item: "Sveća Veliki Broj Crveni",
    amount: "Komad",
    price: "70.00",
  },
  {
    item: "Sveća Veliki Broj Plavi",
    amount: "Komad",
    price: "54.00",
  },
  {
    item: "Sveća Magični Broj Extra",
    amount: "Komad",
    price: "90.00",
  },
  {
    item: "Sveća Stil",
    amount: "Komad",
    price: "140.00",
  },
  {
    item: "Dekorativna Slova Srećan Rođendan",
    amount: "Komad",
    price: "80.00",
  },
  {
    item: "Dekorativna Slova Ovde Je Žurka",
    amount: "Komad",
    price: "80.00",
  },
  {
    item: "Mega Svećice",
    amount: "Komad",
    price: "180.00",
  },
  {
    item: "Sveća Znak ?",
    amount: "Komad",
    price: "125.00",
  },
  {
    item: "Male Zvezdice",
    amount: "Komad",
    price: "100.00",
  },
  {
    item: "Srca Velika Zvezde",
    amount: "Komad",
    price: "150.00",
  },
  {
    item: "Modelirana Figura",
    amount: "Komad",
    price: "1280.00",
  },
  {
    item: "Bager",
    amount: "Komad",
    price: "670.00",
  },
  {
    item: "Moskva Šnit",
    amount: "kg",
    price: "1600.00",
  },
  {
    item: "Moskva Šnit",
    amount: "Komad",
    price: "280.00",
  },
  {
    item: "Čokoladna Torta",
    amount: "kg",
    price: "1600.00",
  },
  {
    item: "Čokoladna Torta",
    amount: "Komad",
    price: "280.00",
  },
  {
    item: "Torta Srbija",
    amount: "kg",
    price: "1600.00",
  },
  {
    item: "Pločice",
    amount: "Komad",
    price: "200.00",
  },
  {
    item: "Autići",
    amount: "Komad",
    price: "250.00",
  },
  {
    item: "Macarons",
    amount: "kg",
    price: "3500.00",
  },
  {
    item: "Macarons 6kom",
    amount: "Komad",
    price: "420.00",
  },
  {
    item: "Macarons 12kom",
    amount: "Komad",
    price: "840.00",
  },
  {
    item: "Figaro",
    amount: "Komad",
    price: "140.00",
  },
  {
    item: "Duga",
    amount: "Komad",
    price: "140.00",
  },
  {
    item: "Torta Dečja",
    amount: "kg",
    price: "1550.00",
  },
  {
    item: "Torta Mladenačka",
    amount: "kg",
    price: "1600.00",
  },
  {
    item: "Čoko Fontana",
    amount: "Komad",
    price: "25000.00",
  },
  {
    item: "Prevoz",
    amount: "Komad",
    price: "30",
  },
]

export default products
