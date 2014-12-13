var bio = {
	"name" : "Tibor Burany",
	"role" : "Fantasy Football Sage",

	"contacts" : {
		"mobile": "414-940-6501",
		"email": "tbotch@gmail.com",
		"github": "tbotch",
		"twitter": "@tburany",
		"location": "Muskego, WI"
	},

	"welcomeMessage": "Welcome to Project 2 of my Front-End Web Dev Nanodegree.",
	"skills": ["Visionary", "Prophetic", "Accurate", "Logical"],
	"bioPic": "images/GDL.jpg"
};

bio.display = function()
	{
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);


if (bio.skills.length > 0) 
		{
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
	};


var work = {
	"jobs": [
		{	
			"employer" : "BMO Harris Bank",
			"title" : "System Administrator",
			"location" : "Milwaukee, WI",
			"dates" : "August 2012 - Current",
			"description" : "Little bit of virtualization, slathered in backups, smothered with Active Directory administration, and topped with daily operations and maintenance."
		},

		{
			"employer": "BMO Harris Bank",
			"title": "LAN Technician",
			"location": "Milwaukee, WI",
			"dates": "January 2007 - August 2008",
			"description": "Configuring/deploying hardware, application support, printer repair....grunt work."
		}
	]
};


work.display = function() 
	{
	for (job in work.jobs) 
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    		var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
    		$(".work-entry:last").append(formattedEmployerTitle);
    		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    		$(".work-entry:last").append(formattedworkDates);
    		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    		$(".work-entry:last").append(formattedworkLocation);
    		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    		$(".work-entry:last").append(formattedworkDescription);
    	}
	};

var projects = {
	"projects": [
		{	
			"title": "Project 1: Mockup to Website",
			"dates": "2014",
			"description": "Replicated design mockup in HTML and CSS.  Developed responsive website to display images, descriptions, and links to each of the portfolio projects completed throughout the course.",
			"images": ["images/GDL.jpg"]
		},

		{
			"title": "Project 2: Interactive Resume",
			"dates": "2014",
			"description": "Demonstrate mastery of the language's syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. Required to write clean code and to apply knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
			"images": ["images/GDL.jpg"]
		}
	]
};

projects.display = function()
	{
	for (project in projects.projects)
		{	
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedprojectTitle);
			var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedprojectDates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedprojectDescription);
			
			if (projects.projects[project].images.length > 0)
			{
   				for (image in projects.projects[project].images)
   				{
   					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
   					$(".project-entry:last").append(formattedImage);
   				}
			}
		}
	};

var education = {
	"schools" : [
		{
			"name" : "UW-Milwauke",
			"degree" : "Bachelors",
			"dates" : "1991-1995",
			"location" : "Milwaukee, WI",
			"major" : ["English"],
			"url" : "http://www4.uwm.edu/"
		},
		{
			"name": "Concordia University",
			"degree": "Masters",
			"dates": "2010-2012",
			"location": "Mequon, WI",
			"major": ["Information Technology"],
			"url": "https://www.cuw.edu/"
		}
	],

	"onlineCourse": [ 
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates" : 2014,
			"url": "https://www.udacity.com/"
		}
	]
};


education.display = function()
	{
	for (school in education.schools)
		{
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedschoolName);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedschoolDegree);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedschoolMajor);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDates);
		}	
	};

$(document).click(function(loc) 
	{
		var x = loc.pageX;
		var y = loc.pageY;
		
		logClicks(x,y);
	}
);

function inName(name)
	{
		name = name.trim().split(" ");
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

		return name[0]+" "+name[1];
	}
	
$("#footerContacts").prepend(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);