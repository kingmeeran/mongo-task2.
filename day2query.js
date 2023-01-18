/*Design database for Zen class programme
users
codekata
attendance
topics
tasks
company_drives
mentors*/

 

//1.Find all the topics and tasks which are thought in the month of October
db.userdata.find({month:{$eq:"october"}},{topics:1,task:1,month:1}).pretty();
//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.userdata.find({$or:[{company_drive:"10/15/2020"},{company_drive:"10/31/2020"}]}).toArray();

//3.Find all the company drives and students who are appeared for the placement.

db.userdata.find({placement:{$eq:"attented"}},{company_drive:1,user:1,placement:1}).pretty();

//4.Find the number of problems solved by the user in codekata
db.userdata.find({},{user:1,codekatalan:1,codeproblem:1}).pretty();


//5.Find all the mentors with who has the mentee's count more than 15

db.userdata.find({menteecount:{$gte:15}},{mentors:1,menteecount:1}).pretty();


//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.userdata.find({$and:[{$or:[{taskdate:"10/15/2020"},{taskdate:"10/31/2020"}]}, {attendance:"absent"},{tasksubmission:"not_submited"}]}).toArray();