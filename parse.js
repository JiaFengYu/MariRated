function ParseURLParameter() {
  var FullURL = window.location.search.substring(1);

  if (FullURL.length == 0) {
    return null;
  }

  var Parameters = FullURL.split("&");
  var courses = []
  for (var i = 0; i < Parameters.length; i++) {
    var CurrentParameter = Parameters[i].split("=");
    courses[i]=CurrentParameter[0];
  }
  return courses;
}

var courseNameFromID = {
  "cal1":"CALCULUS I",
  "cal2":"CALCULUS II",
  "cal3":"CALCULUS III",
  "probs":"PROBABILITY AND STATISTICS",
  "diff":"DIFFERENTIAL EQUATIONS",
  "fmath":"FINITE MATHEMATICS",
  "cals":"MULTIVARIABLE CALCULUS",
  "advmath":"TOPICS IN ADVANCED MATHEMATICS",
  "lin1":"LINEAR ALGEBRA I",
  "lin2":"LINEAR ALGEBRA II",
  "chem1":"GENERAL CHEMISTRY I",
  "chem2":"GENERAL CHEMISTRY II",
  "ogchem1":"ORGANIC CHEMISTRY I",
  "ogchem2":"ORGANIC CHEMISTRY II",
  "mech":"MECHANICS",
  "waves":"WAVES, OPTICS, AND MODERN PHYSICS",
  "em":"ELECTRICITY AND MAGNETISM",
  "appliedphys":"TOPICS IN APPLIED PHYSICS",
  "astro":"ASTROPHYSICS",
  "hphys":"HUMAN PHYSIOLOGY",
  "bio1":"GENERAL BIOLOGY I",
  "bio2":"GENERAL BIOLOGY II",
  "molgen":"MOLECULAR GENETICS",
  "cs1":"COMPUTER PROGRAMMING",
  "cs2":"PROGRAMMING TECHNIQUES AND APPLICATONS",
  "digelec":"DIGITAL ELECTRONICS",
  "draw":"TECHNICAL DRAWING",
}

var allTeachers = [
  {"name": "A. Fenwick","rating": 9.48,"course": ["cal1", "cal2,", "lin1", "lin2"]},
  {"name":"J.F. Deslandes","rating": 10, "course":["cal2", "cals","diff"]},
  {"name":"C. Turner","rating":9.46 , "course":["lin1", "probs","cal3"]},
  {"name":"V. Gavrin","rating":7.60 , "course":["lin1", "cal2"]},
  {"name":"V. Godin", "rating":9.10, "course":["advmath","fmath"]},
  {"name":"H. Bigdely","rating": 9.82, "course":"cal2"},
  {"name":"M. Saumier","rating": 9.1, "course":["bio1", "hphys"]},
  {"name":"C. Di Flumeri","rating":9.7 , "course":"hphys"},
  {"name":"C. D'Abramo","rating": 8.80, "course":"bio1"}, //this teacher isn't in the course offering for this semester
  {"name":"C. Barrie","rating":8.38  , "course":["bio1", "bio2"]},
  {"name":"N. Median","rating":6.92 , "course":"bio1"}, //this teacher isn't in the course offering for this semester
  {"name":"D. Williams","rating":9.14 , "course":["ogchem1", "chem2"]},
  {"name":"J. Li","rating": 8.78, "course":["ogchem1", "chem2","ogchem2"]},
  {"name":"A. Vukov","rating":8.64 , "course":["chem1", "ogchem1"]}, //this teacher isn't in the course offering for this semester
  {"name":"L. Jinbachian","rating":6.14 , "course":["chem1", "chem2"]},
  {"name":"A. Keane","rating":8.50, "course":"chem2"},
  {"name":"M. Sankeralli","rating": 7.32, "course":["mech","em"]},
  {"name":"S. Sabik","rating": 9.40, "course":["mech"]},
  {"name":"J. Vinet","rating": 8.92, "course":["mech","em"]},
  {"name":"M. Dayon","rating":8.06 , "course":["mech","waves"]},
  {"name":"Xiang Huang","rating":7.34 , "course":["appliedphys","astro"]},
  {"name":"Robert Vincent","rating":9.9, "course": ["cs1","cs2","draw","digelec"]} //this teacher isn't in the course offering for this semester
]

var courseIDs = ParseURLParameter();
var string = courseIDs.toString();
//document.write(string)

function caca(teacherList, courseID){
  var caca = teacherList.filter(x => x["course"].includes(courseID));
  document.write("<b>" + courseNameFromID[courseID] + "</b>");
  document.write("<br><br>")
  for (var i = 0; i < caca.length; ++i) {
    document.write(caca[i]["name"]);
    document.write(" - ");
    document.write(caca[i]["rating"]);
    document.write("<br>");
  }
}
function write_teachers(){
  document.write("You have chosen the followings courses: "); //This section is a preconfigured example if we choose 4 specific classes. The code can be extended with a function linking the input with the caca() function.
  document.write("<br>");
  document.write("Here are the available teacher(s), classified by their rankings by students.");
  document.write("<br><br>");

  console.log(courseIDs); // == [""]
  if (courseIDs === null) {
    document.write("No courses were chosen");
  }
    for (var i = 0; i < courseIDs.length; i++) {
      caca(allTeachers, courseIDs[i]);
      document.write("<br>");
    }

  document.write("The listed teachers are available for the following semester. <br> If you would like to use the service again, please click on the button.");
  document.write("<br>");
  document.write("MariRated wishes you the best!");
}

write_teachers();
//document.write("<br>")
//var caka = bioTeachers.filter(x => x["course"].includes("bio1"));
//document.write(" <b> GENERAL BIOLOGY I </b>");
//document.write("<br><br>")

//for (var i = 0; i < caka.length; ++i) {
  //document.write(caka[i]["name"]);
  //document.write(" - ");
  //document.write(caka[i]["rating"]);
  //document.write("<br>");
//}
