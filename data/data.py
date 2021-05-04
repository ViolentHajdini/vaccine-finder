Raw vaccination availabilities -> doctors & professionals post this

vaccination_center_name, vaccination_center_address, phone_number, vaccine_type, num_doses_needed, 


Rite Aid Pharmacy, 408 Grand Street, Manhattan, 10002, (800) 925-4733, Moderna (18+), 2


NYC Vaccine Hub - Essex Crossing, 244B Broome Street, Manhattan, 10002, (877) 829-4692, Moderna (18+), 2
NO FIRST DOSE APPOINTMENTS AVAILABLE


Walgreens/Duane Reade
100 Delancey Street, Manhattan, 10002
(800) 925-4733
Pfizer (16+)

Gotham Health, Gouverneur
227 Madison Street, Manhattan, 10002
Moderna (18+)

Century Pharmacy
225 Madison Street, Manhattan, 10002
(212) 227-5227
Moderna (18+)

Healthy Pharmacy 
108 Bowery, Manhattan, 10013
(212) 966-8682
Moderna (18+)

Rendr Care: Chinatown Medical Physician PC 
86 Bowery, 4th Floor, Manhattan, 10013
(212) 219-2883
Moderna (18+)

Rendr Care: Cheung and Kan Medical Group, PLLC Wheelchair access icon
19 Bowery, 2nd Floor Suite 8, Manhattan, 10002
(212) 226-2251
Moderna (18+)

Walgreens/Duane Reade
194 East 2nd Street, Manhattan, 10009
(800) 925-4733
Moderna (18+)

Mannings Pharmacy Corp. Wheelchair access icon
13 Elizabeth Street, Manhattan, 10013
Moderna (18+)

Ryan Health - Nena Community Health Center
279 East 3rd Street, Manhattan, 10009
Moderna (18+)

Walgreens/Duane Reade
60 Spring Street, Manhattan, 10012
(800) 925-4733
Pfizer (16+)

Rite Aid Pharmacy
81 1st Avenue, Manhattan, 10003
Moderna (18+)

Rendr Care: Metro True Care Medical, PC Wheelchair access icon
139 Centre Street, Suite 709, Manhattan, 10013
(646) 237-5530
Moderna (18+)

Total Foot and Ankle Care - Christopher Chow DPM PC Wheelchair access icon
139 Centre Street, Suite 702, Manhattan, 10013
(212) 226-6888
Johnson & Johnson (18+)

Rendr Care: Advanced Oncology PC Wheelchair access icon
139 Centre Street, 515, Manhattan, 10013
(212) 941-9020
Moderna (18+)

Charles B Wang Community Health Center
Community Health Center/Clinic
268 Canal Street, Manhattan, 10013
Moderna (18+)


Rite Aid Pharmacy
7 Madison Street, Manhattan, 10038
Moderna (18+)

Walgreens/Duane Reade
459 Broadway, Manhattan, 10013
(800) 925-4733
Pfizer (16+)

Apicha Primary Care Clinic
400 Broadway, Manhattan, 10013
(646) 744-1596
Moderna (18+)

Rite Aid Pharmacy
85 Avenue D, Manhattan, 10009
Moderna (18+)


NYC Health Dept. - Downtown Clinic Wheelchair access icon
1 Centre Street, Manhattan, 10007
(877) 829-4692
Moderna (18+)

NYC Health Dept. - Downtown Clinic Wheelchair access icon
Community Health Center/Clinic
1 Centre Street, Manhattan, 10007
(877) 829-4692
Moderna (18+)





Table (VC) Vaccination Centers
ID
name
Zip code
Address
Vaccine capacity
 
Vaccination_center, ID, int(64), integer
Vaccination_center, name, varchar(64), string
Vaccination_center, zip_code, varchar(64), string
Vaccination_center, address, varchar(64), string
Vaccination_center, capacity, carchar(64), string 
 
Table (V) Vaccines
Expiration date
ID
Number of shots needed
Patient
 
Vaccine, ID, int(64), integer
Vaccine, expiration date, datetime, datetime
Vaccine, number of shots needed, 1 to 2, integer
 
Table (R) Registrants
ID
Address
Street 
Apt
City
State
Zip code
Country
Need Vaccination
Email 
Phone number
Vaccination_info
Availability
 
Registrant, ID, int(64), integer
Registrant, address, varchar(64), string
Registrant, need_vaccination, boolean, boolean
Registrant, email, varchar(64) + needs @ symbol, string
Registrant, phone_number, int(64), integer