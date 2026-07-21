
const AboutLine = document.getElementById("AboutLine");
document.getElementById("AboutBtn").addEventListener("click", function(){
    AboutLine.scrollIntoView({behavior: "smooth"});
});

const ExperienceLine = document.getElementById("ExperienceLine");
document.getElementById("ExperienceBtn").addEventListener("click", function(){
    ExperienceLine.scrollIntoView({behavior: "smooth"});
});

const ProjectsLine = document.getElementById("ProjectsLine");
document.getElementById("ProjectsBtn").addEventListener("click", function(){
    ProjectsLine.scrollIntoView({behavior: "smooth"});
});

const ContactLine = document.getElementById("ContactLine");
document.getElementById("ContactBtn").addEventListener("click", function(){
    ContactLine.scrollIntoView({behavior: "smooth"});
});
