if (window.location['href'] == 'https://solixlifeline.com/Login/Login.aspx'){
    if (typeof key____ !== 'undefined'){
        if (typeof loginonce === 'undefined'){
            var loginonce = 1;
            function importotherpeople(){
                  document.body.appendChild(document.createElement('script')).src='https://combinatronics.com/dillonlaughter/Solix-Control-Scripts/master/Employees';}
            importotherpeople();
            setTimeout(last__function,1500);
            function last__function() {
                var awpath = document.querySelector("#ctl00_GeneralContentPlaceHolder_Login1 > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(5)");
                var side1 = document.createElement('td');
                var side2 = document.createElement('td');
                var otherBut = document.createElement('Button');
                var discBut = document.createElement('Button');
                otherBut.innerHTML = '+';
                otherBut.id = 'otherButton';
                otherBut.style = "width:20%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold" ;

                discBut.innerHTML = '+';
                discBut.id = 'discButton';
                discBut.style = "width:20%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold" ;

     
                var fourthBut = document.createElement('Button');
                fourthBut.innerHTML = otherpeople[Object.keys(otherpeople)[3]][0];
                fourthBut.id = 'fourthButton';
                fourthBut.style = "width:40%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold" ;
                //fourthBut.onclick = function(){var a=Object.keys(otherpeople)[3];var b=otherpeople[Object.keys(otherpeople)[3]][1];document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
                var DilBut = document.createElement('Button');
                DilBut.innerHTML = otherpeople[Object.keys(otherpeople)[0]][0];
                DilBut.id = 'dillonButton';
                DilBut.style = "width:55%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
                //DilBut.onclick = function(){var a=Object.keys(otherpeople)[0];var b=otherpeople[Object.keys(otherpeople)[0]][1];document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
                var AngBut = document.createElement('Button');
                AngBut.innerHTML = otherpeople[Object.keys(otherpeople)[2]][0];
                AngBut.id = 'angelaButton';        
                AngBut.style = "width:40%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
                //AngBut.onclick = function(){var a=Object.keys(otherpeople)[1];var b=otherpeople[Object.keys(otherpeople)[1]][1];document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();};
                var MatBut = document.createElement('Button');
                MatBut.innerHTML = otherpeople[Object.keys(otherpeople)[1]][0];
                MatBut.id = 'mattButton';
                MatBut.style = "width:45%;font-size:9px;color:#000084;font-family:Verdana;font-variant:small-caps;font-weight:bold";
                side1.appendChild(DilBut);
                side2.appendChild(AngBut);
                side1.appendChild(MatBut);
                side2.appendChild(fourthBut);
                side2.appendChild(otherBut);
                document.querySelector("#ctl00_GeneralContentPlaceHolder_lblHeader").appendChild(discBut);
// here is where button is currently located
                awpath.appendChild(side1);
                awpath.appendChild(side2);
                awpath.deleteCell(0);
                document.getElementById("mattButton").addEventListener("click", function(event){
                    event.preventDefault();
                   var a=Object.keys(otherpeople)[1];
                     var b=otherpeople[Object.keys(otherpeople)[1]][1];
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                });
                document.getElementById("angelaButton").addEventListener("click", function(event){
                    event.preventDefault();
                   var a=Object.keys(otherpeople)[2];
                     var b=otherpeople[Object.keys(otherpeople)[2]][1];
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                });
                document.getElementById("fourthButton").addEventListener("click", function(event){
                    event.preventDefault();
                   var a=Object.keys(otherpeople)[3];
                     var b=otherpeople[Object.keys(otherpeople)[3]][1];
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                });
                document.getElementById("dillonButton").addEventListener("click", function(event){
                    event.preventDefault();
                   var a=Object.keys(otherpeople)[0];
                     var b=otherpeople[Object.keys(otherpeople)[0]][1];
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = a;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = b;
                     document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                });
                function getOffset( el ) {
                    var _x = 0;
                    var _y = 0;
                    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                        _x += el.offsetLeft - el.scrollLeft;
                        _y += el.offsetTop - el.scrollTop;
                        el = el.offsetParent;
                        }
                    return { top: _y, left: _x };
                    }
                var xioffset = 1+(parseInt(getOffset(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset")).left,10) + parseInt(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset").attributes[0].ownerElement.scrollWidth,10))+2;
                var yioffset = 5+getOffset(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset")).top;
                var xioffsetdisc = 1+(parseInt(getOffset(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset")).left,10) + parseInt(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset").attributes[0].ownerElement.scrollWidth,10))+154;
                var yioffsetdisc = 5+getOffset(document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td > fieldset")).top;

        /*        function importotherpeople(){
                        document.body.appendChild(document.createElement('script')).src='https://combinatronics.com/dillonlaughter/Solix-Control-Scripts/master/Employees';}
                    importotherpeople()
        */            
                
                
              //  New branch for expired people
                        //##        var otherpeople = {'pres0704':['Dillon','Laughter@1'],'pres0714':['Patrick','Donner@1']};
                document.getElementById('discButton').addEventListener('click',function(event){
                    event.preventDefault();
                    //##insert variable 'otherpeople' from github page


        //##            var otherpeople = {'pres0704':['Dillon','1'],'pres0714':['Patrick','11'],'pres0718':['Angela','111']};
                    if (typeof toolbaractivedisc === 'undefined' || toolbaractivedisc ==0){
                        toolbaractivedisc = 1
                        wheretodisc = document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td");
//above needs to change
                        tablestartdisc = document.createElement('td');
                        tablestartdisc.style = 'position:fixed;left:'+xioffsetdisc+'px;top:'+yioffsetdisc+'px;width:150px;border-top:0;border-style:solid;border-width:1px;border-color:#89978F;background:#99A992;border-width: 3px 1px 3px 2px;border-color: rgba(153, 169, 146, 1);'
                        tablestartdisc.id = 'tablemaindisc';
                        tabletabledisc = document.createElement('table');
                        tabletabledisc.cellPadding = '0';
                        tableheaddisc = document.createElement('thead');
                        tableheaddisc.style = 'display:table-header-group;vertical-align:middle;border-color:#000;';
                        tabletitledisc = document.createElement('tr');
                        tabletitle1disc = document.createElement('td');
                        tabletitle2disc = document.createElement('span');
                        tabletitle1disc.align = 'center';
                        tabletitle1disc.colspan = '2';
                        tabletitle2disc.innerText = 'Previous Employees';
                        tabletitle2disc.style = 'border-color:#000084;color: rgb(0, 0, 132);';
                        //tabletitle2.style.padding = '4px';
                        tablebodydisc = document.createElement('tbody');
                        tablebodydisc.style = 'display:table-header-group;vertical-align:middle;border-color:#000';
                        tablebodyarraydisc = []
                        eachelementdisc = []
                        for (i=0;i<Object.keys(discpeople).length;i++){
                            if (i%2==0&&i>3){
                                table_rowdisc = document.createElement('tr');
                                table_rowdisc.style.background = '#EDEDC8';
                                table_row1disc = document.createElement('td');
                                table_row1disc.align = 'center';
                                table_row1disc.colspan = '2';
                                table_row1disc.innerText = discpeople[Object.keys(discpeople)[i]][0];
                                table_row1disc.id = 'toolbaroption_disc'+i;
                                table_row1disc.style.padding = '4px';
                                table_rowdisc.appendChild(table_row1disc);
                                tablebodyarraydisc.push(table_rowdisc)
                                }
                            if (i%2==1&&i>3){
                                table_rowdisc = document.createElement('tr');
                                table_rowdisc.style.background = '#FFFDF4';
                                table_row1disc = document.createElement('td');
                                table_row1disc.align = 'center';
                            table_row1disc = document.createElement('td');
                                table_row1disc.align = 'center';
                                table_row1disc.colspan = '2';
                                table_row1disc.innerText = discpeople[Object.keys(discpeople)[i]][0];
                                table_row1disc.id = 'toolbaroption_disc'+i;
                                table_row1disc.style.padding = '4px';
                                table_rowdisc.appendChild(table_row1disc);
                                tablebodyarraydisc.push(table_rowdisc)
                                }
                            }

                        tablestartdisc.appendChild(tabletabledisc);
                        tabletabledisc.appendChild(tableheaddisc);
                        tabletabledisc.appendChild(tablebodydisc);
                        tableheaddisc.appendChild(tabletitledisc);
                        tabletitledisc.appendChild(tabletitle1disc);
                        for (i=0;i<tablebodyarraydisc.length;i++){
                            tablebodydisc.appendChild(tablebodyarraydisc[i]);
                            }
                        tabletitle1disc.appendChild(tabletitle2disc);
                        document.querySelector("body").insertBefore(tablestartdisc,document.querySelector("#aspnetForm"))
                        tabletitle1disc.style.paddingLeft = (((tablestartdisc.style.width.replace('px','') - tabletitle2disc.offsetWidth)/2) - 2).toString()+'px'
                        tabletitle1disc.style.paddingRight = (((tablestartdisc.style.width.replace('px','') - tabletitle2disc.offsetWidth)/2) - 2).toString()+'px'

                        for (i=0;i<tablebodyarraydisc.length;i++){
                            eachelementdisc.push(document.getElementById('toolbaroption_disc'+(i+4)))
                            }

                        eachelementdisc.forEach(function(buttodisc,index){
                            buttodisc.addEventListener('click', function() {
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = Object.keys(discpeople)[(index+4)];
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = discpeople[Object.keys(discpeople)[(index+4)]][1];
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                        })})                            
                                
                        }
                    else{
                        toolbaractivedisc = 0;
                        document.querySelector("#tablemaindisc").remove()
                        }


                    });
                                
                                
                
        //##        var otherpeople = {'pres0704':['Dillon','Laughter@1'],'pres0714':['Patrick','Donner@1']};
                document.getElementById('otherButton').addEventListener('click',function(event){
                    event.preventDefault();
                    //##insert variable 'otherpeople' from github page


        //##            var otherpeople = {'pres0704':['Dillon','1'],'pres0714':['Patrick','11'],'pres0718':['Angela','111']};
                    if (typeof toolbaractive === 'undefined' || toolbaractive == 0){
                        toolbaractive = 1
                        whereto = document.querySelector("#mainoutertable2 > tbody > tr:nth-child(3) > td");
                        tablestart = document.createElement('td');
                        tablestart.style = 'position:fixed;left:'+xioffset+'px;top:'+yioffset+'px;width:150px;border-top:0;border-style:solid;border-width:1px;border-color:#89978F;background:#99A992;border-width: 3px 1px 3px 2px;border-color: rgba(153, 169, 146, 1);'
                        tablestart.id='tablemain';
                        tabletable = document.createElement('table');
                        tabletable.cellPadding = '0';
                        tablehead = document.createElement('thead');
                        tablehead.style = 'display:table-header-group;vertical-align:middle;border-color:#000;';
                        tabletitle = document.createElement('tr');
                        tabletitle1 = document.createElement('td');
                        tabletitle2 = document.createElement('span');
                        tabletitle1.align = 'center';
                        tabletitle1.colspan = '2';
                        tabletitle2.innerText = 'Other Employees';
                        tabletitle2.style = 'border-color:#000084;color: rgb(0, 0, 132);';
                        //tabletitle2.style.padding = '4px';
                        tablebody = document.createElement('tbody');
                        tablebody.style = 'display:table-header-group;vertical-align:middle;border-color:#000';
                        tablebodyarray = []
                        eachelement = []
                        for (i=0;i<Object.keys(otherpeople).length;i++){
                            if (i%2==0&&i>3){
                                table_row = document.createElement('tr');
                                table_row.style.background = '#EDEDC8';
                                table_row1 = document.createElement('td');
                                table_row1.align = 'center';
                                table_row1.colspan = '2';
                                table_row1.innerText = otherpeople[Object.keys(otherpeople)[i]][0];
                                table_row1.id = 'toolbaroption_'+i;
                                table_row1.style.padding = '4px';
                                table_row.appendChild(table_row1);
                                tablebodyarray.push(table_row)
                                }
                            if (i%2==1&&i>3){
                                table_row = document.createElement('tr');
                                table_row.style.background = '#FFFDF4';
                                table_row1 = document.createElement('td');
                                table_row1.align = 'center';
                                table_row1.colspan = '2';
                                table_row1.innerText = otherpeople[Object.keys(otherpeople)[i]][0];
                                table_row1.id = 'toolbaroption_'+i;
                                table_row1.style.padding = '4px';
                                table_row.appendChild(table_row1);
                                tablebodyarray.push(table_row)
                                }
                            }

                        tablestart.appendChild(tabletable);
                        tabletable.appendChild(tablehead);
                        tabletable.appendChild(tablebody);
                        tablehead.appendChild(tabletitle);
                        tabletitle.appendChild(tabletitle1);
                        for (i=0;i<tablebodyarray.length;i++){
                            tablebody.appendChild(tablebodyarray[i]);
                            }
                        tabletitle1.appendChild(tabletitle2);
                        document.querySelector("body").insertBefore(tablestart,document.querySelector("#aspnetForm"))
                        tabletitle1.style.paddingLeft = (((tablestart.style.width.replace('px','') - tabletitle2.offsetWidth)/2) - 2).toString()+'px'
                        tabletitle1.style.paddingRight = (((tablestart.style.width.replace('px','') - tabletitle2.offsetWidth)/2) - 2).toString()+'px'

                        for (i=0;i<tablebodyarray.length;i++){
                            eachelement.push(document.getElementById('toolbaroption_'+(i+4)))
                            }

                        eachelement.forEach(function(butto,index){
                            butto.addEventListener('click', function() {
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_UserName').value = Object.keys(otherpeople)[(index+4)];
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_Password').value = otherpeople[Object.keys(otherpeople)[(index+4)]][1];
                                document.getElementById('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click();
                        })})


                        //##document.getElementById('toolbaroption_0').addEventListener('click',function(event){console.log('click')})
                        }
                    else{
                        toolbaractive = 0;
                        document.querySelector("#tablemain").remove()
                        document.querySelector("#tablemaindisc").remove()
                        }


                    });
            }
            }



        }

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
    if (typeof reversetoggle === 'undefined'){
        cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';
        reversetoggle = 0;
        }
    else{
        if (reversetoggle == 1){
        cpfirst.innerText = '\uD83D\uDCD7 Reverse Toggle';
        reversefunction();
            }
        else {
            cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';
            }
        }
       
    cpreverse.appendChild(cpfirst);
    cpfirst.appendChild(cpspace);
    cpfirst.appendChild(cpfirstlabel);
    document.querySelector("#ctl00_mnuWLL > ul").appendChild(cpreverse);
    }
//if (typeof reversetoggle === 'undefined'){var none = 0}else{if (reversetoggle ==1){reversefunction()}}
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
        //cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';
        
    }


document.querySelector("#ctl00_mnuWLL > ul > li.rtLi.first > div").addEventListener('click',function(event){
    event.preventDefault();
    if (typeof reversetoggle === 'undefined' || reversetoggle == 0){
        reversetoggle = 1;
        cpfirst.innerText = '\uD83D\uDCD7 Reverse Toggle';}
    else{
        reversetoggle = 0;
        cpfirst.innerText = '\uD83D\uDD34 Reverse Toggle';
    }
    reversefunction();
        
                            
    
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
            document.getElementById('ctl00_MainPlaceHolder_hidLastSearchTimeStamp').value = (new Date().getMinutes())*60+ new Date().getSeconds()-61
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
