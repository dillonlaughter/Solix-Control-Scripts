##Python script
##
##activated and kept running by external source
##simulated each person logging in
##count phones for the day
##store data somewhere, where it can be acessed by alexa? (in excel)



#alexa activate production log (change cell to a one)
#and clear out 'previous' production column
#say on sms/groupme that production log has been turned on IF SCRIPT IS RUNNING


#--------------------------#
#------ESN TRACKER---------#
#--------------------------#

#--------------------------#
#------new day-------------#
#--------------------------#
#remove all user data from excel
#add names to excel
#add usernames to excel
#add passwords to excel

#--------------------------#
#------add names to excel--#
#--------------------------#

#--------------------------#
#------looped fuction------#
#--------------------------#

#--------------------------#
#------end of day count----#
#--------------------------#

##loop retrieving data from excel
##check if 'on' button is equal to True:
#.#    web scrape current employees based on github file
#.#    store in excel on column 'x'
#.#    loop over each current employee:
#.#        simulate logging into their account get their current production
#.#        store current production in column 'y'
#.#    check if previous production (column 'z') is different as column 'y':
#.#        set column 'z'[employee] to column 'y'[employee]
##        say new production for that person to chat
        
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import time
from groupy.client import Client as groupmeClient
gmclient = groupmeClient.from_token('mEd2vWApuNMkbnSAaHHddzoKHLwpecExfZR0E9ql')
for gmgroups in gmclient.groups.list():
    if gmgroups.name == 'AW Production Log':
        gmlog = gmgroups

scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
credentials = ServiceAccountCredentials.from_json_keyfile_name('Hurley Production-54b7dbd26519.json',scope)
gc = gspread.authorize(credentials)
wks = gc.open('Hurley Enterprises Production Log').sheet1
browser = webdriver.Chrome()

##print(wks.get_all_records())
##
##print(wks.cell(2,3).value)
##print(wks.cell(9,3).value)
##print(wks.cell(10,3).value)
complete_messages = ['Complete. If customer present, dial 611 for test call and give phone','Complete. If customer present make test call and give phone']
def send_to_groupme(name,count):
##    for gmmessage in gmlog.messages.list_all():
##        print(gmmessage.text)
    if count != 0:
        gmlog.post(text=name+' is now at '+str(count))
t1_s= time.process_time()
#for( 'every 2 minutes'):
##while (1==1):
if 1==1:
    activation = wks.cell(2,1).value
    #wks.update_cell(2,1,'1')
    if activation == '1':
        employee_count = int(wks.cell(2,3).value)
        for employee_number in range(employee_count):
            browser.get('https://solixlifeline.com')
            time.sleep(3)#-#
            browser.find_element_by_id('ctl00_GeneralContentPlaceHolder_Login1_UserName_text').send_keys(wks.cell(employee_number+2,8).value)
            browser.find_element_by_id('ctl00_GeneralContentPlaceHolder_Login1_Password_text').send_keys(wks.cell(employee_number+2,9).value)
            time.sleep(3)#-#
            browser.find_element_by_id('ctl00_GeneralContentPlaceHolder_Login1_LoginButton').click()
            time.sleep(7)#-#
            browser.find_element_by_id('ctl00_MainPlaceHolder_radtbDate_dateInput_text').send_keys('8/23/19')
            time.sleep(3)#-#
            browser.find_element_by_id('ctl00_MainPlaceHolder_btnSearch').click()
            time.sleep(12)#-#
            complete_count = 0
            app_count = int(browser.find_element_by_xpath('//*[@id="ctl00_MainPlaceHolder_radgrdSearchRetailCustomers_ctl00"]/tbody').get_attribute('childElementCount'))
            if app_count > 2:
                for each_app in range(int(browser.find_element_by_xpath('//*[@id="ctl00_MainPlaceHolder_radgrdSearchRetailCustomers_ctl00"]/tbody').get_attribute('childElementCount'))):
                    if(browser.find_element_by_xpath('//*[@id="ctl00_MainPlaceHolder_radgrdSearchRetailCustomers_ctl00__'+str(each_app)+'"]/td[7]').get_attribute('innerText') in complete_messages):
                        complete_count +=1
    ##        complete_count = 1
            wks.update_cell(employee_number+2,5,complete_count)
            employee_previous = wks.cell(employee_number+2,6).value
            if employee_previous != wks.cell(employee_number+2,5).value:
                wks.update_cell(employee_number+2,6,complete_count)
                send_to_groupme(wks.cell(employee_number+2,4).value,complete_count)
    else:
        time.sleep(10)
t1_ = time.process_time()
print(t1_-t1_s)


        

