// Bio Object
var bio = {
    "name" : "Sourangshu Pal",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" :"+91-8972568009",
        "email" : "paulbindass@gmail.com",
        "github" :"sourangshupal",
        "twitter" : "@sourangshu_pal",
        "location" : "Kolkata, India"
    },
    "welcomeMessage" : "Thanks for the visiting my porfolio and feel my online presence.",
    "skills" : ["Web Developement :-  HTML, CSS, JavaScript, Bootstrap, Jquery", "C/C++", "Python/Django"],
    "bioPic" : "images/3.jpg"
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedRole).append(formattedImage, formattedMessage);

    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

};

bio.display();


//Education Object
var education ={
    "schools" :[
    {
        "name" : "Arya College of Engineering & IT",
        "degree" :"Bachelors of Engineering - Computer Engineering",
        "url" : "www.aryacollege.in",
        "location" : "Jaipur, India",
        "majors" : "Computer Science and Network Security",
        "dates" : "May 2014 - 18"
    },
    {
        "name" : "Delhi High School",
        "degree" : "Higher Secondary",
        "url" : "www.dpsdelhi.in",
        "location" : "New Delhi, India",
        "majors" : "Physical Sciences",
        "dates" : "June 2012 - 14"
    }],

    "onlineCourses" :[
    {
        "title" : "Frontend Web Developer Nanodegree",
        "url" : "www.udacity.in/nanodegree",
        "school" : "Udacity",
        "dates" : "May 2017 - ongoing"
    },
    {
        "title" : "Introduction To Computer Science",
        "url" : "www.udacity.in/nanodegree",
        "school" : "Udacity",
        "dates" : "Feb - May 2017"
    },
    {
        "title" : "Responsive Web Design",
        "url" : "www.coursera.org/responsive-web-design",
        "school" : "Coursera",
        "dates" : "June - October 2016"
    }]
};


education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree), HTMLschoolDates.replace("%data%", education.schools[school].dates), HTMLschoolLocation.replace("%data%", education.schools[school].location), HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    //online Courses
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
    }
};

education.display();

//education.display();

// Work Object

var work = {
    "jobs" : [
    {
        "employer" : "Google",
        "title" : "Web Developer",
        "location" : "Hyderabad, India",
        "dates" : "May 2018-19",
        "description" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

    },
    {
        "employer" : "Facebook",
        "title" : "Web Developer/Designer",
        "location" : "Bangalore, India",
        "dates" : "June 2016-18",
        "description" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }]
};


for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);



}
//Projects Object

var projects = {
    "projects" : [
    {
        "title" : "Hulu Smart City Project",
        "dates" : "2016",
        "description" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "images" : ["images/pro1.png", "images/pro2.jpg"]
    },
    {
        "title" : "Gradient Style CSS Project ",
        "dates" : "2018",
        "description" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "images" : ["images/pro2.jpg", "images/pro2.jpg"]
    }
    ]
};

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates= HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }

}

projects.display();

//Adding Map

$('#mapDiv').append(googleMap);
