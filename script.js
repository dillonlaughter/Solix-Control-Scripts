if (window.location['href'] == 'https://solixlifeline.com/Login/Login.aspx'){

var awpath = document.querySelector("#ctl00_GeneralContentPlaceHolder_Login1 > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(5)");
var side1 = document.createElement('td');
var side2 = document.createElement('td');
var PatBut = document.createElement('Button');
PatBut.innerHTML = "Patrick";
PatBut.id = 'patrickButton';
PatBut.style = "width:50%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold" ;
PatBut.onclick = function(){var a='pres0714';var b='Donner@1';document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
var DilBut = document.createElement('Button');
DilBut.innerHTML = "Dillon";
DilBut.id = 'dillonButton';
DilBut.style = "width:50%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
DilBut.onclick = function(){var a='pres0704';var b='Laughter@1';document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
var AngBut = document.createElement('Button');
AngBut.innerHTML = "Angela";
AngBut.id = 'angelaButton';        
AngBut.style = "width:50%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
AngBut.onclick = function(){var a='pres0718';var b='Hurley@1';document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
var MatBut = document.createElement('Button');
MatBut.innerHTML = "Matt";
MatBut.id = 'mattButton';
MatBut.style = "width:50%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
side1.appendChild(DilBut);
side2.appendChild(AngBut);
side1.appendChild(MatBut);
side2.appendChild(PatBut);
awpath.appendChild(side1);
awpath.appendChild(side2);
awpath.deleteCell(0);
document.getElementById("mattButton").addEventListener("click", function(event){
    event.preventDefault();
   var a='pres0715';
     var b='Adame@11';
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
});
document.getElementById("angelaButton").addEventListener("click", function(event){
    event.preventDefault();
   var a='pres0718';
     var b='Hurley@1';
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
});
document.getElementById("patrickButton").addEventListener("click", function(event){
    event.preventDefault();
   var a='pres0714';
     var b='Donner@1';
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
});
document.getElementById("dillonButton").addEventListener("click", function(event){
    event.preventDefault();
   var a='pres0704';
     var b='Laughter@1';
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
});


}
//##search, button to count, countdown, button to reset, clear
if (window.location['href'] == 'https://solixlifeline.com/Source/CallCenterHomePage.aspx'){
//#outside contant loop
    
//#inside constant loop
var countdown = setInterval(countee,500);
function countee(){
if (document.getElementById('resetButton')==null) {
clearInterval(countee);
floater = document.querySelector("#aspnetForm");
if (document.getElementsByClassName('rtLi first').length == 0){
    var cpreverse = document.createElement('li');
    cpreverse.className = 'rtLi first';
    var cpfirst = document.createElement('div');
    cpfirst.className = 'rtFirst';
    var cpspace = document.createElement('span');
    cpspace.className = 'rtSp';
    cpspace.innerHTML = ' ';
    var cpfirstlabel = document.createElement('span');
    cpfirstlabel.className = 'rtIn';
    cpfirst.innerText = '\uD83E\uDDE1 Reverse Toggle'
    cpreverse.appendChild(cpfirst);
    cpfirst.appendChild(cpspace);
    cpfirst.appendChild(cpfirstlabel);
    document.querySelector("#ctl00_mnuWLL > ul").appendChild(cpreverse);
    }
if (typeof reversetoggle === 'undefined'){var none = 0}else{if (reversetoggle ==1){reversefunction()}}
var buttonaddpath = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody");
var searchpath = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody > tr:nth-child(11) > td.errortext");
var cppath = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody > tr:nth-child(2) > td:nth-child(2)");
var counttotal = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody > tr:nth-child(2) > td:nth-child(3)");
var refreshtime = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody > tr:nth-child(2) > td:nth-child(3)");
var awcontrolpanel = document.querySelector("#ctl00_MainPlaceHolder_pnlSearch > table > tbody > tr:nth-child(2) > td:nth-child(3)");
var countbut = document.createElement('Button');
var resetbut = document.createElement('Button');
var countdownbut = document.createElement('Button');
var counttotalbut = document.createElement('Button');
var refreshtimebut = document.createElement('Button');
var awcontrolpanelbut = document.createElement('Button');
counttotalbut.innerHTML = 'Weekly Count';
refreshtimebut.innerHTML = 'Refresh Time';
awcontrolpanelbut.innerHTML = 'CP';
countbut.innerHTML = 'Count';
resetbut.innerHTML = 'No Limit';
countdownbut.innerHTML = 'NaN';
counttotalbut.id = 'counttotalButton';
refreshtimebut.id = 'refreshtimeButton';
awcontrolpanelbut.id = 'awcontrolpanelButton';
countbut.id = 'countButton';
resetbut.id = 'resetButton';
countdownbut.id = 'countdownButton';
countbut.style = 'font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold;width:75px';
resetbut.style = 'font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold;width:75px';
countdownbut.style = 'font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold;width:55px';
awcontrolpanelbut.style = 'font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold;width:75px';
//counttotalbut.style = '';
//refreshtimebut.style = 'position:fixed;left:492px;top:300px';
searchpath.appendChild(countbut);
searchpath.appendChild(countdownbut);
searchpath.appendChild(resetbut);
//##cppath.appendChild(awcontrolpanelbut);
var calendarredate = document.createElement('Button');
calendarredate.id = 'calendarRedate';
calendarredate.innerHTML = '<img src="../App_Themes/Default/Calendar/datePickerPopup.gif" /input type="color" value="#000fff" >';
calendarredate.style = 'width:0px;border:0px;margin-top:4px;background-color:white'
document.querySelector("#ctl00_MainPlaceHolder_radtbDate_wrapper > table > tbody > tr").appendChild(calendarredate);
    
//######Calandar redate stuff
document.querySelector("#ctl00_MainPlaceHolder_radtbDate_wrapper > table").style = 'width:130%';
document.querySelector("#ctl00_MainPlaceHolder_radtbDate_dateInput_text").stlye = 'width:55%';



//##add code here
function reversefunction() {
        function reverseTableRows(tableId) {
        var table = document.getElementById(tableId),
            newTbody = document.createElement('tbody'),
            oldTbody = table.tBodies[0],
            rows = oldTbody.rows,
            i = rows.length - 1;

        while (i >= 0) {
            newTbody.appendChild(rows[i]);
            i -= 1;
        }
        oldTbody.parentNode.replaceChild(newTbody, oldTbody);
        }
        reverseTableRows('ctl00_MainPlaceHolder_radgrdSearchRetailCustomers_ctl00')
        cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';
        
    }


document.querySelector("#ctl00_mnuWLL > ul > li.rtLi.first > div").addEventListener('click',function(event){
    event.preventDefault();
    if (typeof reversetoggle === 'undefined' || reversetoggle == 0){
        reversetoggle = 1;
        cpfirst.innerText = '\uD83D\uDCD7 Reverse Toggle';}
    else{reversetoggle = 0;cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';}
        
                            
    
    })



/*document.getElementById('awcontrolpanelButton').addEventListener('click',function(event){
    event.preventDefault();
    console.log(1)
    //######### Control Panel Stuff


//##Reverse Button
    var cpreverse = document.createElement('li');
    cpreverse.className = 'rtLi first';
    var cpfirst = document.createElement('div');
    cpfirst.className = 'rtFirst';
    var cpspace = document.createElement('span');
    cpspace.className = 'rtSp';
    cpspace.innerHTML = ' ';
    var cpfirstlabel = document.createElement('span');
    cpfirstlabel.className = 'rtIn';
    cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle'
    cpreverse.appendChild(cpfirst);
    cpfirst.appendChild(cpspace);
    cpfirst.appendChild(cpfirstlabel);
    document.querySelector("#ctl00_mnuWLL > ul").appendChild(cpreverse);
//#"\uD83D\uDC9A" (Green) # "\uD83E\uDDE1" (red)
})*/

//##Reverse Toggle

document.getElementById('calendarRedate').addEventListener('click',function(event){
    event.preventDefault();
    var raddate = document.getElementById('ctl00_MainPlaceHolder_radtbDate_dateInput').value;
         var sp = '-';
         var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth()+1;
         var yyyy = today.getFullYear();
         if(dd<10) dd='0'+dd;
         if(mm<10) mm='0'+mm;
         var curday = (yyyy + sp + mm + sp + dd + '-00-00-00');
         if (raddate != curday){
              document.getElementById('ctl00_MainPlaceHolder_radtbDate_dateInput').value = curday;
              document.getElementById('ctl00_MainPlaceHolder_btnSearch').click();
              }
         });                                                             
document.getElementById('resetButton').addEventListener('click',function(event){
        function clearandrefresh() {
            document.getElementById('ctl00_MainPlaceHolder_hidLastSearchTimeStamp').value = (new Date().getMinutes()+60)*60+ new Date().getSeconds()-61
            }
        setInterval(clearandrefresh,500);
        var countdown = setInterval(countee,500);
        var countdowngo = setInterval(countdowntimer,500);
        function countdowntimer() {
            now = (new Date().getMinutes()+60)*60+ new Date().getSeconds();
            old = document.getElementById('ctl00_MainPlaceHolder_hidLastSearchTimeStamp').value;
            time = ((now-old-60)*-1)%60;
            document.getElementById('countdownButton').innerHTML = time;
            }
});

document.getElementById("countButton").addEventListener("click", function(event){
    event.preventDefault();
         var sp = '-';
         var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth()+1;
         var yyyy = today.getFullYear();
         if(dd<10) dd='0'+dd;
         if(mm<10) mm='0'+mm;
         var curday = (yyyy + sp + mm + sp + dd + '-00-00-00');
         document.getElementById('ctl00_MainPlaceHolder_radtbDate_dateInput').value = curday;
         document.getElementById('ctl00_MainPlaceHolder_btnSearch').click();
         var customers = 0
         var finishvar = setInterval(finishstate,500);
    function finishstate(){
for (i=0;i<$("td:contains(Complete)").length;i++) {
    if ($("td:contains(Complete)")[i].offsetParent.id=='ctl00_MainPlaceHolder_radgrdSearchRetailCustomers_ctl00'){
        customers +=1}};if (customers != 0||customers != '0'){clearInterval(finishvar);alert(customers)};
    ;}});
}}
}
