const home = document.getElementById("list-home-list");
const about = document.getElementById("list-about-list");
const skill = document.getElementById("list-skill-list");
const work = document.getElementById("list-work-list");
const contact = document.getElementById("list-contact-list");
document.getElementById("skill-tab").style.display = "none";
document.getElementById("about-tab").style.display = "none";
document.getElementById("work-tab").style.display = "none";
document.getElementById("contact-tab").style.display = "none";

home.onclick = function () {
    document.getElementById("skill-tab").style.display = "none";
    document.getElementById("about-tab").style.display = "none";
    document.getElementById("work-tab").style.display = "none";
    document.getElementById("home-tab").style.display = "block";
    document.getElementById("contact-tab").style.display = "none";
}
about.onclick = function () {
    document.getElementById("skill-tab").style.display = "none";
    document.getElementById("about-tab").style.display = "block";
    document.getElementById("work-tab").style.display = "none";
    document.getElementById("home-tab").style.display = "none";
    document.getElementById("contact-tab").style.display = "none";
        
}
skill.onclick = function () {
    document.getElementById("skill-tab").style.display = "block";
    document.getElementById("about-tab").style.display = "none";
    document.getElementById("work-tab").style.display = "none";
    document.getElementById("home-tab").style.display = "none";
    document.getElementById("contact-tab").style.display = "none";
}
work.onclick = function () {
    document.getElementById("skill-tab").style.display = "none";
    document.getElementById("about-tab").style.display = "none";
    document.getElementById("work-tab").style.display = "block";
    document.getElementById("home-tab").style.display = "none";
    document.getElementById("contact-tab").style.display = "none";
}
contact.onclick = function () {
    document.getElementById("skill-tab").style.display = "none";
    document.getElementById("about-tab").style.display = "none";
    document.getElementById("work-tab").style.display = "none";
    document.getElementById("home-tab").style.display = "none";
    document.getElementById("contact-tab").style.display = "block";
}

