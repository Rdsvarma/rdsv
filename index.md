<!DOCTYPE html>
<html>
 <head>
	<title>Rds varma</title>
	
	<link rel="stylesheet" type="text/css" href="jquery.js">
	
	<link rel="stylesheet" type="text/css" href="animate.css">
	<link rel="stylesheet" type="text/css" href="jquery.waypoints.min.js">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
	<style>
	@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

*{
	box-sizing: border-box;
	margin:0;
	color: chartreuse;
}

body{
	margin:0;
	font-family: 'Poppins',sans-serif;
}


.section-title{
	flex: 0 0 100%;
	max-width: 100%;
	margin-bottom: 40px;
}

.section-title h1{
	display: inline-block;
	font-size: 35px;
	text-transform: uppercase;
	font-weight: 700;
	color: #000000;
	margin: 0 0 5px;
	position: relative;
}

.section-title h1:before{
	content:'';
	left:0;
	right: 30%;
	height:2px;
	background-color: #febd01;
	bottom: 0px;
    position: absolute;
}

.text-uppercase{
	text-transform: uppercase;
}



.container{
	max-width: 1140px;
	margin:auto;
}

.row{
	display:flex;
	flex-wrap: wrap;
}

header{
	position: absolute;
	left: 0px;
	right:0px;
	/*border-bottom: 1px solid #423940;*/
	padding: 0px 15px;
	z-index: 10;
}

header .row{
	justify-content: space-between;
	text-align: center;
}
header .brand-name a{
	font-size: 30px;
	text-decoration: none;
	line-height: 72px;
	color: aliceblue;
	font-weight: 600;
	text-transform: uppercase;
	position: relative;
	display: block;
}

header .brand-name a::before{
	/*content: '';*/
	height: 3px;
	background-color: aliceblue;
	width: 100%;
	left: 0px;
	bottom: 0px;
	position: absolute;
}

header .navbar ul{
	list-style: none;
	padding:0;
	margin: 0;
}
header .navbar ul li{
	display: inline-block;
	margin-left: 40px;
}

header .navbar ul li a{
	font-size: 20px;
	text-decoration: none;
	line-height: 72px;
	color: aliceblue;
	font-weight: 600;
	position: relative;
	display: block;
}

header .navbar ul li a::before{
	content: '';
	height: 3px;
	background-color: aliceblue;
	width:0%;
	bottom: 0px;
	right: 0px;
	position: absolute;
	transition: all .5s ease;
}

header .navbar ul li a:hover::before{
	width:100%;
	left:0px;
}

header .navbar ul li a.active::before{
	width:100%;
	left:0px;
}


/*--------------------------------------------------------------------------------------------*/


.sticky{
	position: fixed;
	left: 0%;
	top:0;
	width: 100%;
	background-color: white;
	bottom: 91%;
	text-align: right;
	font-weight: 500;
	padding-right: 50px;
}

header .sticky ul{
	list-style: none;
	padding:0;
	margin: 0;
}

header .sticky ul li{
	display: inline-block;
}

header .sticky ul li a{
	font-size: 20px;
	text-decoration: none;
	line-height: 52px;
	/*color: aliceblue;*/
	color: black;
	font-weight: 600;
	position: relative;
	display: block;
}

header .sticky ul li a::before{
	content: '';
	height: 3px;
	/*background-color: aliceblue;*/
	background-color: #20e020;
	width:0%;
	bottom: -1px;
	right: 0px;
	position: absolute;
	transition: all .5s ease;
}

header .sticky ul li a:hover::before{
	width:100%;
	left:0px;
}

header .sticky ul li a.active::before{
	width:100%;
	left:0px;
}

/*logo*/



/*end sticky nav*/


.home{
	min-height: 100vh;
	background-image: url(hero3.jpg);
	background-position: center;
	background-size: cover;
	padding: 15px;
}

.home .full-screen{
	
min-height: 100vh;
}

.home .home-content{
	flex: 0 0 100%;
	max-width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}

.home .home-content .block{
	flex:0 0 75%;
	max-width: 75%;
	padding-left: 35px;
	border-left: 5px solid #ffffff;
}

.home .home-content .block h6{
	color: aliceblue;
	font-size: 20px;
	font-weight: 500;
	margin: 0;
	padding: 0px;
}
.home .home-content .block h1{
		color: aliceblue;
	font-size: 60px;
	font-weight: 700;
	margin:0;
	padding: 0;
}
.home .home-content .block h3{
	
		color: aliceblue;
	font-size: 25px;
	font-weight: 500;
	margin:0;
	padding: 0;
	line-height: 1.2;	
}

.home .home-content .block .cv-btn{
	padding-top: 20px;
}
.home .home-content .block .cv-btn a{
	border-radius: 4px;
	color: aliceblue;
	border: 1px solid #ffffff;
	padding: 12px 25px;
	text-decoration: none;
	display: inline-block;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 600;
	transition: all .5s ease;
	background-color: transparent;
}

.home .home-content .block .cv-btn a:hover{
	background-color: aliceblue;
	color: #000000;
}


/*Second page*/


.about-me{
	padding: 100px 15px;
	background-color: aliceblue;
}


.about-me .section-title p.small{
	display:block;
	font-size: 15px;
	font-weight: 400;
	color: #838383;
	letter-spacing: 2px;
}


.about-me .about-content .img{
flex: 0 0 33.33%;
	max-width: 33.33%;
}

.about-me .about-content .img img{
	width: 100%;
	display:block;
	
}

.about-me .about-content .text{
	flex: 0 0 66.66%;
	max-width: 66.66%;
	padding-left: 30px;
}


.about-me .about-content .text h4{
	font-size: 25px;
	font-weight: 600;
	margin: 0 0 5px;
	color: #000000;
}


.about-me .about-content .text h6{
	font-size: 18px;
	font-weight: 500;
	margin: 0 0 15px;
	color: #000000;
}


.about-me .about-content .text span{
	color: #febd01;
}

.about-me .about-content .text p{
	font-size: 15px;
	font-weight: 400;
	line-height: 24px;
	color: #838383;
	margin: 0 0 20px;
}

.about-me .about-content .text .info{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.about-me .about-content .text .info .list{
	flex:0 0 calc(50% - 15px);
	max-width: calc(50% - 15px);
	margin-top: 10px;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #dee2e6;
	padding-bottom: 10px;
}

.about-me .about-content .text .info .list label{
	padding-right: 10px;
	color: #000000;
	font-weight: 600;
	font-size: 15px;
}
.about-me .about-content .text .info .list p{
	margin: 0;
}

.about-me .about-content .text .social-links{
	padding-top: 50px;
}

.about-me .about-content .text .social-links a{
	height: 30px;
	width: 30px;
	background-color: #000000;
	border-radius: 3px;
	display: inline-block;
	border: 1px solid #000000;
	line-height:28px;
	margin: 0 5px;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
	font-size: 50px;
	text-align: center;
	padding-top: 8px;
}

.about-me .about-content .text .social-links a:hover{
	background-color: transparent;
	
}

.about-me .about-content .text .social-links a .fa{
	-webkit-transition: all 0s ease;
	transition: all 0s ease;
	color: aliceblue;
	font-size: 15px;
}


.about-me .about-content .text .social-links a:hover .fa{
	color: black;
}


/*Skills*/

.skills{
	padding: 100px 15px;
	background-color: #ffffff;
}

.skills .skills-content{
	flex: 0 0 70%;
	max-width: 60%;
	padding-right: 30px;
	margin-bottom: 70px;
}

.skills .imag{
		flex: 0 0 50%;
	max-width: 50%;
}


.align-items-center{
	align-items: center;
}

.skills .img img{
	width: 125%;
	display: block;
}

.skills .skills-content .section-title p{
	font-size: 15px;
	font-weight: 400;
	line-height: 24px;
	color: #83838383;
	margin: 15px 0 0;
}

.skills .skills-content .skill-box{
	
	flex: 0 0 100%;
	max-width: 100%;
	margin-bottom: 30px;
}

.skills .skills-content .skill-box h6{
	font-size: 16px;
	font-weight: 500;
	color: #000000;
	margin: 0 0 8px;
}

.skills .skills-content .skill-box .skill-bar{
	height: 8px;
	background-color: #eeeeee;
	position: relative;
}

.skills .skills-content .skill-box .skill-bar .skill-bar-in{
	background-color: #febd01;
	position: absolute;
	left: 0;
	top: 0;
	height:100%;
}

.skills .skills-content .skill-box .skill-bar .skill-bar-in span{
	color: #838383;
	font-size: 16px;
	font-weight: 400;
	position: absolute;
	right: 0;
	top:-30px;
}



.resume{
	background-color: aliceblue;
	height: 200vh;
}

.resume .section-title h1{
margin-top: 60px;
}


.resume-content p{
	color: black;	
}


.experience, .education {
	display: flex;
	flex-wrap: wrap;
}

.experience-title, .education-title {
	flex: 0 0 100%;
	width: 100%;
}

.experience-title h2{
	color: crimson;
	text-align: center;
	margin-right: 210px;
	margin-top: 30px;
	margin-bottom: 40px;
}

.experience-head{
	flex: 0 0 40%;
	width: 40%;
	border-right: 2px solid black;
}

.experience-head h2{
	color: black;
	font-weight: 700;
	margin-top: 140px;
	text-align: center;
}

.experience-head h4, .certificates-dis p, .collge-dis p{
	color: black;
	font-weight: 500;
	text-align: center;
}

.experience-content, .education-content, .certificates-content{
	
		flex: 0 0 50%;
	width: 50%;
	padding-left: 60px;
	margin-bottom: 20px;
}

.experience-content h2, .education-content h2{
	color: black;
	margin-top: 20px;
}

.experience-content p, .education-content p, .certificates-content p{
	margin-top: 10px;
	font-weight: 200;
	font-size: 15px;
}

.education-head{
	flex: 0 0 40%;
	width: 40%;
	border-right: 2px solid black;
}
.education-head h2{
		color: black;
	font-weight: 700;
	margin-top: 40px;
	text-align: center;
}

.education-title h2{
	color: crimson;
	text-align: center;
	margin-right: 210px;
	margin-top: 30px;
	margin-bottom: 50px;
}

.collage{
	margin-top: 80px;
}

.certificates-content h2{
	color: black;
	margin-top: 30px;
}

.certificates-content{
	margin-bottom: 40px;
}

ion-icon {
font-size: 20px;
	margin-top: 8px;
	color: white;
}

.icon-1{
	background-color: black;
	position: absolute;
	border-radius: 50%;
	font-size: 50px;
	color: white;
	width: 3%;
	height: 6%;
	text-align: center;
	align-self: center;
	margin-left: 436px;
}

.icon-2{
		background-color: black;
	position: absolute;
	border-radius: 50%;
	font-size: 50px;
	color: white;
	width: 3%;
	height: 6%;
	text-align: center;
	align-self: center;
	
	margin-left: 436px;
}

.icon-3{
	background-color: black;
	position: absolute;
	border-radius: 50%;
	font-size: 50px;
	color: white;
	width: 3%;
	height: 6%;
	text-align: center;
	align-self: center;
	margin-left: 436px;
	margin-top: 140px;
}


.contact-social-links {
	background-color: black;
	flex: 0 0 100%;
	width: 100%;
	margin-top: 100px;
	font-size: 150%;
	margin-bottom: 50px;
}

.contact-social-links i{
	margin-right: 20px;
}

.contact-details {
	background-color: black;
	width: 100%;
	padding-top: 50px;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	font-size: 13px;
}

.contact-details h1 ion-icon{
	font-size: 40px;
	margin-top: 100px;
	margin-bottom: 20px;
}

.map {
	flex: 0 0 33%;
	width: 30%;
}

.mail {
	flex: 0 0 33%;
	width: 30%;
}

.mobile {
	flex: 0 0 33%;
	width: 30%;
}


/* ----------------------------------------------- */
/* Animations */
/* ----------------------------------------------- */

.js-wp-1,
.js-wp-2,
.js-wp-3,
.js-wp-4,
.js-wp-5,
.js-wp-6,
.js-wp-7,
.js-wp-8,
.js-wp-9,
.js-wp-10,
.js-wp-11,
.js-wp-12,
.js-wp-13,
.js-wp-14,
.js-wp-15,
{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
}


.js-wp-1.animate__animated,
.js-wp-2.animate__animated,
.js-wp-3.animate__animated,
.js-wp-4.animate__animated,
.js-wp-5.animate__animated,
.js-wp-6.animate__animated,
.js-wp-7.animate__animated,
.js-wp-8.animate__animated,
.js-wp-9.animate__animated,
.js-wp-10.animate__animated,
.js-wp-11.animate__animated,
.js-wp-12.animate__animated,
.js-wp-13.animate__animated,
.js-wp-14.animate__animated,
.js-wp-15.animate__animated,{
    opacity: 1;
}





/*
https://youtu.be/wh4rDZwEelA?t=205
https://youtu.be/LzFRIJZKyCQ?t=211
https://youtu.be/VVuFr_050rI
*/

	</style>
 </head>
	
  <body>
  <header>
	 <div class="container">
	   <div class="row">
		  <div class="brand-name ">
			  <a herf="" class="logo">Varma</a>
		  </div>
		  <div class="navbar">
			<ul>
			  <li><a href="#" class="active js-home">Home</a></li>
			  <li><a href="#" class="js-about">About</a></li>
			  <li><a href="#" class="js-skills">Skills</a></li>
			  <li><a href="#" class="js-resume">Resume</a></li>
			  <li><a href="#" class="js-contact">Contact</a></li>
			</ul>
		  </div>
		</div>	
	   </div>		 
  </header>
	
	
	<section class="home js-home-section">
	  <div class="container">
		<div class="row full-screen">
		  <div class="home-content">
			<div class="block ">
				<h6>Hello, My name is</h6>
			  <h1>R sai Varma</h1>
			  <h3>Web Developer</h3>
			  <div class="cv-btn">
				<a href="">View CV</a>
			  </div>
			</div>
		  </div>
		</div>
	   </div>
	</section>
	  
	  
	<section class="about-me js-about-me-section">
	  <div class="container">
	    <div class="row">
		   <div class="section-title">
			   <h1 class="js-wp-5">About Me</h1>
			   <p class="small text-uppercase">Information About Me</p>
		   </div>
		</div>
		<div class="row">
		  <div class="about-content">
			<div class="row">  
			<div class="img">
			  <img src="myphoto.jpg" alt="about me"/>
			  </div>
			 <div class="text ">
			  <h4>I'm Rudraraju Durga Siva Sai Varma</h4>
			  <h6>System Enginner <span>IT services, TCS</span> Kolkata</h6>
			  <p>I started my carrier in TCS Kolkata as a Fresher, now I'm having 1.5 years of experience in IT industry, worked in TCS as Automation Tester, where we develop and automate the scripts.</p>
			   <div class="info js-wp-9">
				  <div class="list">
				    <label>Birthday:</label>
				    <p>13th May 1997</p>
				  </div>
				  <div class="list">
				    <label>Email:</label>
				    <p>rdsvarma94@gmail.com</p>
				  </div>
				  <div class="list"> 
				     <label>Age:</label>
				     <p>23 Yr</p>
				  </div>
				  <div class="list">
				     <label>Phone:</label>
				     <p>9490155577</p>
				  </div>
				  <div class="list">
				     <label>Residence:</label>
				     <p>India</p>
				  </div>
			      <div class="list">
			          <label>Current Location:</label>
				      <p>Kolkata</p>
				  </div>
		          <div class="list">  
		              <label>Permanent Address:</label>
				      <p>Near Yendada super market vizag</p>
				  </div>
		          <div class="list">
		               <label>Present Address:</label>
				       <p>Newtown Kolkata West Bengal</p>
				  </div>
				 </div>
				 
				 
				 <div class="social-links ">
				  <a class="js-wp-1" href="https://www.facebook.com/rdsv1/" target="_blank"><i class="fa fa-facebook"></i></a>
				  <a class="js-wp-2" href="https://twitter.com/varmaRds/" target="_blank"><i class="fa fa-twitter"></i></a>
				  <a class="js-wp-3" href="https://www.instagram.com/rdsvarma/" target="_blank"><i class="fa fa-instagram"></i></a>
				  <a class="js-wp-4" href="https://www.linkedin.com/in/rds-varma-4324901a9/" target="_blank"><i class="fa fa-linkedin"></i></a>
				 </div>
				 
			  </div>
			</div>
		   </div>
		  </div> 
	  </div>
	</section>
	  
	  
	<section class="Skills js-skills-section" id="skills">
	  <div class="container">
		<div class="row align-items-center">
		  <div class="skills-content">
			 <div class="row">
			   <div class="section-title ">
			     <h1 class="js-wp-6">professional Skills</h1>
				 <p>I have ceritifications in Html, CSS and java Script and for the Python, not only the ceritifications i had hands on experience in these cources.</p>
				 </div>
			  </div>
			  
		      <div class="row">
				  
			    <div class="skill-box">
				  <h6>HTML</h6>
				  <div class="skill-bar">
					<div class="skill-bar-in" style="width: 92%">
					  <span class="js-wp-8">92%</span>
					</div>
				  </div>
				</div>
			    <div class="skill-box">
				  <h6>CSS</h6>
				  <div class="skill-bar">
					<div class="skill-bar-in" style="width: 75%">
					  <span class="js-wp-8">75%</span>
					</div>
				  </div>
				</div>
				<div class="skill-box">
				  <h6>Java Script</h6>
				  <div class="skill-bar">
					<div class="skill-bar-in" style="width: 80%">
					  <span class="js-wp-8">80%</span>
					</div>
				  </div>
				</div>
				<div class="skill-box">
				  <h6>Python</h6>
				  <div class="skill-bar">
					<div class="skill-bar-in" style="width: 90%">
					  <span class="js-wp-8">90%</span>
					</div>
				  </div>
				</div>
				<div class="skill-box">
				  <h6>SQL</h6>
				  <div class="skill-bar">
					<div class="skill-bar-in" style="width: 68%">
					  <span class="js-wp-8">60%</span>
					</div>
				  </div>
				</div> 
			  </div>
			</div>
			
		   <div class="img">
			   <img src="skills.jpg" alt="skill" />
			</div>
			
		  </div>
		</div>
	  </section>  
	  
	  
	  
	    <section class="resume js-resume-section" id="resume">
	    <div class="container">
			
			<div class="row">
				<div class="section-title">
					<h1 class="js-wp-7">Resume</h1>
				</div>
			</div>
			
			<div class="row">
				<div class="resume-content">
					<p>Currently working as QA Engineer for top MNC, these are a few of the things that I've been working on lately:</p>
					    
				
					<div class="experience">       
						<div class="experience-title">
						 <h2 class="js-wp-13">Experience</h2>
						</div>
						
						<div class="experience-head">
						<h2>Tata Consultancy Services</h2>
						<h4>November 2018 - Present</h4>
						</div>
						
						
						<div class="icon-1">
					     <ion-icon name="medkit-outline"></ion-icon>	
						</div>
						
						<div class="experience-content">
						 <h2>Analyst - Test Automation<h2>
						 <P>Involved in design and development of automation frameworks like fitnesse using Selenium Webdriver. Analysis of test requirement and automation feasibility.</P>
						 <h2>Manual - Test Automation</h2>
						 <P>Looking functionalits of various applications. From application perspective will check each and every functions of memu and sub menu.</P>
						 <h2>Test script maintainence</h2>
						 <p>The maintaince of the test cases is done using ALM & Jira, Where we used to track the number of test cases present in the projrct and maintained the automation job in Jenkins</p>
						</div> 
				     </div>
				
					<div class="education">       
						<div class="education-title">
						 <h2 class="js-wp-14">Education</h2>
						</div>
						
						 <div class="education-head">
							 
						   <div class="certificates"><h2>Certificates</h2></div>
						   <div class="certificates-dis"><p>Ongoing</p></div>
							 
						   <div class="collage"><h2>Bachelor's Degree</h2></div>
						   <div class="collge-dis"><p>B-Tech June 2014 - May 2018</p></div>

						</div>
							
						<div class="icon-2">
						<ion-icon name="school-outline"></ion-icon>
						</div>
						
						<div class="icon-3">
						<ion-icon name="school-outline"></ion-icon>
						</div>
						
						<div class="certificates-content">
						   
							<h2>Udemy</h2>
						    <p>Courses taken or in-progress include Python3.<br>Build responsive real world website with HTML5, CSS3 and JQuery.<br> The complete JavaScript cource 2020 with Build real projets.</p>
							
							<h2>Gitam university</h2>
							<p>B.Tech. in Electronics and Communication Engineering(ECE).</p>
						</div> 
				     </div>				
			  </div>
			</div>
			
		  </div>
	  </section>
			
		<section class="contact js-contact-section" id="contact">
			<div class="row">
				<div class="contact-details">
					
					<div class="map">
						<h1 class="js-wp-10"><a href="https://www.google.com/maps/place/Krishna+Ashirbad+Co+Operating+Housing+Society/@22.574984,88.4696882,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3a027700689f1bcb:0x5c208795ec7114ce!2sKolkata,+West+Bengal!3b1!8m2!3d22.5402602!4d88.3821989!3m4!1s0x3a02752f9145cdad:0x74d3e720d6a64b70!8m2!3d22.5749825!4d88.4702356" target="_blank"><ion-icon name="location-outline"></ion-icon></a></h1>
						<p>New town Kolkata 700156</p>
					</div>
					<div class="mail">
						<h1 class="js-wp-11"><a href="mailto: rdsvarma94@gmail.com"> <ion-icon name="mail-open-outline"></ion-icon></a></h1>
						<p>rdsvarma94@gmail.com</p>
					</div>
					<div class="mobile">
						<h1 class="js-wp-12"><a href="tel:+91 9490155577"><ion-icon name="call-outline"></ion-icon></a></h1>
						<p>Phone (+91) 9490155577</p>
					</div>
					
				    <div class="contact-social-links">
				     <a href="https://www.facebook.com/rdsv1/" target="_blank"><i class="fa fa-facebook"></i></a>
				     <a href="https://twitter.com/varmaRds/" target="_blank"><i class="fa fa-twitter"></i></a>
				     <a href="https://www.instagram.com/rdsvarma/" target="_blank"><i class="fa fa-instagram"></i></a>
				     <a href="https://www.linkedin.com/in/rds-varma-4324901a9/" target="_blank"><i class="fa fa-linkedin"></i></a>
				     
				    </div>
					
				</div>
			</div>
			</section>
			
			
			
			
	<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
    <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.jsdelivr.net/selectivizr/1.0.3b/selectivizr.min.js"></script>
    <script src="jquery.waypoints.min.js"></script>
    <script src="jquery.js"></script>
    
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-61026110-2', 'auto');
      ga('send', 'pageview');

    </script>
  </body>
</html>
