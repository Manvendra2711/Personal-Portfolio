// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// // Typed Js
// const typed = new Typed('.multiple-text', {
//     strings: ['Full Stack Developer', 'Web Designer', 'Frontend Developer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


// Mail with a message on clicking hire me button
function openEmailCompose() {
    var email = 'singhmanvendra2711@gmail.com';
    var subject = 'Discussion Regarding Your Application for [Position]';
    var body = 'Hello Manvendra!,\n\nI am contacting you regarding our hiring opportunity for the [Position] role. We are impressed by your qualifications and believe you could be a valuable addition to our team. Please let me know if you would like to discuss further.\n\nLooking forward to the opportunity to connect.\n\nRegards,\n[HR Recruiter Name]\n[Company Name]\nContact: [HR Recruiter Contact Information]';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.open(mailtoLink, '_blank');
}



//Scroll Sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *= ' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
    });
    // Sticky Header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation fotter on sroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}