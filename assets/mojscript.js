var url = window.location.pathname;
const BASEURL = "images/";
var nizLinkova = ["index.html", "watches.html", "about.html", "contact.html", "DOKUMENTACIJA.pdf"];
var nizTeksta = ["HOME", "WATCHES", "AUTHOR", "CONTACT US", "DOCUMENTATION"];
window.onload = function(){
    ispisNavMenija();
    ispisDDL();
    subscribe();

    if(url == "/" || url == "/index.html"){
        UcitavanjeIndex();
    }
    if(url == "/watches.html"){
        UcitavanjeWatches();
        miniSlajd();
    }
    if(url == "/about.html"){
        UcitavanjeAutora();
    }
    if(url =="/contact.html"){
        document.getElementById("Prijava").addEventListener("click", proveraForme);
        UcitavanjeKontaktForme();
    }
}

//NAV-BAR DINAMICKI
function ispisNavMenija(){
    let ispisNav = "";
    for(let i=0; i<nizLinkova.length;i++){
        ispisNav += `<li class="nav-item"><a class="nav-link" href="${nizLinkova[i]}">${nizTeksta[i]}</a></li>`
    }
    document.querySelector(".navbar-nav").innerHTML = ispisNav;
}
function UcitavanjeIndex(){
     //BLOKOVI ZA NOVE SATOVE
     function BlokoviSatovi(){
    let ispisBlokova = "";
    var nizAltSlika = new Array("Purple Band Woman Watch", "pink i-style watch", "Black leather watch","i-style rose-gold watch","Brown leather band watch","Black leather watch Oleys", "Rose Diamond and silver display watch");
    var slikeSrcBlokova = new Array("images/i-1.png", "images/item-2.png", "images/i-3.png", "images/i-4.png", "images/i-5.png","images/i-6.png", "images/i-7.png");
    var nasloviBlokova = new Array("i-Xiaomi","I-Xiaomi v5","Kalincos Black","I-Style Pink","Pagani LB","Benyar LB","Pink Diamond");
    var ceneBlokova = new Array("$149.99","$239.99","$99.99","$255.99","$329.99","$399.99","$999.99");
    var spanBlokova = new Array("Featured","New","New","New","New","New","New");
    for(let indeks in slikeSrcBlokova) {
        ispisBlokova += `<div class="col-sm-6 col-xl-3"> 
                            <div class="box">
                                <a href=""> 
                                    <div class="img-box">
                                        <img src="${slikeSrcBlokova[indeks]}" alt="${nizAltSlika[indeks]}">
                                    </div>
                                    <div class="detail-box">
                                        <h6>${nasloviBlokova[indeks]}</h6>
                                        <h6>Price:<span><b>${ceneBlokova[indeks]}</b></span></h6>
                                    </div>
                                    <div class="new">
                                        <span>${spanBlokova[indeks]}</span>
                                    </div>
                                </a>
                            </div>
                        </div>`
    }
    document.getElementById("blokovi").innerHTML = ispisBlokova;
     }
    BlokoviSatovi();
    //ABOUT SECTION
    function AboutSekcija(){
    var nizSlikaFeature = ["images/fitness.png","images/mechanism.png", "images/watchmaking.png", "images/megaphone.png"];
    var nizNaslovaH5 = ["Fitness Tracking", "Japanese Mechanism", "Unique Design","Popular Brands"];
    var nizParagrafaP = ["You can always check your heart rate, Hz and keep watch near you during fitness session!",
                        "We offer you one of the best mechanisms in the world in aspect of watches. Read below more about it!",
                         "Choose from variety of beautifull designs of watches. Be elegant or fitness, its up to you!!",
                          "We work with powerfull brands and guarantee you quality. Take a look at some partners we made!"];
    var nizSpanova = ["Read more", "Read more", "Read more", "Read more"];
    let ispisFeatureSekcije="";
    for(let indeks in nizSlikaFeature){
        ispisFeatureSekcije += `<div class="col-sm-6 col-lg-3">
                                <div class="box">
                                    <div class="img-box">
                                        <img src="${nizSlikaFeature[indeks]}" alt="">
                                    </div>
                                    <div class="detail-box">
                                        <h5>${nizNaslovaH5[indeks]}</h5>
                                        <p>${nizParagrafaP[indeks]}</p>
                                        <a href="">
                                            <span>${nizSpanova[indeks]}</span>
                                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                       </div>
                                </div>
                            </div>`
    }
    document.querySelector("#feature").innerHTML = ispisFeatureSekcije;
    }
    AboutSekcija();
    //ISPIS FUTERA
    var nizIkonicaFooter = new Array("https://www.facebook.com/","https://twitter.com/","https://www.linkedin.com/","https://www.instagram.com/", "../root/sitemap.xml");
    var nizFaFaIkona = new Array("fa fa-facebook","fa fa-twitter","fa fa-linkedin","fa fa-instagram","fa fa-sitemap");
    let ispisFooterSocial = "";
    for(let indeks in nizIkonicaFooter){
            ispisFooterSocial += `<a href="${nizIkonicaFooter[indeks]}" target="_blank">
                                    <i class="${nizFaFaIkona[indeks]}" aria-hidden="true"></i>
                                  </a>`
    }
    document.getElementById("ispisFooterSocial").innerHTML = ispisFooterSocial;
    slikaAbout.addEventListener("mouseover",function(){
        slikaAbout.src="../images/teamwork.jpg";
    })
    slikaAbout.addEventListener("mouseout",function(){
        slikaAbout.src = "../images/company.jpg";
    })
}
function UcitavanjeWatches(){
     //BLOKOVI ZA SATOVE
    let ispisBlokova = "";
    var nizAltSlika = new Array("Purple Band Woman Watch", "pink i-style watch", "Black leather watch","i-style rose-gold watch","Brown leather band watch","Black leather watch Oleys", "Rose Diamond and silver display watch",
                                "Silver Diamond Watch", "Gold Watch 24k","Silver-Gold watch so shiny", "Sport Military Watch", "Quartz- yellow - white");
    var slikeSrcBlokova = new Array("i-1.png", "item-2.png", "i-3.png", "i-4.png", "i-5.png","i-6.png", "i-7.png","i-8.png","i-9.png", "i-10.png","i-11.png","i-12.png");
    var nasloviBlokova = new Array("i-Xiaomi","I-Xiaomi v5","Kalincos Black","I-Style Pink","Pagani LB","Benyar LB","Pink Diamond","PinTime", "24k Gold", "Semi","SP-MIL", "Quartz");
    var ceneBlokova = new Array("149.99","239.99","99.99","255.99","329.99","399.99","999.99", "1299.99","4559.99","1999.99$","45.99", "7999.99");
    var spanBlokova = new Array("Featured","New","New","New","New","New","New", "Best Price","Best Price","Best Price","Popular","Popular");
    for(let indeks in slikeSrcBlokova) {
        ispisBlokova += `<div class="col-sm-6 col-xl-3 nekaklasa"> 
                            <div class="box"> 
                                    <div class="img-box">
                                        <img src="${BASEURL}${slikeSrcBlokova[indeks]}" alt="${nizAltSlika[indeks]}">
                                    </div>
                                    <div class="detail-box">
                                        <h6>${nasloviBlokova[indeks]}</h6>
                                        <h6>Price:<span class="price"><b>${ceneBlokova[indeks]}</b></span></h6>
                                    </div>
                                    <div class="new">
                                        <span>${spanBlokova[indeks]}</span>
                                    </div>
                            </div>
                        </div>`
    }
    document.getElementById("blokovi").innerHTML = ispisBlokova;

    var nizIkonicaFooter = new Array("https://www.facebook.com/","https://twitter.com/","https://www.linkedin.com/","https://www.instagram.com/", "../root/sitemap.xml");
    var nizFaFaIkona = new Array("fa fa-facebook","fa fa-twitter","fa fa-linkedin","fa fa-instagram","fa fa-sitemap");
    let ispisFooterSocial = "";
    for(let indeks in nizIkonicaFooter){
            ispisFooterSocial += `<a href="${nizIkonicaFooter[indeks]}" target="_blank">
                                    <i class="${nizFaFaIkona[indeks]}" aria-hidden="true"></i>
                                  </a>`
    }
    document.getElementById("ispisFooterSocial").innerHTML = ispisFooterSocial;




    //SORTIRANJE CENA
$(document).ready(function() {

     $('#sortiranjeCena').change(function() {
       var sortiraj = $(this).val();
       if(sortiraj === '0'){
          
       }
       if (sortiraj === 'A-Z') {
         var names = $('#blokovi .box');
         names.sort(function(a, b) {
           var nameA = $(a).find('h6:first').text().toLowerCase();
           var nameB = $(b).find('h6:first').text().toLowerCase();
           if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }
           return 0;
         });

         names.appendTo('#blokovi');
       } else if (sortiraj === 'cena') {

         var cene = $('#blokovi .box');
         cene.sort(function(a, b) {
           var priceA = parseFloat($(a).find('h6:last .price').text());
           var priceB = parseFloat($(b).find('h6:last .price').text());
           return priceA - priceB;
         });

         cene.appendTo('#blokovi');
       } else if (sortiraj === 'cena2') {

         var cene = $('#blokovi .box');
         cene.sort(function(a, b) {
           var priceA = parseFloat($(a).find('h6:last .price').text());
           var priceB = parseFloat($(b).find('h6:last .price').text());
           return priceB - priceA;
         });

         cene.appendTo('#blokovi');
       }
     });
   });
   






















}
function UcitavanjeAutora(){
    var nizIkonicaFooter = new Array("https://www.facebook.com/","https://twitter.com/","https://www.linkedin.com/","https://www.instagram.com/", "../root/sitemap.xml");
    var nizFaFaIkona = new Array("fa fa-facebook","fa fa-twitter","fa fa-linkedin","fa fa-instagram","fa fa-sitemap");
    let ispisFooterSocial = "";
    for(let indeks in nizIkonicaFooter){
            ispisFooterSocial += `<a href="${nizIkonicaFooter[indeks]}" target="_blank">
                                    <i class="${nizFaFaIkona[indeks]}" aria-hidden="true"></i>
                                  </a>`
    }
    document.getElementById("ispisFooterSocial").innerHTML = ispisFooterSocial;
    console.log(ispisFooterSocial);
}
function UcitavanjeKontaktForme(){
    var nizIkonicaFooter = new Array("https://www.facebook.com/","https://twitter.com/","https://www.linkedin.com/","https://www.instagram.com/", "../root/sitemap.xml");
    var nizFaFaIkona = new Array("fa fa-facebook","fa fa-twitter","fa fa-linkedin","fa fa-instagram","fa fa-sitemap");
    let ispisFooterSocial = "";
    for(let indeks in nizIkonicaFooter){
            ispisFooterSocial += `<a href="${nizIkonicaFooter[indeks]}" target="_blank">
                                    <i class="${nizFaFaIkona[indeks]}" aria-hidden="true"></i>
                                  </a>`
    }
    document.getElementById("ispisFooterSocial").innerHTML = ispisFooterSocial;
    console.log(ispisFooterSocial);
    var nizTekstLabela = ["Instagram","Facebook","Twitter", "Other"];
    var nizValue = ["IG","FB","TT","O"];
    for(let i=0;i<nizTekstLabela.length;i++) {
        var tagInput = document.createElement("input");
        tagInput.setAttribute("class","form-check-input");
        tagInput.setAttribute("type","checkbox");
        tagInput.setAttribute("name","chb");
        tagInput.setAttribute("value", nizValue[i]);
        document.querySelector("#mojCheckBox").appendChild(tagInput);
        
        var tagLabel = document.createElement("label");
       tagLabel.setAttribute("class", "form-check-label");
        tagLabel.setAttribute("for","chb");
        var sadrzajLabel = document.createTextNode(nizTekstLabela[i]);
        tagLabel.appendChild(sadrzajLabel);
        console.log(document.querySelector("#mojCheckBox").appendChild(tagLabel));
    
    }
    var inputTag = document.createElement('input'); //fullname
    inputTag.setAttribute("type", "text");
    inputTag.setAttribute("id", "imePrezime");
    inputTag.setAttribute("placeholder", "Name and Last name");
    document.getElementById("zaImePrezime").appendChild(inputTag);

    var inputTagEmail = document.createElement('input'); // Kreiranje inputTag za Email
    inputTagEmail.setAttribute("type", "email");
    inputTagEmail.setAttribute("class", "form-control form control-input");
    inputTagEmail.setAttribute("id", "mojMejl");
    inputTagEmail.setAttribute("placeholder", "Enter your e-mail");
    document.getElementById("zaMejl").appendChild(inputTagEmail);
    

    //NODE ZA RADIO
    var nizRadio = ["M", "F"];
    let nizId = ["#radio", "#radio1"]
    for(let i=0;i<nizRadio.length;i++)
    {
        var inputRadio = document.createElement("input");
        inputRadio.setAttribute("class", "form-check-input");
        inputRadio.setAttribute("type", "radio");
        inputRadio.setAttribute("name","rbP");
        inputRadio.setAttribute("id", "PolM");
        inputRadio.setAttribute("value", nizRadio[i]);
        document.querySelector(nizId[i]).appendChild(inputRadio);
        var labelRadio = document.createElement("label");
        labelRadio.setAttribute("class", "form-check-label");
        labelRadio.setAttribute("for", "rbP");
        var textRadio = document.createTextNode(nizRadio[i]);
        labelRadio.appendChild(textRadio);
        document.querySelector(nizId[i]).appendChild(labelRadio);
    }

    //DROPDOWN NODE
    let nizOptionValue= ["BG","NS","ČA","LE","KR","KG","NI"];
    let nizTekstaOptiona = ["Beograd","Novi Sad","Čačak","Leskovac","Kraljevo","Kragujevac","Niš"];
    var tagOption = document.createElement("option");
    tagOption.setAttribute("value", "0");
    var textOption = document.createTextNode("Choose city: ");
    tagOption.appendChild(textOption);

    document.querySelector("#zaDDL").appendChild(tagOption);
    for(let i in nizOptionValue){
        var tagOption1 = document.createElement("option");
        tagOption1.setAttribute("value", nizOptionValue[i]);
        var textOptiona = document.createTextNode(nizTekstaOptiona[i]);
        tagOption1.appendChild(textOptiona);
        document.querySelector("#zaDDL").appendChild(tagOption1);
    }
    
    document.getElementById("Prijava").addEventListener("click",proveraForme);
}
function proveraForme(){
    var greske = 0;
    var objImePrezime = document.getElementById("imePrezime");
    var objMejl = document.getElementById("mojMejl");
    var objDdl = document.getElementById("zaDDL");
    var objRadio = document.getElementsByName("rbP");
    var objCheck = document.getElementsByName("chb"); 
    var objArea = document.getElementById("msgArea");
    //VREDNOSTI RADIO BUTTONA, CHECKBOXA I DDL
    let vrednostRadio = "";
    for(let i = 0; i < objRadio.length; i++){
    if(objRadio[i].checked){
        vrednostRadio = objRadio[i].value;
        break;
        }
    }
    let vrednostCekirani = "";
    for(let i = 0; i < objCheck.length; i++){
    if(objCheck[i].checked){
        vrednostCekirani += objCheck[i].value + " ";
        }
    }
    //PROVERA DDL
    let gradoviVrednost = objDdl.options[objDdl.selectedIndex].value;
    if(gradoviVrednost == "0"){
        objDdl.parentElement.nextElementSibling.classList.add("prikaz");
        objDdl.parentElement.classList.add("prosao");
        greske++;
    }
    else{
        objDdl.parentElement.nextElementSibling.classList.remove("prikaz");
        objDdl.parentElement.classList.remove("prosao");
    }
    //PROVERA CEKIRANIH 
    if(vrednostRadio == ""){
        objRadio[0].parentElement.parentElement.nextElementSibling.classList.add("prikaz");
        objRadio[0].parentElement.parentElement.classList.add("prosao");

        greske++;
    }
    else{
        objRadio[0].parentElement.parentElement.nextElementSibling.classList.remove("prikaz");
        objRadio[0].parentElement.parentElement.classList.remove("prosao");

    } 
    if(vrednostCekirani == ""){
        objCheck[0].parentElement.nextElementSibling.classList.add("prikaz");
        objCheck[0].parentElement.classList.add("prosao");
        greske++;
    }
    else{
        objCheck[0].parentElement.nextElementSibling.classList.remove("prikaz");
        objCheck[0].parentElement.classList.remove("prosao");

    }
    
    //PROVERA TEXT POLJA 
    let reImePrezime = /^([A-ZŠĐŽČĆ]([a-zšđčćž]+){1,20}\s([A-ZŠĐŽČĆ][a-zšđčćž]+){1,20})$/;
    if(!reImePrezime.test(objImePrezime.value)){
        objImePrezime.parentElement.nextElementSibling.classList.add("prikaz");
        objImePrezime.classList.add("prosao");
        greske++;
    }
    else{
        objImePrezime.parentElement.nextElementSibling.classList.remove("prikaz");
        objImePrezime.classList.remove("prosao");
    }
    let regMejl = /^([a-zzšđčćž]{3,20}(\.)?[0-9]*)+(([a-z]*[0-9]*)(\.)?)+\@((gmail|yahoo|ict.edu|outlook)(.rs|.com))$/
    if(!regMejl.test(objMejl.value)){
        objMejl.parentElement.nextElementSibling.classList.add("prikaz");
        objMejl.classList.add("prosao");
        greske++;
    }
    else{
        objMejl.parentElement.nextElementSibling.classList.remove("prikaz");
        objMejl.classList.remove("prosao");

    }
    //OBRADA GRESKE
    if(greske == 0){
        document.querySelector("#sent").classList.add("nulaGreski");
        document.querySelector("#sent").innerHTML = "Succefully sent!";
    }
    else{
        document.querySelector("#sent").innerHTML = "";
    }
}
function ispisDDL(){
    let ispisDDL = `<select class="form-control" class="dropdown-toggle" id="" aria-label="Default select example" onChange="window.location.href=this.value">`
    var nizValueAtributa = ["index.html", "watches.html","about.html", "contact.html", "DOKUMENTACIJA.pdf"];
    ispisDDL += "<option value='0'>Choose page</option>"
    for(let i=0;i<nizLinkova.length;i++){
        ispisDDL +=`<a href="${nizLinkova[i]}"><option value="${nizValueAtributa[i]}">${nizTeksta[i]}</option></a>`
    }
    ispisDDL += `</select>`;
    document.getElementById("DDL").innerHTML = ispisDDL;
}
function subscribe(){
    document.getElementById("subs").addEventListener("click",function(){
        let polje = document.getElementById("subscribe");
         regMejl = /^([a-zzšđčćž]{3,20}(\.)?[0-9]*)+(([a-z]*[0-9]*)(\.)?)+\@((gmail|yahoo|ict.edu|outlook)(.rs|.com))$/
        if(!regMejl.test(polje.value)){
            polje.nextElementSibling.nextElementSibling.classList.add("prikaz");
        }
        else{
            polje.nextElementSibling.nextElementSibling.classList.remove("prikaz");
          

        }
    })
}
//PRIMENA JQUERY
$('#tekstUnos').keyup(function() {
    
    var slova = $(this).val().length,
        now = $('#prvi'),
        poslednji = $('#poslednji'),
        brojac = $('#brojanje');
      
        now.text(slova);
   

    if (slova < 100) {
        now.css('color', '#432');
    }
    if (slova > 70 && slova < 90) {
        now.css('color', '#6c632');
    }
    if (slova > 100 && slova < 200) {
        now.css('color', '#841c1c');
    }
    
    if (slova >= 180) {
        poslednji.css('color', '#8f0011');
        now.css('color', '#8f0001');
        brojac.css('font-weight','bold');
    } else {
        poslednji.css('color','#666');
        brojac.css('font-weight','normal');
    }

});
function miniSlajd(){
    var blokSlike = document.getElementsByClassName("slike");
var i;

for (i = 0; i < blokSlike.length; i++) {
  blokSlike[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var satovi = this.nextElementSibling;
    if (satovi.style.maxHeight) {
        satovi.style.maxHeight = null;
    } else {
        satovi.style.maxHeight = satovi.scrollHeight + "px";
    } 
  });
}
}
//Prilikom izrade sajta, dolazio sam do resenja pomocu materijala sa W3-schools, kao i sa predavanja.


