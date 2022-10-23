//** Count Visitor ** 
function countVisitor() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.countV) {
      localStorage.countV = Number(localStorage.countV) + 1;
    } else {
      localStorage.countV = 1;
    }
    document.getElementById("visitor").innerHTML = localStorage.countV;
  } else {
    document.getElementById("visitor").innerHTML = 0;
  }
}

//** data **
var data =
  [
    {
      "ID": "PT01",
      "Subject": "SubjectPython",
      "Img": "python01.png",
      "NameCourse": "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      "Intro": "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      "Teacher": "Ardit Sulce",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 629025,
      "Detail": "Python01.html",
      "Level": "Intermediate"
    },
    {
      "ID": "PT02",
      "Subject": "SubjectPython",
      "Img": "python02.png",
      "NameCourse": "2022 Complete Python Bootcamp From Zero to Hero in Python",
      "Intro": "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
      "Teacher": "Jose Portilla",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 1611037,
      "Detail": "Python02.html",
      "Level": "All levels"
    },
    {
      "ID": "PT03",
      "Subject": "SubjectPython",
      "Img": "python03.png",
      "NameCourse": "Complete Python Developer in 2022: Zero to Mastery",
      "Intro": "How to become a Python 3 Developer and get hired! Build 12+ projects, learn Web Development, Machine Learning + more!",
      "Teacher": "Ardit Sulce",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 170773,
      "Detail": "Python03.html",
      "Level": "All levels"
    },
    {
      "ID": "PT04",
      "Subject": "SubjectPython",
      "Img": "python04.png",
      "NameCourse": "Learn Python Programming Masterclass",
      "Intro": "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
      "Teacher": "Jose Portilla",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 391390,
      "Detail": "Python04.html",
      "Level": "Beginner"
    },
    {
      "ID": "PT05",
      "Subject": "SubjectPython",
      "Img": "python05.png",
      "NameCourse": "The Python Mega Course: Build 10 Real World Applications",
      "Intro": "Become a Python programmer by learning how to build any Python program from scratch, GUIs, web apps, APIs, and more.",
      "Teacher": "Ardit Sulce",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 277733,
      "Detail": "Python05.html",
      "Level": "Beginner"
    },
    {
      "ID": "PT06",
      "Subject": "SubjectPython",
      "Img": "python06.png",
      "NameCourse": "The Complete Python Course | Learn Python by Doing in 2022",
      "Intro": "Go from Beginner to Expert in Python by building projects. The best investment for your Python journey!",
      "Teacher": "Jose Portilla",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 72912,
      "Detail": "Python06.html",
      "Level": "All levels"
    },
    {
      "ID": "PT07",
      "Subject": "SubjectPython",
      "Img": "python07.png",
      "NameCourse": "Learn to Code with Python",
      "Intro": "The complete Python bootcamp for 2022. Learn Python 3 from beginner to expert. Build complete Python applications.",
      "Teacher": "Ardit Sulce",
      "PriceNew": 13.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 68943,
      "Detail": "Python07.html",
      "Level": "All levels"
    },
    {
      "ID": "EX01",
      "Subject": "SubjectExcel",
      "Img": "excel01.jpeg",
      "NameCourse": "Microsoft Excel 2013 Course Beginners/ Intermediate Training",
      "Intro": "Learn to Master Microsoft Excel In Easy To Follow Step-By-Step Training Course. Comes With Extensive Working Files",
      "Teacher": "Infinite Skills",
      "PriceNew": 16.99,
      "PriceOld": 49.99,
      "Rating": 4.5,
      "QtyStudent": 34238,
      "Detail": "Excel01.html",
      "Level": "Beginner"
    },
    {
      "ID": "EX02",
      "Subject": "SubjectExcel",
      "Img": "excel02.jpeg",
      "NameCourse": "Microsoft Excel 2013 Advanced. Online Excel Training Course",
      "Intro": "Master Advanced Excel 2013 Features. Become A Expert And Learn To Use Excel Like A Pro With This Advanced Excel Training",
      "Teacher": "Infinite Skills",
      "PriceNew": 16.99,
      "PriceOld": 49.99,
      "Rating": 4.4,
      "QtyStudent": 44727,
      "Detail": "Excel02.html",
      "Level": "All levels"
    },
    {
      "ID": "EX03",
      "Subject": "SubjectExcel",
      "Img": "excel03.jpeg",
      "NameCourse": "Microsoft Excel - From Beginner to Expert in 6 Hours",
      "Intro": "This Microsoft Excel class will make you a master of Microsoft Excel. The training uses Excel 2013 for Windows.",
      "Teacher": "Kyle Pew",
      "PriceNew": 16.99,
      "PriceOld": 24.99,
      "Rating": 4.5,
      "QtyStudent": 129790,
      "Detail": "Excel03.html",
      "Level": "Intermediate"
    },
    {
      "ID": "EX04",
      "Subject": "SubjectExcel",
      "Img": "excel04.jpeg",
      "NameCourse": "Sharper skills using Microsoft Excel 2010 for business",
      "Intro": "Learn how to effectively use Microsoft Excel 2010 to modify, analyze and visualize business data",
      "Teacher": "Kyle Pew",
      "PriceNew": 16.99,
      "PriceOld": 19.99,
      "Rating": 4.6,
      "QtyStudent": 2587,
      "Detail": "Excel04.html",
      "Level": "Beginner"
    },
    {
      "ID": "EX05",
      "Subject": "SubjectExcel",
      "Img": "excel05.jpeg",
      "NameCourse": "7 Steps To Excel Success - Excel Skills And Power Tips",
      "Intro": "In Excel every step counts. Learn to apply 7 Steps To Excel Success. Excel 2007,Excel 2010, Excel 2013 - Excel 365.",
      "Teacher": "Kyle Pew",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 4077,
      "Detail": "Excel05.html",
      "Level": "Beginner"
    },
    {
      "ID": "EX06",
      "Subject": "SubjectExcel",
      "Img": "excel06.jpeg",
      "NameCourse": "Advanced Excel - Beginner to Ninja level (includes Charts)",
      "Intro": "Learn Excel Online for MIS Reporting, Data Cleaning, Data Analysis, Charting, Time-saver tricks with Examples",
      "Teacher": "Infinite Skills",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.3,
      "QtyStudent": 3273,
      "Detail": "Excel06.html",
      "Level": "All levels"
    },
    {
      "ID": "EX07",
      "Subject": "SubjectExcel",
      "Img": "excel07.jpeg",
      "NameCourse": "The Ultimate Excel Programmer Course",
      "Intro": "Learn Excel VBA from Scratch with Dan Strong, Bestselling Excel Expert with Over 180K Students Worldwide!",
      "Teacher": "Infinite Skills",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 112909,
      "Detail": "Excel07.html",
      "Level": "Beginner"
    },
    {
      "ID": "DS01",
      "Subject": "SubjectDataScience",
      "Img": "datascience01.jpeg",
      "NameCourse": "Data Science A-Z™: Real-Life Data Science Exercises Included",
      "Intro": "Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!",
      "Teacher": "Kirill Eremenko",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 206234,
      "Detail": "DataScience01.html",
      "Level": "Intermediate"
    },
    {
      "ID": "DS02",
      "Subject": "SubjectDataScience",
      "Img": "datascience02.png",
      "NameCourse": "Machine Learning, Data Science and Deep Learning with Python",
      "Intro": "Complete hands-on machine learning tutorial with data science, Tensorflow, artificial intelligence, and neural networks",
      "Teacher": "Ligency I Team",
      "PriceNew": 19.99,
      "PriceOld": 24.99,
      "Rating": 4.5,
      "QtyStudent": 168097,
      "Detail": "DataScience02.html",
      "Level": "All levels"
    },
    {
      "ID": "DS03",
      "Subject": "SubjectDataScience",
      "Img": "datascience03.jpeg",
      "NameCourse": "Data Science: Deep Learning and Neural Networks in Python",
      "Intro": "The MOST in-depth look at neural network theory for machine learning, with both pure Python and Tensorflow code",
      "Teacher": "Kirill Eremenko",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 50582,
      "Detail": "DataScience03.html",
      "Level": "Beginner"
    },
    {
      "ID": "DS04",
      "Subject": "SubjectDataScience",
      "Img": "datascience04.jpeg",
      "NameCourse": "R Programming A-Z™: R For Data Science With Real Exercises!",
      "Intro": "Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2",
      "Teacher": "Ligency I Team",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 240627,
      "Detail": "DataScience04.html",
      "Level": "Beginner"
    },
    {
      "ID": "DS05",
      "Subject": "SubjectDataScience",
      "Img": "datascience05.jpeg",
      "NameCourse": "Data Science and Machine Learning Bootcamp with R",
      "Intro": "Learn how to use the R programming language for data science and machine learning and data visualization!",
      "Teacher": "Jose Portilla",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 84512,
      "Detail": "DataScience05.html",
      "Level": "All levels"
    },
    {
      "ID": "DS06",
      "Subject": "SubjectDataScience",
      "Img": "datascience06.jpeg",
      "NameCourse": "Introduction to Machine Learning for Data Science",
      "Intro": "A primer on Machine Learning for Data Science. Revealed for everyday people, by the Backyard Data Scientist.",
      "Teacher": "Kirill Eremenko",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 56579,
      "Detail": "DataScience06.html",
      "Level": "Beginner"
    },
    {
      "ID": "DS07",
      "Subject": "SubjectDataScience",
      "Img": "datascience07.png",
      "NameCourse": "Data Science : Master Machine Learning Without Coding",
      "Intro": "Learn Fundamentals Of Data Science & Machine Learning With Rapidminer (No Coding). Dataset & Solutions Included.",
      "Teacher": "Ligency I Team",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 5580,
      "Detail": "DataScience07.html",
      "Level": "Beginner"
    },
    {
      "ID": "WD01",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev01.jpeg",
      "NameCourse": "Introduction to Web Development",
      "Intro": "Are you Interested in Learning Web Development? Enroll in this Free course for a Dynamic Introduction to the Profession!",
      "Teacher": "Dollar Design School",
      "PriceNew": 16.99,
      "PriceOld": 19.99,
      "Rating": 4.3,
      "QtyStudent": 22496,
      "Detail": "WebDevelopment01.html",
      "Level": "Beginner"
    },
    {
      "ID": "WD02",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev02.jpeg",
      "NameCourse": "Become a Certified HTML, CSS, JavaScript Web Developer",
      "Intro": "Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications",
      "Teacher": "Dollar Design School",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.4,
      "QtyStudent": 34033,
      "Detail": "WebDevelopment02.html",
      "Level": "Intermediate"
    },
    {
      "ID": "WD03",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev03.jpeg",
      "NameCourse": "Running a Web Development Business: The Complete Guide",
      "Intro": "Learn how to start and grow a successful web development business. Get up & running and making sales in under a week.",
      "Teacher": "Rob Percival",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.9,
      "QtyStudent": 33257,
      "Detail": "WebDevelopment03.html",
      "Level": "Beginner"
    },
    {
      "ID": "WD04",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev04.jpeg",
      "NameCourse": "Ultimate Web Designer & Web Developer Course",
      "Intro": "Become a Full-Stack Web Designer in 2022 - Learn Everything from Web Design Fundamentals to Front-End Web Development",
      "Teacher": "Rob Percival",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 78021,
      "Detail": "WebDevelopment04.html",
      "Level": "All levels"
    },
    {
      "ID": "WD05",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev05.jpeg",
      "NameCourse": "Introduction to Programming",
      "Intro": "Professional Coding Skills for Beginners",
      "Teacher": "Dollar Design School",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 6459,
      "Detail": "WebDevelopment05.html",
      "Level": "Beginner"
    },
    {
      "ID": "WD06",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev06.jpeg",
      "NameCourse": "The Complete Web Developer Course 2.0",
      "Intro": "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
      "Teacher": "Rob Percival",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 304247,
      "Detail": "WebDevelopment06.html",
      "Level": "All levels"
    },
    {
      "ID": "WD07",
      "Subject": "SubjectWebDevelopment",
      "Img": "webdev07.jpeg",
      "NameCourse": "The Complete 2022 Web Development Course - Build 15 Projects",
      "Intro": "The only course you need to become a full-stack web developer. Covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more!",
      "Teacher": "Rob Percival",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 34358,
      "Detail": "WebDevelopment07.html",
      "Level": "All levels"
    },
    {
      "ID": "DR01",
      "Subject": "SubjectDrawing",
      "Img": "drawing01.jpeg",
      "NameCourse": "The Ultimate Drawing Course - Beginner to Advanced",
      "Intro": "Learn the #1 most important building block of all art, Drawing. This course will teach you how to draw like a pro!",
      "Teacher": "Jaysen Batchelor",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.6,
      "QtyStudent": 490294,
      "Detail": "Drawing01.html",
      "Level": "All levels"
    },
    {
      "ID": "DR02",
      "Subject": "SubjectDrawing",
      "Img": "drawing02.jpeg",
      "NameCourse": "Character Art School: Complete Character Drawing",
      "Intro": "Learn How to Draw Characters Professionally, in the Ultimate Drawing Course - For Games, Manga, Animation and Comics",
      "Teacher": "Jaysen Batchelor",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 278670,
      "Detail": "Drawing02.html",
      "Level": "Beginner"
    },
    {
      "ID": "DR03",
      "Subject": "SubjectDrawing",
      "Img": "drawing03.jpeg",
      "NameCourse": "How to Draw From Beginner to Master",
      "Intro": "Drawing and Shading From Fundamentals to Photorealism",
      "Teacher": "Jaysen Batchelor",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 41137,
      "Detail": "Drawing03.html",
      "Level": "Beginner"
    },
    {
      "ID": "DR04",
      "Subject": "SubjectDrawing",
      "Img": "drawing04.jpeg",
      "NameCourse": "The Art & Science of Drawing / BASIC SKILLS",
      "Intro": "Drawing is not a talent. It's a skill anyone can learn.",
      "Teacher": "Jaysen Batchelor",
      "PriceNew": 16.99,
      "PriceOld": 34.99,
      "Rating": 4.7,
      "QtyStudent": 67528,
      "Detail": "Drawing04.html",
      "Level": "Beginner"
    },
    {
      "ID": "DR05",
      "Subject": "SubjectDrawing",
      "Img": "drawing05.jpeg",
      "NameCourse": "The Complete Drawing Masterclass: From Beginner to Advanced",
      "Intro": "Apply the art and practice of the fundamental skill of drawing, to bring your drawings to life in this ultimate course.",
      "Teacher": "Matthew Fussell",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.9,
      "QtyStudent": 21528,
      "Detail": "Drawing05.html",
      "Level": "Intermediate"
    },
    {
      "ID": "DR06",
      "Subject": "SubjectDrawing",
      "Img": "drawing06.jpeg",
      "NameCourse": "Masterclass of Realistic Drawing and Shading Human Features",
      "Intro": "Realistic Human Feature Drawing, Hachure and Shading with Pencil, Charcoal and Brush Techniques - Beginner to Advanced",
      "Teacher": "Matthew Fussell",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.9,
      "QtyStudent": 14276,
      "Detail": "Drawing06.html",
      "Level": "All levels"
    },
    {
      "ID": "DR07",
      "Subject": "SubjectDrawing",
      "Img": "drawing07.jpeg",
      "NameCourse": "25 Days to Better Drawings",
      "Intro": "The Core Concepts to Drawing - One Day at a Time.",
      "Teacher": "Matthew Fussell",
      "PriceNew": 16.99,
      "PriceOld": 34.99,
      "Rating": 4.7,
      "QtyStudent": 4169,
      "Detail": "Drawing07.html",
      "Level": "Intermediate"
    },
    {
      "ID": "AWS01",
      "Subject": "SubjectAWSCertification",
      "Img": "aws01.jpeg",
      "NameCourse": "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
      "Intro": "Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 638952,
      "Detail": "AWSCertification01.html",
      "Level": "Intermediate"
    },
    {
      "ID": "AWS02",
      "Subject": "SubjectAWSCertification",
      "Img": "aws02.jpeg",
      "NameCourse": "Ultimate AWS Certified Developer Associate 2022 - NEW!",
      "Intro": "Full Practice Exam with Explanations included! PASS the Amazon Web Services Certified Developer Certification DVA-C01.",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 363758,
      "Detail": "AWSCertification02.html",
      "Level": "All levels"
    },
    {
      "ID": "AWS03",
      "Subject": "SubjectAWSCertification",
      "Img": "aws03.jpeg",
      "NameCourse": "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
      "Intro": "Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C01 exam!",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 523864,
      "Detail": "AWSCertification03.html",
      "Level": "All levels"
    },
    {
      "ID": "AWS04",
      "Subject": "SubjectAWSCertification",
      "Img": "aws04.jpeg",
      "NameCourse": "Ultimate AWS Certified SysOps Administrator Associate 2022",
      "Intro": "Full Practice Test with Explanations included! PASS the AWS Certified SysOps Administrator Associate SOA-C02 Exam.",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 86134,
      "Detail": "AWSCertification04.html",
      "Level": "All levels"
    },
    {
      "ID": "AWS05",
      "Subject": "SubjectAWSCertification",
      "Img": "aws05.jpeg",
      "NameCourse": "Amazon Web Services (AWS) Certified 2022 - 4 Certifications!",
      "Intro": "Videos, labs & practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)",
      "Teacher": "BackSpace Academy",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.7,
      "QtyStudent": 137299,
      "Detail": "AWSCertification05.html",
      "Level": "Beginner"
    },
    {
      "ID": "AWS06",
      "Subject": "SubjectAWSCertification",
      "Img": "aws06.jpeg",
      "NameCourse": "Ultimate AWS Certified Solutions Architect Professional 2022",
      "Intro": "Be AWS Certified Solutions Architect Professional. Full Amazon Web Services Solution Architecture deep-dive for SAP-C01",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 98346,
      "Detail": "AWSCertification06.html",
      "Level": "Beginner"
    },
    {
      "ID": "AWS07",
      "Subject": "SubjectAWSCertification",
      "Img": "aws07.webp",
      "NameCourse": "Practice Exams | AWS Certified Developer Associate 2022",
      "Intro": "325 Test Quiz Questions on DVA-C01 ! Practice the AWS Certified Developer Exam & ace the AWS Certified Developer Exam!",
      "Teacher": "Stephane Maarek",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 74291,
      "Detail": "AWSCertification01.html",
      "Level": "Beginner"
    },
    {
      "ID": "JS01",
      "Subject": "SubjectJavascript",
      "Img": "js01.png",
      "NameCourse": "Javascript for Beginners",
      "Intro": "Learn javascript online and supercharge your web design with this Javascript for beginners training course.",
      "Teacher": "Dollar Design School",
      "PriceNew": 16.99,
      "PriceOld": 19.99,
      "Rating": 4.5,
      "QtyStudent": 9613,
      "Detail": "Javascript01.html",
      "Level": "Intermediate"
    },
    {
      "ID": "JS02",
      "Subject": "SubjectJavascript",
      "Img": "js02.png",
      "NameCourse": "1 Hour JavaScript",
      "Intro": "Learn how to code in JavaScript in 1 hour. This class is set up for complete beginners!",
      "Teacher": "John Bura",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.5,
      "QtyStudent": 67614,
      "Detail": "Javascript02.html",
      "Level": "Beginner"
    },
    {
      "ID": "JS03",
      "Subject": "SubjectJavascript",
      "Img": "js03.png",
      "NameCourse": "JavaScript: Understanding the Weird Parts",
      "Intro": "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.",
      "Teacher": "Edwin Diaz",
      "PriceNew": 16.99,
      "PriceOld": 84.99,
      "Rating": 4.8,
      "QtyStudent": 179362,
      "Detail": "Javascript03.html",
      "Level": "All levels"
    },
    {
      "ID": "JS04",
      "Subject": "SubjectJavascript",
      "Img": "js04.png",
      "NameCourse": "Javascript for Beginners Learn by Doing Practical Exercises",
      "Intro": "JavaScript for Beginners : Work closely with me doing exercises & learn more. I make Javascript easy for you guaranteed.",
      "Teacher": "Edwin Diaz",
      "PriceNew": 19.99,
      "PriceOld": 99.99,
      "Rating": 4.4,
      "QtyStudent": 30106,
      "Detail": "Javascript04.html",
      "Level": "Beginner"
    },
    {
      "ID": "JS05",
      "Subject": "SubjectJavascript",
      "Img": "js05.png",
      "NameCourse": "JavaScript from Beginner to Expert",
      "Intro": "Become a JavaScript expert in 30 days, even if you are a JS beginner. Become a front-end developer of websites in JS",
      "Teacher": "Edwin Diaz",
      "PriceNew": 19.99,
      "PriceOld": 99.99,
      "Rating": 4.3,
      "QtyStudent": 9931,
      "Detail": "Javascript05.html",
      "Level": "All levels"
    },
    {
      "ID": "JS06",
      "Subject": "SubjectJavascript",
      "Img": "js06.png",
      "NameCourse": "JavaScript for Kids: Code Your Own Games and Apps at Any Age",
      "Intro": "JavaScript coding course for beginners of all ages, build your own interactive games and apps in JavaScript!",
      "Teacher": "John Bura",
      "PriceNew": 16.99,
      "PriceOld": 29.99,
      "Rating": 4.5,
      "QtyStudent": 2747,
      "Detail": "Javascript06.html",
      "Level": "All levels"
    },
    {
      "ID": "JS07",
      "Subject": "SubjectJavascript",
      "Img": "js07.png",
      "NameCourse": "Advanced Javascript",
      "Intro": "In only seven hours you will learn enough javascript to transform from a Junior JS Dev into a Senior JS Guru",
      "Teacher": "John Bura",
      "PriceNew": 16.99,
      "PriceOld": 49.99,
      "Rating": 4.6,
      "QtyStudent": 31146,
      "Detail": "Javascript07.html",
      "Level": "Beginner"
    }
  ]


//displayCourse(data);

// Display the courses
if (sessionStorage.getItem("menuData") == null &&
  sessionStorage.getItem("subData") == null &&
  sessionStorage.getItem("filterData") == null
) {
  displayCourse(data);
}

// filter data by subject
function filterSubject(subject) {
  let Sub = data.filter(i => i.Subject == subject);
  return Sub;
}

//** array is sorted by "key", in ascending order by default
function compare(key, order = 'asc') {
  return function (a, b) {

    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}

// Display 4 course in the index page
(function() {

  TopFour(filterSubject("SubjectPython"), "SubjectPython");
  TopFour(filterSubject("SubjectExcel"), "SubjectExcel");
  TopFour(filterSubject("SubjectWebDevelopment"), "SubjectWebDevelopment");
  TopFour(filterSubject("SubjectDataScience"), "SubjectDataScience");
  TopFour(filterSubject("SubjectJavascript"), "SubjectJavascript");
  TopFour(filterSubject("SubjectAWSCertification"), "SubjectAWSCertification");
  TopFour(filterSubject("SubjectDrawing"), "SubjectDrawing");

  let sortByQtyStudent = data;
  let sortByRating = data.slice();

  TopFour(sortByQtyStudent.sort(compare("QtyStudent", "desc")), "sort-top-4-by-student");
  TopFour(sortByRating.sort(compare("Rating", "desc")), "sort-top-4-by-rating");
})();


// Filter/Sort Multiple

$(".filter").click(function () {
  
  sessionStorage.removeItem("menuData");
  sessionStorage.removeItem("searchData");
  sessionStorage.removeItem("filterData");

  //** subject **//
  let cats = $(".chk-subject:checked").map(function () { return $(this).val() }).toArray().toString();
  var subjectData = (cats.length == 0) ? data : data.filter(item => cats.search(item.Subject) >= 0);

  //** level **//
  let level = $(".chk-level:checked").map(function () { return $(this).val() }).toArray().toString();
  var levelData = (level.length == 0) ? subjectData : subjectData.filter(item => level.search(item.Level) >= 0);

  //** rating star **//
  let stars = $(".chk-star:checked").map(function () { return $(this).val() }).toArray();
  var ratingData = (stars.length == 0) ? levelData : levelData.filter(item => item.Rating >= stars[0]);

  //** sort ** *//
  let key = $(".chk-sort:checked").map(function () { return $(this).data("sort") }).toArray().toString();
  let order = $(".chk-sort:checked").map(function () { return $(this).val() }).toArray().toString();
  var sortData = (order.length == 0) ? ratingData : ratingData.sort(compare(key, order));

  sessionStorage.setItem("filterData", JSON.stringify(sortData));
  var filter = JSON.parse(sessionStorage.getItem("filterData"));

  // displayCourse(sortData);
  
  displayCourse(filter);
  //reloads the current document;
  location.reload(); 
});

if (sessionStorage.getItem("filterData") != null) {
  var filter = JSON.parse(sessionStorage.getItem("filterData"));
  displayCourse(filter);
}


//Menu-link for the courses;
$(".menu-sub").click(function (e) {
  e.preventDefault();
  sessionStorage.removeItem("searchData");
  var sub = $(this).data("sub");
  sessionStorage.setItem("menuData", JSON.stringify(filterSubject(sub)));
  var linkData = JSON.parse(sessionStorage.getItem("menuData"));

  if (window.open("GalleryCourse.html", "_self")) {
    window.open("/GalleryCourse.html", "_self");
  } else {
    window.open("GalleryCourse.html", "_self");
  }
  displayCourse(linkData);
  $(".note-link").html(sub);
});

if (sessionStorage.getItem("menuData") != null) {
  var linkData = JSON.parse(sessionStorage.getItem("menuData"));
  displayCourse(linkData);
}


// event search
$("#formSearch").submit(function (e) {
  e.preventDefault();
  sessionStorage.removeItem("menuData");

  let search = $("#search").val();
  let re = new RegExp(search, "ig");
  //let subData = data.filter(item => item.Intro.search(re) >= 0);
  sessionStorage.setItem("searchData", JSON.stringify(data.filter(item => item.Intro.search(re) >= 0)));
  var dataSearch = JSON.parse(sessionStorage.getItem("searchData"));

  if (window.open("GalleryCourse.html", "_self")) {
    window.open("/GalleryCourse.html", "_self");
  } else {
    window.open("GalleryCourse.html", "_self");
  }

  displayCourse(dataSearch);
  //displayCourse(subData);  
});

if (sessionStorage.getItem("searchData") != null) {
  var dataSearch = JSON.parse(sessionStorage.getItem("searchData"));
  displayCourse(dataSearch);
}


// ** Display Top 4 courses on Index
function TopFour(items, className) {
  let sp = ``;
  for (var i = 0; i < 4; i++) {
    sp += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto p-0 d-flex flex-column justify-content-around flex-grow-1" style="max-width: 250px; box-shadow: -2px -2px 10px rgb(177, 175, 175); border-radius: 15px;">
        <a class="d-flex flex-column text-reset" href="./Courses/${items[i].Detail}">
          <div class="col-12 bg-image hover-zoom ripple ripple-surface">
            <img src="./img/imgcourses/${items[i].Img}" width="100%" height="160px" alt="course"
            style="border-top-left-radius: 15px;
            border-top-right-radius: 15px;">
          </div>
          <div class="col-12 px-2">
            <b style="text-align: justify;">${items[i].NameCourse}</b>
            <div class="d-flex row">
              <div class="d-flex">
                <small class="mr-auto"><i>${items[i].Teacher}</i></small>
                <small class="ml-auto">
                  ${items[i].Rating} <i class="fa fa-star text-warning"></i>
                </small>
              </div>
              <div class="d-flex">
                <small class="text-left mr-auto">
                  <i class="fas fa-user-graduate"></i> ${items[i].QtyStudent.toLocaleString('en-US')}
                </small>
                <span class="ml-auto">
                  <strong class="text-success">$${items[i].PriceNew}</strong>
                  <small class="text-danger">
                    <del>$${items[i].PriceOld}</del>
                  </small>
                </span>
              </div>
            </div>
          </div>
        </a>
        <div href="#" 
          data-id="${items[i].ID}" 
          data-img="${items[i].Img}" 
          data-name="${items[i].NameCourse}" 
          data-teacher="${items[i].Teacher}" 
          data-price-new="${items[i].PriceNew}"
          data-price-old="${items[i].PriceOld}" 
          data-detail="${items[i].Detail}"
          class="add-to-cart btn btn-success col-12 mt-auto"
          style="border-radius: 0 0 15px 15px;">Add to cart
        </div>
      </div>
      <div class="w-100 d-sm-none"></div>
    `;
  }
  $("." + className).html(sp);
}

//** Display on Gallery **
function displayCourse(items) {
  let array = ``;
  $.each(items, function (k, v) {
    array += `
      <div class="col-12 col-sm-6 col-md-5 col-lg-3 mx-auto ml-md-4 mb-5 p-0 d-flex flex-column justify-content-around flex-grow-1" style="max-width: 250px; box-shadow: -2px -2px 10px rgb(177, 175, 175); border-radius: 15px;">
        <a class="d-flex flex-column text-reset" href="./Courses/${v.Detail}">
          <div class="col-12 bg-image hover-zoom ripple ripple-surface">
            <img src="./img/imgcourses/${v.Img}" width="100%" height="auto" alt="course">
          </div>
          <div class="col-12 px-2">
            <b style="text-align: justify;">${v.NameCourse}</b>
            <div class="d-flex row">
              <div class="d-flex">
                <small class="mr-auto"><i>${v.Teacher}</i></small>
                <small class="ml-auto">
                  ${v.Rating}<i class="fa fa-star text-warning"></i>
                </small>
              </div>
              <div class="d-flex">
                <small class="text-left mr-auto">
                  <i class="fas fa-user-graduate"></i>${v.QtyStudent.toLocaleString('en-US')}
                </small>
                <span class="ml-auto">
                  <strong class="text-success">$${v.PriceNew}</strong>
                  <small class="text-danger">
                    <del>$${v.PriceOld}</del>
                  </small>
                </span>
              </div>
            </div>
          </div>
        </a>
        <a href="#"  
        data-id="${v.ID}"  
        data-img="${v.Img}"  
        data-name="${v.NameCourse}"  
        data-teacher="${v.Teacher}"  
        data-price-new="${v.PriceNew}" 
        data-price-old="${v.PriceOld}" 
        data-detail="${v.Detail}" 
        class="add-to-cart btn btn-success col-12 mt-auto"
        style="border-radius: 0 0 15px 15px;">Add to cart
        </a>
      </div>
      <div class="w-100 d-sm-none"></div>
      `;
  });

  $("#gallery").html(array);
}

// Display the info of teacher 

function displayCourseByTeacher(teacher, className) {
  let array = data.filter(i => i.Teacher == teacher);
  DisplayInTeacherByClass(array, className);
}

function DisplayInTeacherByClass(items, className) {
  let s = ``;
  $.each(items, function (k, v) {
    s += `
        <div class="col-12 p-2">
        <a class="d-md-flex justify-content-end border-bottom text-reset" href="../Courses/${v.Detail}">
          <!-- col-1 -->
          <div class="img-course col-12 col-sm-6 col-md-auto p-2">
            <img src="../img/imgcourses/${v.Img}" alt="">
          </div>
          <!-- col 2 -->
          <div class="content col-12 col-sm-6 p-2">
            <h4 class="title-course">${v.NameCourse}</h4>
            <p class="name-intro">${v.Intro}</p>
            <p class="name-gv"><b>${v.Teacher}</b></p>
          </div>
          <!-- col 3 -->
          <div class="text-left col-4 col-sm-1 p-2">
            <span class="d-block">
              ${v.Rating} <i class="fa fa-star text-warning"></i>
            </span>
          </div>
          <!-- col 4 -->
          <div class="col-4 col-sm-1 text-primary pt-2">
            <span class="d-block">
              <i class="fas fa-user-graduate"></i> ${v.QtyStudent}
            </span>
          </div>
          <!-- col 5 -->
          <div class="text-right col-4 col-sm-1 p-2">
            <b class="text-success">${v.PriceNew}</b>
            <small class="text-danger">
              <del>${v.PriceOld}</del>
            </small>
          </div>
        </a>
      </div>
      `;
  });
  $("." + className).html(s);
}


//** Display count filter by subject in Gallery */
(function(){
  let subCoursePython = filterSubject("SubjectPython");
  let subCourseExcel = filterSubject("SubjectExcel");
  let subCourseWebDevelopment = filterSubject("SubjectWebDevelopment");
  let subCourseDataScience = filterSubject("SubjectDataScience");
  let subCourseJavascript = filterSubject("SubjectJavascript");
  let subCourseAWSCertification = filterSubject("SubjectAWSCertification");
  let subCourseDrawing = filterSubject("SubjectDrawing");

  $(".count-python").html(subCoursePython.length);
  $(".count-EX").html(subCourseExcel.length);
  $(".count-Web").html(subCourseWebDevelopment.length);
  $(".count-DS").html(subCourseDataScience.length);
  $(".count-JS").html(subCourseJavascript.length);
  $(".count-AWS").html(subCourseAWSCertification.length);
  $(".count-DR").html(subCourseDrawing.length);
})();

//** Display count filter by level in Gallery */
(function(){
  let subCourseAll = data.filter(item => item.Level === "All levels");
  let subCourseBeginner = data.filter(item => item.Level === "Beginner");
  let subCourseIntermediate = data.filter(item => item.Level === "Intermediate");

  $(".count-All-levels").html(subCourseAll.length);
  $(".count-Beginner").html(subCourseBeginner.length);
  $(".count-Intermediate").html(subCourseIntermediate.length);
})();






