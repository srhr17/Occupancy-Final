const express = require('express');
const app = express();
const port = 8000;
var cors=require("cors");
const mysql = require('mysql');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());


var mysqlConnection = mysql.createConnection({
	host: 'occupancychart.cmauel5myhvk.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: 'occupancy',
	database: 'occupancy'
});

mysqlConnection.connect((err) => {
	if (!err) console.log('Connection succeeded.');
	else console.log('Unsuccessful \n Error : ' + JSON.stringify(err, undefined, 2));
});

// app.post('/mytimetable', function(req, res) {
// 	var fid = req.body.fid;
// 	var sem = req.body.sem;
// 	console.log(fid + ' hola ' + sem);
// 	res.writeHead(200, { 'content-type': 'text/html' });
// 	mysqlConnection.query(
// 		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.faculty where sem=? and fname=(select fname from facultyid where fid=?)',
// 		[ sem, fid ],
// 		function(err, result, fields) {
// 			if (!err) {
// 				for (let i = 0; i < result.length; i++) {
// 					res.write(
// 						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
// 							result[i].day +
// 							'</h4> <h1>  Period 1: </h1> <h4>' +
// 							result[i].p1 +
// 							'</h4><h1>   Period 2: </h1><h4>' +
// 							result[i].p2 +
// 							'</h4> <h1>  Period 3: </h1> <h4>' +
// 							result[i].p3 +
// 							'</h4><h1>   Period 4: </h1><h4>' +
// 							result[i].p4 +
// 							'</h4> <h1>  Period 5: </h1> <h4>' +
// 							result[i].p5 +
// 							'</h4><h1>   Period 6: </h1><h4>' +
// 							result[i].p6 +
// 							'</h4> <h1>  Period 7: </h1> <h4>' +
// 							result[i].p7 +
// 							'</h4><h1>   Period 8: </h1><h4>' +
// 							result[i].p8 +
// 							'</h4><h1>   Period 9: </h1><h4>' +
// 							result[i].p9 +
// 							'</h4> <hr> </body>'
// 					);
// 				}
// 			}
// 		}
// 	);
// });

// app.post('/roomtimetable', function(req, res) {
// 	var room = req.body.roomno;
// 	res.writeHead(200, { 'content-type': 'text/html' });
// 	mysqlConnection.query(
// 		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.room where room=?',
// 		[ room ],
// 		function(err, result, fields) {
// 			if (!err) {
// 				for (let i = 0; i < result.length; i++) {
// 					res.write(
// 						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
// 							result[i].day +
// 							'</h4> <h1>  Period 1: </h1> <h4>' +
// 							result[i].p1 +
// 							'</h4><h1>   Period 2: </h1><h4>' +
// 							result[i].p2 +
// 							'</h4> <h1>  Period 3: </h1> <h4>' +
// 							result[i].p3 +
// 							'</h4><h1>   Period 4: </h1><h4>' +
// 							result[i].p4 +
// 							'</h4> <h1>  Period 5: </h1> <h4>' +
// 							result[i].p5 +
// 							'</h4><h1>   Period 6: </h1><h4>' +
// 							result[i].p6 +
// 							'</h4> <h1>  Period 7: </h1> <h4>' +
// 							result[i].p7 +
// 							'</h4><h1>   Period 8: </h1><h4>' +
// 							result[i].p8 +
// 							'</h4><h1>   Period 9: </h1><h4>' +
// 							result[i].p9 +
// 							'</h4> <hr> </body>'
// 					);
// 				}
// 			}
// 		}
// 	);
// 	console.log(room);
// });
// function checkfree(period, pno) {
// 	var str = '';
// 	if (period == 'Free') {
// 		str = '<h1>  Period ' + pno + ': </h1> <h4>' + period + '</h4>';

// 		return str;
// 	} else {
// 		str = '';
// 		return str;
// 	}
// }
// app.post('/freeslotsfaculty', function(req, res) {
// 	var fid = req.body.fid;
// 	var sem = req.body.sem;
// 	console.log(fid + ' hola2 ' + sem);
// 	res.writeHead(200, { 'content-type': 'text/html' });
// 	mysqlConnection.query(
// 		'SELECT day as day,period1 as p1,period2 as p2,period3 as p3,period4 as p4,period5 as p5,period6 as p6,period7 as p7,period8 as p8,period9 as p9 FROM occupancy.faculty where sem=? and fname=(select fname from facultyid where fid=?)',
// 		[ sem, fid ],
// 		function(err, result, fields) {
// 			if (!err) {
// 				for (let i = 0; i < result.length; i++) {
// 					res.write(
// 						'<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
// 							result[i].day +
// 							'</h4> ' +
// 							checkfree(result[i].p1, 1) +
// 							checkfree(result[i].p2, 2) +
// 							checkfree(result[i].p3, 3) +
// 							checkfree(result[i].p4, 4) +
// 							checkfree(result[i].p5, 5) +
// 							checkfree(result[i].p6, 6) +
// 							checkfree(result[i].p7, 7) +
// 							checkfree(result[i].p8, 8) +
// 							checkfree(result[i].p9, 9) +
// 							'</h4> <hr> </body>'
// 					);
// 				}
// 			}
// 		}
// 	);
// 	console.log('hola2');
// });
app.post('/daywise',function(req,res){
    console.log("Inside post /login method");

      var day = req.body.day;
      var room = req.body.room;
      var year=req.body.year;
      var sem=req.body.sem;
    
     
      var period1=req.body.period1;
      var period2=req.body.period2;
      var period3=req.body.period3;
      var period4=req.body.period4;
      var period5=req.body.period5;
      var period6=req.body.period6;
      var period7=req.body.period7;
      var period8=req.body.period8;
      var period9=req.body.period9;
      var sql="select * from room where day='"+day+"'";
      mysqlConnection.query(sql,function(err,result,fields)
    
    {
          if (err) throw err;
        //   console.log(sem + " " + year + " " + section);
         
          var day=result[0].day;
          var year=result[0].year;
          var room=result[0].room;
          var sem=result[0].sem;
    
          var period1=result[0].period1;
          var period2=result[0].period2;
          var period3=result[0].period3;
          var period4=result[0].period4;
          var period5=result[0].period5;
          var period6=result[0].period6;
          var period7=result[0].period7;
          var period8=result[0].period8;
          var period9=result[0].period9;
     
          res.render('../../studentroomwiseserver.ejs', {records:result,sem:sem,year:year,day:day,room:room,period1:period1,period2:period2,period3:period3,period4:period4,period5:period5,period6:period6,period7:period7,period8:period8,period9:period9 });
         console.log("success");
          
  });
});
app.post('/roomwise',function(req,res){
  
    var day = req.body.day;
    var room = req.body.room;
    var year=req.body.year;
    var sem=req.body.sem;
  
   
    var period1=req.body.period1;
    var period2=req.body.period2;
    var period3=req.body.period3;
    var period4=req.body.period4;
    var period5=req.body.period5;
    var period6=req.body.period6;
    var period7=req.body.period7;
    var period8=req.body.period8;
    var period9=req.body.period9;
    var sql="select * from room where room='"+room+"' and day='"+day+"'";
    mysqlConnection.query(sql,function(err,result,fields)
  
  {
        if (err) throw err;
      //   console.log(sem + " " + year + " " + section);
       
        var day=result[0].day;
        var year=result[0].year;
        var room=result[0].room;
        var sem=result[0].sem;
  
        var period1=result[0].period1;
        var period2=result[0].period2;
        var period3=result[0].period3;
        var period4=result[0].period4;
        var period5=result[0].period5;
        var period6=result[0].period6;
        var period7=result[0].period7;
        var period8=result[0].period8;
        var period9=result[0].period9;
   
        res.render('../../studentroomwiseserver.ejs', {records:result,sem:sem,year:year,day:day,room:room,period1:period1,period2:period2,period3:period3,period4:period4,period5:period5,period6:period6,period7:period7,period8:period8,period9:period9 });
       console.log("success");
});
});
app.post("/time", function(req, res) {
	console.log("Inside post /login method");
  console.log(req.body);
	var sem = req.body.sem;
	var year = req.body.year;
	var section = req.body.section;
	var day=req.body.day;
	var period1=req.body.period1;
	var period2=req.body.period2;
	var period3=req.body.period3;
	var period4=req.body.period4;
	var period5=req.body.period5;
	var period6=req.body.period6;
	var period7=req.body.period7;
	var period8=req.body.period8;
	var period9=req.body.period9;
	var sql="select * from studenttime where sem='"+sem+"'  and section='"+section+"'";
	mysqlConnection.query(sql,function(err,result,fields)
  //   mysqlConnection.query("select * from time where sem='"+sem+"' and year='"+year+"' and section='"+section+'"',
  //     function(err, result, fields) 
  {
		if (err) throw err;
		console.log(sem + " "+ section);
	   //res.send("SEM:"+result[0].sem+ " <br/> " + "YEAR:    "+result[0].year+"<br/>"+"SECTION:"+result[0].section+");
	
		var sem=result[0].sem;
		var year=result[0].year;
		var section=result[0].section;
		var day=result[0].day;
		var period1=result[0].period1;
		var period2=result[0].period2;
		var period3=result[0].period3;
		var period4=result[0].period4;
		var period5=result[0].period5;
		var period6=result[0].period6;
		var period7=result[0].period7;
		var period8=result[0].period8;
		var period9=result[0].period9;
   
		res.render('../../studenttimeserver.ejs', {records:result,sem:sem,section:section,year:year,period1:period1,period2:period2,period3:period3,period4:period4,period5:period5,period6:period6,period7:period7,period8:period8,period9:period9 });
	  //  res.render(path.join(__dirname+'/Users/chetan/Downloads/chetan/Software Engineering/project/app/src/table.ejs'),{sem:sem,year:year,section:section,state:state});
		console.log("success");
		
  
	 
	  }
	);
  
	
  });
  
  
  app.post("/free", function(req, res) {
	console.log("Inside post /login method");
  
	var sem = req.body.sem;
	var year = req.body.year;
	var section = req.body.section;
	var day=req.body.day;
	var period1=req.body.period1;
	var period2=req.body.period2;
	var period3=req.body.period3;
	var period4=req.body.period4;
	var period5=req.body.period5;
	var period6=req.body.period6;
	var period7=req.body.period7;
	var period8=req.body.period8;
	var period9=req.body.period9;
	var sql="select * from studenttime where sem='"+sem+"' and section='"+section+"'";
	mysqlConnection.query(sql,function(err,result,fields)
  //   mysqlConnection.query("select * from time where sem='"+sem+"' and year='"+year+"' and section='"+section+'"',
  //     function(err, result, fields) 
  {
		if (err) throw err;
		console.log(sem + " " + year + " " + section);

	
		var sem=result[0].sem;
		var year=result[0].year;
		var section=result[0].section;
		var day=result[0].day;
		var period1=result[0].period1;
		var period2=result[0].period2;
		var period3=result[0].period3;
		var period4=result[0].period4;
		var period5=result[0].period5;
		var period6=result[0].period6;
		var period7=result[0].period7;
		var period8=result[0].period8;
		var period9=result[0].period9;
   
		res.render('../../studentfree.ejs', {records:result,sem:sem,section:section,year:year,period1:period1,period2:period2,period3:period3,period4:period4,period5:period5,period6:period6,period7:period7,period8:period8,period9:period9 });
	  //  res.render(path.join(__dirname+'/Users/chetan/Downloads/chetan/Software Engineering/project/app/src/table.ejs'),{sem:sem,year:year,section:section,state:state});
		console.log("success");
		
  
	 
	  }
	);
  
  });

  app.post("/signup", function (req, res) {
    //res.writeHead(200, { "Content-Type": "text/html" });
     var id = req.body.id;
     var password = req.body.password;
     var usertype = req.body.usertype;
     console.log("inside the server");
    console.log(req.body)
     if (usertype == 1) {
         console.log("keshavusertype");
        mysqlConnection.query("select count(*) as count from user where id=?",[id], function (ierr, iresult, ifields) {
            console.log(iresult[0].count)
            if (iresult[0].count == 0) {
                console.log("ke");
                mysqlConnection.query("insert into user values(?,?,?)", [id,password,usertype]
         ,
             function (err, result1, fields) {
                 
                //  mysqlConnection.query("select usertype as usertype,id as id,password as password from user where id=? and password=?",[id, password], function (rerr, rresult, rfields) {
 
                //          if (err) throw err;
                //          console.log("YESSSS "+rresult[0].usertype+rresult[0].id);
                //          res.send(rresult);

                         
                //      }
                //  );
                console.log("hola");
                mysqlConnection.query("select (select fname from facultyid where fid=?) as fname,(select fid from facultyid where fid=?) as fid,(select usertype from user where id=?) as usertype from dual;",[id,id,id],function (berr,bresult,bfields) {
                  console.log(bresult[0].usertype);
                  res.send(bresult);
                });
 
             }
         );
            }
            else{
                console.log('else')
                res.send(
                    {message:'already user exists'}
                );
            }

        });
         
     }
     
     
     if (usertype == 2) {
        mysqlConnection.query("select count(*) as count from user where id=?", [id], function (ierr, iresult, ifields) {
            console.log(iresult)
            if (iresult[0].count == 0) {
                console.log("ke");
                mysqlConnection.query("insert into user values(?,?,?)", [id,password,usertype]
         ,
             function (err, result1, fields) {
                 if (err) throw err;
                 console.log("hola");
                 mysqlConnection.query("select usertype,id,password from user where id=? and password=?",[id,password],function (berr,bresult,bfields) {
                   console.log(bresult[0].usertype);
                   res.send(bresult);
                 });
 
             }
         );
            }
            else{
                console.log('else')
                res.send(
                    {message:'user exist already'}
                );
            }

        });
         
     }
     
     
     if (usertype == 3) {
        mysqlConnection.query("select count(*) as count from user where id=? ", [id], function (ierr, iresult, ifields) {
            console.log(iresult)
            if (iresult[0].count == 0) {
                console.log("ke");
                mysqlConnection.query("insert into user values(?,?,?)", [id,password,usertype]
         ,
             function (err, result1, fields) {
                 if (err) throw err;
                 console.log(result1);  
                 mysqlConnection.query("select usertype,id,password from user where id=? and password=?",[id, password], function (rerr, rresult, rfields) {
 
                         if (err) throw err;
                         res.send(rresult);
                         
                     }
                 );
 
             }
         );
            }
            else{
                console.log('else')
                res.send(
                    {message:'user exist already'}
                );
            }

        });
         
     }
     
     
 
 
 
 });

 app.post('/login', function (req, res) {
  console.log("inside login");

  var id = req.body.id;
  var password = req.body.password;
  var usertype = req.body.usertype;
 
  if (usertype == 1) {
      console.log(usertype);
      mysqlConnection.query("select count(*) as count from user where id=? and password=?", [id, password], function (ierr, aresult, ifields) {
          console.log(aresult)
          if (aresult[0].count == 1) {
              console.log("ke");
              mysqlConnection.query("update user set count=0 where id=? and password=?", [id,password]);
              mysqlConnection.query("select usertype,id,password,count from user where id=? and password=?",[id, password], function (rerr, rresult, rfields) {
                  
                  console.log(rresult);
                  res.send(rresult);


              });
          }
          else{
              mysqlConnection.query("update user set count=count+1 where id=?", [id], function (zerr, zresult, zfields) {
                  mysqlConnection.query("select usertype,id,count from user where id=?",[id], function (xerr, xresult, xfields) {
                  
                      console.log(xresult);
                      res.send(xresult);
  
  
                  });

              });
          }

      });
  }
  if (usertype == 2) {
      mysqlConnection.query("select count(*) as count from user where id=? and password=?", [id, password], function (ierr, aresult, ifields) {
          console.log(aresult[0].count)
          if (aresult[0].count == 1) {
              mysqlConnection.query("update user set count=0 where id=? and password=?", [id,password], function (zerr, zresult, zfields) {});
              mysqlConnection.query("select usertype,id,password,count from user where id=? and password=?",[id, password], function (rerr, rresult, rfields) {

                  res.send(rresult);


              });
          }
          else{
              mysqlConnection.query("update user set count=count+1 where id=?", [id], function (zerr, zresult, zfields) {
                  mysqlConnection.query("select usertype,id,count from user where id=?",[id], function (xerr, xresult, xfields) {
                  
                      console.log(xresult);
                      res.send(xresult);
  
  
                  });

              });
          }

      });
  }
  if (usertype == 3) {
    
      mysqlConnection.query("select count(*) as count from user where id=? and password=?", [id, password], function (ierr, aresult, ifields) {
          console.log(aresult[0].count)
          if (aresult[0].count == 1) {
              mysqlConnection.query("update user set count=0 where id=? and password=?", [id,password], function (zerr, zresult, zfields) {});
              mysqlConnection.query("select usertype,id,password,count from user where id=? and password=?",[id, password], function (rerr, tresult, rfields){

                  res.send(tresult);


              });
          }
          else{
              mysqlConnection.query("update user set count=count+1 where id=?", [id], function (zerr, zresult, zfields) {
                  mysqlConnection.query("select usertype,id,count from user where id=?",[id], function (xerr, xresult, xfields) {
                  
                      console.log(xresult);
                      res.send(xresult);
  
  
                  });

              });
          }

      });
  }

  // console.log(req.body)
  // mysqlConnection.query("select count(*) as count from admin", function (ierr, iresult, ifields) {
  //     console.log(iresult[0].count)
  //     res.send(iresult);
  // });


});

app.post('/forgotpassword', function (req, res) {
  console.log("forgotpassword");
  console.log(req.body)
  var id = req.body.id;
  var password = req.body.password;
  //var new_password = req.body.new_password;
  mysqlConnection.query("update user set password=? where id=?", [password, id], function (ierr, iresult, ifields) {
      mysqlConnection.query("update user set count=0 where id=?", [id], function (qerr, qresult, qfields) {
      

      });

  });
  
  
});


app.post('/View', function (req, res) {
  
	console.log("inside view");
	var sem0 = req.body.sem0; 
	var y0= req.body.y0;
	var sec0= req.body.sec0;
   
  mysqlConnection.query("select *  from studenttime where sem='"+req.body.sem0+"' and year='"+req.body.y0+"'  and section='"+req.body.sec0+"' ", function(err, result, fields) {
	   
		if (!err) {
		  if(result.length===0){
			res.send("no data");
		  }
	  else
	  {
      mysqlConnection.query("SELECT * FROM studenttime where sem='"+sem0+"'and year='"+y0+"' and section='"+sec0+"' ", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		var sem=result[0].sem;
		var year=result[0].year;
		var section=result[0].section;
		var day=result[0].day;
		var period1=result[0].period1;
		var period2=result[0].period2;
		var period3=result[0].period3;
		var period4=result[0].period4;
		var period5=result[0].period5;
		var period6=result[0].period6;
		var period7=result[0].period7;
		var period8=result[0].period8;
		var period9=result[0].period9;
		res.render('../../adminstudenttime.ejs', {records:result });
		console.log("success");
	  });
	}
	}
  
  });});
  
  
  
  app.post("/INSERT", function(req, res) {
	console.log("Inside post /INSERT method"); 
  
	var sec1 = req.body.sec1;
	var sem1 = req.body.sem1; 
	var y1 = req.body.y1; 
	var day1=req.body.day1;
	var fh1 = req.body.fh1; 
	var sh1= req.body.sh1;
	var th1 = req.body.th1; 
	var foh1= req.body.foh1;
	var fih1= req.body.fih1; 
	var sih1= req.body.sih1;
	var seh1 = req.body.seh1; 
	var eh1= req.body.eh1;  
	var nh1= req.body.nh1;
	 mysqlConnection.query("select *  from studenttime where sem='"+req.body.sem1+"' and year='"+req.body.y1+"' and day='"+req.body.day1+"' and section='"+req.body.sec1+"' ", function(err, result, fields) {
	   if (!err) {
		 
		  if(result.length===0)
			  {
			  var sql2 = "INSERT INTO studenttime (sem,year,section,day,period1,period2,period3,period4,period5,period6,period7,period8,period9) VALUES ('"+req.body.sem1+"','"+req.body.y1+"','"+req.body.sec1+"','"+req.body.day1+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+"')";
	  mysqlConnection.query(sql2, function (err, result) {
	   console.log("1 record inserted");
	   res.send("inserted");
	  });
	  
		 }
		 else{
		   console.log("already there");
		   res.send("already there");
		 }
	   
	   } 
			  else {
		 console.log("err");
		 res.end();
	   }
	 });
  });
  
   
  
  
  
  
  
   
  
  app.post("/MODIFY", function(req, res) {
  console.log("Update post /UPDATE method");
  
  var sec2=req.body.sec2;
  var sem2 = req.body.sem2; 
  var y2 = req.body.y2;
  var day2=req.body.day2; 
  var fh2 = req.body.fh2; 
  var sh2= req.body.sh2;
  var th2 = req.body.th2; 
  var foh2= req.body.foh2;
  var fih2= req.body.fih2; 
  var sih2= req.body.sih2;
  var seh2 = req.body.seh2; 
  var eh2= req.body.eh2;  
  var nh2= req.body.nh2; 
  mysqlConnection.query("select *  from studenttime where sem='"+req.body.sem2+"' and year='"+req.body.y2+"' and day='"+req.body.day2+"' and section='"+req.body.sec2+"' ", function(err, result, fields) {
	if (!err) {
	  if(result.length===1)
	  {
  
  var sql3="UPDATE studenttime set period1='"+fh2+"', period2='"+sh2+"' ,period3='"+th2+"',period4='"+foh2+"',period5='"+fih2+"',period6='"+sih2+"',period7='"+seh2+"',period8='"+eh2+"',period9='"+nh2+"' where sem='"+sem2+"' and year='"+y2+"' and section='"+sec2+"' and day='"+day2+"' ";
  //var sql3 = "UPDATE Room set fir_hr='"+fh2+"' where room_no='"+r3+"'";
  mysqlConnection.query(sql3, function (err, result) {
	
	  console.log("1 record updated");
	});
	res.send("1 record successfully updated");}
	else{
	  res.send("CANNOT UPDATE AS DATABASE DOES NOT HAVE ENTERED DATA");
	}
  }
  });});

  app.post("/ViewROOM", function(req, res) {
	
	var r1 = req.body.r1;
  var sem0 = req.body.sem0; 
  var y0 = req.body.y0; 
  
  mysqlConnection.query("select *  from room where sem='"+req.body.sem0+"' and year='"+req.body.y0+"'  and room='"+req.body.r1+"' ", function(err, result, fields) {
     if (!err) {
       
     
     
      if(result.length===0){

       res.send("no data");
       console.log("no data");
        }
        else
        {
          var sql1="select *  from room where sem='"+req.body.sem0+"' and year='"+req.body.y0+"' and room='"+req.body.r1+"' ";
          mysqlConnection.query(sql1, function (err, result, fields) {
            if (err) throw err;
            
            var sem=result[0].sem;
          
            var year=result[0].year;
            var day=result[0].day;
            var room=result[0].room;
            
            var period1=result[0].period1;
            var period2=result[0].period2;
            var period3=result[0].period3;
            var period4=result[0].period4;
            var period5=result[0].period5;
            var period6=result[0].period6;
            var period7=result[0].period7;
            var period8=result[0].period8;
            var period9=result[0].period9;
            res.render('../../adminroomtimetable.ejs', {records:result });
            console.log("success");
          });
        }
     
     } 
			else {
       console.log("not there");
       res.send("not there");
     }
   });
 });

   

 app.post("/INSERTROOM", function(req, res) {
	
	var r2 = req.body.r2;
  var sem1 = req.body.sem1; 
  var y1 = req.body.y1; 
  var day1=req.body.day1;
  var fh1 = req.body.fh1; 
  var sh1= req.body.sh1;
  var th1 = req.body.th1; 
  var foh1= req.body.foh1;
  var fih1= req.body.fih1; 
  var sih1= req.body.sih1;
  var seh1 = req.body.seh1; 
  var eh1= req.body.eh1;  
  var nh1= req.body.nh1;
  mysqlConnection.query("select *  from room where sem='"+req.body.sem1+"' and year='"+req.body.y1+"' and day='"+req.body.day1+"' and room='"+req.body.r2+"' ", function(err, result, fields) {
     if (!err) {
      //console.log(result);
        if(result.length===0)
			{
        
			var sql2 = "INSERT INTO room (sem,year,day,room,period1,period2,period3,period4,period5,period6,period7,period8,period9) VALUES ('"+req.body.sem1+"','"+req.body.y1+"','"+req.body.day1+"','"+req.body.r2+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+"')";
      mysqlConnection.query(sql2, function (err, result) {
     console.log("1 record inserted");
     res.send("inserted successfully");
    });
    
       }
       else{
         console.log("already there");
         res.send("already there");
       }
     
     } 
			else {
       console.log("err");
       res.end();
     }
   });
 });

   

app.post("/MODIFYROOM", function(req, res) {
  console.log("Update post /UPDATE method");
  
  var sem2 = req.body.sem2; 
  var y2 = req.body.y2; 
  var r3 = req.body.r3; 
  var day2=req.body.day2;

  var fh2 = req.body.fh2; 
  var sh2= req.body.sh2;
  var th2 = req.body.th2; 
  var foh2= req.body.foh2;
  var fih2= req.body.fih2; 
  var sih2= req.body.sih2;
  var seh2 = req.body.seh2; 
  var eh2= req.body.eh2;  
  var nh2= req.body.nh2; 
  
  mysqlConnection.query("select *  from room where sem='"+req.body.sem2+"' and year='"+req.body.y2+"' and day='"+req.body.day2+"' and room='"+req.body.r3+"' ", function(err, result, fields) {
    if (!err) {
      
       if(result.length===1)
     {
      var sql3="UPDATE room set period1='"+fh2+"', period2='"+sh2+"' ,period3='"+th2+"',period4='"+foh2+"',period5='"+fih2+"',period6='"+sih2+"',period7='"+seh2+"',period8='"+eh2+"',period9='"+nh2+"' where sem='"+sem2+"' and year='"+y2+"' and room='"+r3+"' and day='"+day2+"' ";


      mysqlConnection.query(sql3, function (err, result) {
    console.log("1 record updated");
  res.send("updated");
   });
   
      }
      else{
        console.log("THE SELECTED ENTRIES FOR MODIFICATION ARE NOT PRESENT IN DATABASE");
        res.send("THE SELECTED ENTRIES FOR MODIFICATION ARE NOT PRESENT IN DATABASE");
      }
    
    } 
     else {
      console.log("err");
      res.end();
    }
  });
});


app.post("/ViewFACULTY", function(req, res) {
	
	var fid0 = req.body.fid0;
  var sem0 = req.body.sem0; 
  
  mysqlConnection.query("select *  from faculty where sem='"+req.body.sem0+"' and fname='"+req.body.fid0+"' ", function(err, result, fields) {
     if (!err) {
       
     
     
      if(result.length===0){

       res.send("no data");
       console.log("no data");
        }
        else
        {
          var sql1="select *  from faculty where sem='"+req.body.sem0+"' and fname='"+req.body.fid0+"' ";
          mysqlConnection.query(sql1, function (err, result, fields) {
            if (err) throw err;
            
            var sem=result[0].sem;
          
            var fname=result[0].fname;
            var day=result[0].day;
           
            
            var period1=result[0].period1;
            var period2=result[0].period2;
            var period3=result[0].period3;
            var period4=result[0].period4;
            var period5=result[0].period5;
            var period6=result[0].period6;
            var period7=result[0].period7;
            var period8=result[0].period8;
            var period9=result[0].period9;
            res.render('../../adminfacultytimetable.ejs', {records:result });
            console.log("success");
          });
        }
     
     } 
			else {
       console.log("not there");
       res.send("not there");
     }
   });
 });

   
app.post("/INSERTFACULTY", function(req, res) {
  console.log("Inside post /INSERT method");
var fid1 = req.body.fid1;
var fn1=req.body.fn1
var sem1 = req.body.sem1; 
//var y1 = req.body.y1;
var day1=req.body.day1; 
  var fh1 = req.body.fh1; 
  var sh1= req.body.sh1;
  var th1 = req.body.th1; 
  var foh1= req.body.foh1;
  var fih1= req.body.fih1; 
  var sih1= req.body.sih1;
  var seh1 = req.body.seh1; 
  var eh1= req.body.eh1;  
  var nh1= req.body.nh1; 
  mysqlConnection.query("select *  from facultyid where fid='"+req.body.fid1+"'  and  fname='"+req.body.fn1+"' ", function(err, result, fields) {
    if (!err) {
       if(result.length===0)
     {
      var sql5 = "INSERT INTO facultyid (fid,fname) VALUES ('"+req.body.fid1+"','"+req.body.fn1+"')";
   

      mysqlConnection.query(sql5, function (err, result) {
    console.log("1 record inserted into facultyid");
  res.send("inserted into facultyid");
   });
   
  }
  else{
    console.log("already id is in facid table");
    res.send("already id is in facid table");
  }
    } 
     else {
      console.log("err");
      res.end();
    }

  });


  mysqlConnection.query("select *  from faculty where sem='"+req.body.sem1+"'  and day='"+req.body.day1+"' and fname='"+req.body.fn1+"' ", function(err, result, fields) {
    if (!err) {
       if(result.length===0)
     {
      var sql2 = "INSERT INTO faculty (fname,sem,day,period1,period2,period3,period4,period5,period6,period7,period8,period9) VALUES ('"+req.body.fn1+"','"+req.body.sem1+"','"+req.body.day1+"','"+req.body.fh1+"','"+req.body.sh1+"','"+req.body.th1+"','"+req.body.foh1+"','"+req.body.fih1+"','"+req.body.sih1+"','"+req.body.seh1+"','"+req.body.eh1+"','"+req.body.nh1+"')";
   

      mysqlConnection.query(sql2, function (err, result) {
    console.log("1 record inserted");
  res.send("inserted");
   });
   
  }
  else{
    console.log("already there");
    res.send("already there");
  }
    } 
     else {
      console.log("err");
      res.end();
    }

  });

  
});

app.post("/feat", function(req, res) {
  console.log("Inside post /login method");
  var room=req.body.room;
  var proj=req.body.proj;
  var ac=req.body.ac;
  var socket=req.body.socket;
  var sb=req.body.sb;
  var mb=req.body.mb;
  var mic=req.body.mic;

  var sql="select * from feat where projector='"+proj+"' and ac='"+ac+"' and skt='"+socket+"' and sb='"+sb+"' and mb='"+mb+"' and mic='"+mic+"'";

  
  mysqlConnection.query(sql,function(err,result,fields)

{
      if (err) throw err;

  if(result.length>0){
      var roomno=result[0].roomno;
      var projector=result[0].projector;
      var ac=result[0].ac;
      var skt=result[0].skt;
      var sb=result[0].sb;
      var mb=result[0].mb;
      var mic=result[0].mic;
   
 
      res.render('../../studentfeat.ejs', {records:result,roomno:roomno,projector:projector,ac:ac,skt:skt,sb:sb,mb:mb,mic:mic});
    //  res.render(path.join(__dirname+'/Users/chetan/Downloads/chetan/Software Engineering/project/app/src/table.ejs'),{sem:sem,year:year,section:section,state:state});
      console.log("success");
  }
  else{
    {
      res.send("There are no rooms available with specified features");
  }
  }
  

   
    }
  );

});


app.post("/facul", function(req, res) {
  console.log("Inside post /login method");
    console.log("facu")
console.log(req.body);
  var fid = req.body.fid;
  var sem = req.body.sem;
  var fname=req.body.fname;
  var section = req.body.section;
  var day=req.body.day;
  var period1=req.body.period1;
  var period2=req.body.period2;
  var period3=req.body.period3;
  var period4=req.body.period4;
  var period5=req.body.period5;
  var period6=req.body.period6;
  var period7=req.body.period7;
  var period8=req.body.period8;
  var period9=req.body.period9;
  mysqlConnection.query(
    'SELECT * FROM occupancy.faculty where sem="6" and fname=(select fname from facultyid where fid=?)',
    [ fid ],function(err,result,fields)
//   mysqlConnection.query("select * from time where sem='"+sem+"' and year='"+year+"' and section='"+section+'"',
//     function(err, result, fields) 
{
      if (err) throw err;
      
     //res.send("SEM:"+result[0].sem+ " <br/> " + "YEAR:    "+result[0].year+"<br/>"+"SECTION:"+result[0].section+");
  
      var sem=result[0].sem;
      var fid=result[0].fid;

      var day=result[0].day;
      var period1=result[0].period1;
      var period2=result[0].period2;
      var period3=result[0].period3;
      var period4=result[0].period4;
      var period5=result[0].period5;
      var period6=result[0].period6;
      var period7=result[0].period7;
      var period8=result[0].period8;
      var period9=result[0].period9;
 
      res.render('../../studentfac.ejs', {records:result,sem:sem,fid:fid,period1:period1,period2:period2,period3:period3,period4:period4,period5:period5,period6:period6,period7:period7,period8:period8,period9:period9 });
    //  res.render(path.join(__dirname+'/Users/chetan/Downloads/chetan/Software Engineering/project/app/src/table.ejs'),{sem:sem,year:year,section:section,state:state});
      console.log("success");
      

   
    }
  );

  
});



app.post("/cancelled", function(req, res) {
  console.log("Inside post /login method");
console.log(req.body);
  var day = req.body.day;
  var sem = req.body.sem;
 
  var section = req.body.section;

  var period1=req.body.period1;
  var period2=req.body.period2;
  var period3=req.body.period3;


var sql="select * from tempcancel where day='"+day+"'";
    mysqlConnection.query(sql,function(err,result,fields)
    
    
    {
        if (!err) {
            for (let i = 0; i < result.length; i++) {
                res.write(
                    '<!DOCTYPE html> <head></head> <body> <h1> Day : </h1> <h4>' +
                        result[i].day +
                        '</h4> <h1>  Section: </h1> <h4>' +
                        result[i].section +
                        '</h4><h1>   SEM: </h1><h4>' +
                        result[i].semester +
                        '</h4> <h1>  Period: </h1> <h4>' +
                        result[i].period +
                        '</h4><h1>   Subject: </h1><h4>' +
                        result[i].subj+
                       
                 
                        
                        '</h4> <hr> </body>'
                );
            }
        }
    }
);


  
});





   

app.post("/MODIFYFACULTY", function(req, res) {
  console.log("Update post /UPDATE method");
  

  var fid2 = req.body.fid2;
  var sem2 = req.body.sem2; 
  var y2 = req.body.y2;
  var day2=req.body.day2; 
  var fh2 = req.body.fh2; 
  var sh2= req.body.sh2;
  var th2 = req.body.th2; 
  var foh2= req.body.foh2;
  var fih2= req.body.fih2; 
  var sih2= req.body.sih2;
  var seh2 = req.body.seh2; 
  var eh2= req.body.eh2;  
  var nh2= req.body.nh2; 
  
  mysqlConnection.query("select *  from faculty where sem='"+req.body.sem2+"'  and fname='"+req.body.fid2+"' ", function(err, result, fields) {
    if (!err) {
      
       if(result.length===1)
     {
    var sql3="UPDATE faculty set period1='"+fh2+"', period2='"+sh2+"' ,period3='"+th2+"',period4='"+foh2+"',period5='"+fih2+"',period6='"+sih2+"',period7='"+seh2+"',period8='"+eh2+"',period9='"+nh2+"' where sem='"+sem2+"' and fname='"+fn2+"' and day='"+day2+"' ";
    mysqlConnection.query(sql3, function (err, result) {
    
      console.log("1 record updated");
    });
    res.send("1 record successfully updated");
  }
  else{
    res.send("CANNOT UPDATE AS THE ENTERED ENTRIES ARE NOT IN DATABASE");
  }
}
else{
  console.log(err);
  res.send(err)
}

});
});


app.post("/Viewfeat", function(req, res) {
	
	var r1 = req.body.r1;
  
  mysqlConnection.query("select *  from feat where  roomno='"+req.body.r1+"' ", function(err, result, fields) {
     if (!err) {
       
     
     
      if(result.length===0){

       res.send("no data");
       console.log("no data");
        }
        else
        {
          var sql1="select *  from feat where   roomno='"+req.body.r1+"' ";
        mysqlConnection.query(sql1, function (err, result, fields) {
            if (err) throw err;
            console.log("into view of room features");
            var roomno=result[0].roomno;
            
            var projector=result[0].projector;
            var ac=result[0].ac;
            
            var skt=result[0].skt;
            var sb=result[0].sb;
            var mb=result[0].mb;
            
            var mic=result[0].mic;
            res.render('../../features.ejs', {records:result });
            console.log("success");
          });
        }
     
     } 
			else {
       console.log("no data");
       res.send("<h1>no data<h1/>");
     }
   });
 });

   

 app.post("/Insert", function(req, res) {
	
	var r2 = req.body.r2;
  var y1 = req.body.y1; 
 
  var ac1 = req.body.ac1; 
  var sb1= req.body.sb1;
  var proj1 = req.body.proj1; 
  var mic1= req.body.mic1;
  var skt1= req.body.skt1; 
  var mb1= req.body.mb1;
   mysqlConnection.query("select *  from feat where roomno='"+req.body.r2+"' ", function(err, result, fields) {
     if (!err) {
      //console.log(result);
        if(result.length===0)
			{
        
			var sql2 = "INSERT INTO feat (roomno,projector,ac,skt,sb,mb,mic) VALUES ('"+req.body.r2+"','"+req.body.proj1+"','"+req.body.ac1+"','"+req.body.skt1+"','"+req.body.sb1+"','"+req.body.mb1+"','"+req.body.mic1+"')";
    mysqlConnection.query(sql2, function (err, result) {
     console.log("1 record inserted");
     res.send("<h1>inserted successfully<h1/>");
    });
    
       }
       else{
         console.log("already there");
         res.send("<h1>Features for this room are already inserted.For changes do update.<h1/>");
       }
     
     } 
			else {
       console.log("err");
       res.end();
     }
   });
 });

   

app.post("/Modify", function(req, res) {
  console.log("Update post /UPDATE method");
  
  var r3 = req.body.r3; 
  var ac2 = req.body.ac2; 
  var sb2= req.body.sb2;
  var proj2 = req.body.proj2; 
  var mic2= req.body.mic2;
  var skt2= req.body.skt2; 
  var mb2= req.body.mb2;
  
  mysqlConnection.query("select *  from feat where  roomno='"+req.body.r3+"' ", function(err, result, fields) {
    if (!err) {
      
       if(result.length===1)
     {
      var sql3="UPDATE feat set projector='"+proj2+"', ac='"+ac2+"' ,skt='"+skt2+"',sb='"+sb2+"',mb='"+mb2+"',mic='"+mic2+"' where roomno='"+r3+"' ";


     mysqlConnection.query(sql3, function (err, result) {
    console.log("1 record updated");
  res.send("<h1>updated<h1/>");
   });
   
      }
      else{
        console.log("THE SELECTED ENTRIES FOR MODIFICATION ARE NOT PRESENT IN DATABASE");
        res.send("<h2>THE SELECTED ENTRIES FOR MODIFICATION ARE NOT PRESENT IN DATABASE<h2/>");
      }
    
    } 
     else {
      console.log("err");
      res.end();
    }
  });
});





app.post("/Approve", function(req, respon) {

    
  var roomno = req.body.roomno;
  var day=req.body.day;
  var per=req.body.per ;
  if(per=='period1'){
  mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
    if (!err) {


     
        if(result.length===0){
            respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");



        }
        else
        {
            var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period1='FREE'  "
            mysqlConnection.query(sql4, function (err, result) {
                if (!err) {
                    if(result.length===1){
                    respon.send("<h1>Approved</h1>");
                    }
                    else
                    {
                        respon.send("<h1>THIS HOUR IS FILLED</h1>");
                    }
        }
    });


}
    }
    
});}
if(per=='period2'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period2='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period3'){
      console.log("inside p3");
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period3='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period4'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period4='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period5'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period5='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period6'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period6='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period7'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period7='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
  if(per=='period8'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period8='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("<h1>Approved</h1>");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED</h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}  if(per=='period9'){
    mysqlConnection.query("select *  from temproombook where  roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  time='"+req.body.per+"'", function(err, result, fields) {
      if (!err) {
  
  
       
          if(result.length===0){
              respon.send("NO REQUEST FOR ROOM BOOKING IS PRESENT FOR THIS ROOM AT ENTERED HOUR");
  
  
  
          }
          else
          {
              var sql4="select *  from available where roomno='"+req.body.roomno+"' and  day='"+req.body.day+"' and  period9='FREE'  "
              mysqlConnection.query(sql4, function (err, result) {
                  if (!err) {
                      if(result.length===1){
                      respon.send("Approved");
                      }
                      else
                      {
                          respon.send("<h1>THIS HOUR IS FILLED<h1>");
                      }
          }
      });
  
  
  }
      }
      
  });}
});

app.listen(port, () => console.log(`Example app listening on port port!`));
