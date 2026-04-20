(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(i){if(i.ep)return;i.ep=!0;const e=c(i);fetch(i.href,e)}})();function l(){return`
        <div class="nav-bar-container">
            <div class="nav-bar-content">
                <div class="nav-bar-title">
                    <span style="font-weight: 600;">Velibor</span> <span style="font-weight: 100; margin-left: 10px;">Markovic</span>
                </div>
                <div class="nav-bar-links">
                    <a class="nav-bar-link" href="#projects">Projects</a>
                    <a class="nav-bar-link" href="#skills">Skills</a>
                    <!-- <a class="nav-bar-link" href="#contact">Contact</a> -->
                    <!-- <a class="nav-bar-link" href="https://github.com/veljko85" target="_blank">Github</a> -->
                </div>
            </div>
            <div class="nav-bar-bottom-border"></div>
        </div>
    `}function d(){return`
        <div class="hero-container">
            ${l()}
            <div class="hero-content">
                <div class="hero-content-inner">
                    <div class="hero-title">
                        <div class="hero-title-line hero-title-line-one">Hi, I'm Velibor</div>
                        <div class="hero-title-line hero-title-line-two">Frontend & 3D Web Developer</div>
                        <div class="hero-title-line hero-title-line-three">I build interactive 3D experiences using Babylon.js, React, and WebGL.</div>
                    </div>
                    <div class="hero-buttons-container">
                        <div class="hero-button hero-button-one"><a href="#projects">View Projects</a></div>
                        <!-- <div class="hero-button hero-button-two"><a href="https://github.com/veljko85" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a></div> -->
                    </div>
                </div>
            </div>
        </div>
    `}function p(){return`
        <div class="background-container">
            <div class="container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div></div>
            </div>
        </div>
    `}function n(t){return`
        <div class="project-container">
            <div class="project-content">
                <div class="project-image" style="background-image: url('${t.image}');"></div>
                <div class="project-content-inner">
                    <div class="project-title">${t.name}</div>
                    <div class="project-type">${t.type}</div>
                    <div class="project-description">${t.description}</div>
                    <div class="project-technologies">${t.technologies}</div>
                </div>
                <div class="project-buttons-container">
                    <a href="${t.link}" target="_blank"><div class="project-button project-button-one">Live Demo</div></a>
                </div>
            </div>
        </div>
    `}const g=[{id:1,name:"Prodaja Karata",description:"Prodaja Karata website, a website for a ticket selling company from Serbia.",image:"images/projects/prodajaKarata.jpg",link:"https://prodajakarata.com/",technologies:"React.js",type:"Website"},{id:2,name:"Quince Media",description:"Quince Media planet is a 3D web application that allows you to explore the planet of Quince Media.",image:"images/projects/quincePlanet.jpg",link:"https://quincecreative.github.io/quincePlanet/",technologies:"Babylon.js",type:"3D Presentation"},{id:3,name:"GKN Automotive",description:"A 3D web presentation of products and services for GKN Automotive, company based in Germany.",image:"images/projects/gknAutomotive.jpg",link:"https://www.gknautomotive.com/static/5d/index.html",technologies:"Babylon.js",type:"3D Presentation"},{id:4,name:"Audien Hearing",description:"A 3D web presentation of products and services for Audien Hearing, company based in USA.",image:"images/projects/audienHearing.jpg",link:"https://quincecreative.github.io/audien3DPresentationTest/",technologies:"Babylon.js",type:"3D Presentation"},{id:5,name:"Pbierod Architektur",description:"An interactive presentation of projects for Pbierod Architektur, architecture firm based in Germany.",image:"images/projects/pbierodArchitektur.jpg",link:"https://www.pbierod-architektur.hamburg/en/projects",technologies:"Babylon.js, GSAP",type:"3D Presentation"},{id:6,name:"Sandviper",description:"A 3D endless runner game for Sandviper, a company based in USA.",image:"images/projects/sandviper.jpg",link:"https://quincecreative.github.io/SandviperEndlessRunGamee/",technologies:"Babylon.js",type:"Game"},{id:7,name:"Apparel Labs",description:"A 3D landing page for Apparel Lab, a company based in UK.",image:"images/projects/apparelLabs.jpg",link:"https://veljko85.github.io/jacket3DLandingPage/",technologies:"Babylon.js",type:"Landing Page"},{id:8,name:"Humanizing Technologies",description:"An avatar 3D configurator, for Humanizing Technologies, company based in Austria.",image:"images/projects/avatar3dConfigurator.jpg",link:"https://veljko85.github.io/avatar3dConfigurator/",technologies:"Babylon.js",type:"3D Configurator"},{id:9,name:"Mega Holz",description:"3D configurator for fences, for Mega Holz, a company based in Germany.",image:"images/projects/megaHolz.jpg",link:"https://mega-holz.de/zaunplaner/easy-fence/",technologies:"Babylon.js",type:"3D Configurator"},{id:10,name:"Jasperosso",description:"3D configurator for shoes, for Jasperosso shoes company from UK.",image:"images/projects/jasperosso.jpg",link:"https://staging.jasperosso.com/bespoke-italian-leather/shoes/sneakers-womens/recanati/b0075ca5-e6ca-40a6-b579-71ae1c2189aa/configurator?design=10b94b1f-0f2d-4bfd-8a78-bec1937127ba",technologies:"Babylon.js",type:"3D Configurator"},{id:11,name:"Memorials",description:"3D configurator for a loved one, for headstone designer from UK.",image:"images/projects/memorials.jpg",link:"https://quincecreative.github.io/memorials_3d_configurator/",technologies:"Babylon.js",type:"3D Configurator"},{id:12,name:"Vertical",description:"Video presentation for Vertical, a company from Israel and Canada.",image:"images/projects/vertical.jpg",link:"https://veljko85.github.io/theVertical/",technologies:"JavaScript",type:"Video Presentation"},{id:13,name:"The Sylvie",description:"3D presentation of The Sylvie bag by Gucci.",image:"images/projects/gucciTheSylvie.jpg",link:"https://quincecreative.github.io/GucciSylvieBag/",technologies:"Babylon.js",type:"3D Presentation"},{id:14,name:"Smexx",description:"Landing page for Smexx, a company from Serbia.",image:"images/projects/smexx.jpg",link:"https://quincecreative.github.io/smexx/",technologies:"Babylon.js",type:"Landing Page"},{id:15,name:"Quince Hero",description:"Landing page for Quince Media.",image:"images/projects/quinceHero.jpg",link:"https://quincecreative.github.io/quinceHero/",technologies:"Babylon.js",type:"Landing Page"},{id:16,name:"Sandviper",description:"3D configurator for Sandviper, Renardi sneakers model.",image:"images/projects/renardi3DConfigurator.jpg",link:"https://quincecreative.github.io/renardi3DConfigurator/",technologies:"Babylon.js",type:"3D Configurator"},{id:17,name:"Wayb Pico",description:"3D configurator for Wayb Pico, car seat company from USA.",image:"images/projects/waybPico.jpg",link:"https://veljko85.github.io/wayb-pico/",technologies:"Babylon.js",type:"3D Configurator"}],r={projectsList:g};function v(){let t=document.querySelectorAll(".projects-type-item");t.forEach(a=>{a.addEventListener("click",c=>{t.forEach(e=>{e.classList.remove("active")}),a.classList.add("active");let o=document.querySelector(".projects-list");const i=a.dataset.filter;i!=="All"?o.innerHTML=r.projectsList.filter(e=>e.type===i).map(e=>n(e)).join(""):o.innerHTML=r.projectsList.map(e=>n(e)).join("")})})}function u(){return`
        <div class="projects-container" id="projects">
            <div class="projects-content">
                <div class="page-titles projects-title">
                    <h1>Projects</h1>
                </div>
                <div class="projects-type-container">
                    <div class="projects-type-item active" data-filter="All">All</div>
                    <div class="projects-type-item" data-filter="Website">Websites</div>
                    <div class="projects-type-item" data-filter="3D Presentation">3D Presentations</div>
                    <div class="projects-type-item" data-filter="3D Configurator">3D Configurators</div>
                    <div class="projects-type-item" data-filter="Game">Games</div>
                    <div class="projects-type-item" data-filter="Landing Page">Landing Pages</div>
                    <div class="projects-type-item" data-filter="Video Presentation">Video Presentations</div>
                </div>
                <div class="projects-list">
                    ${r.projectsList.map(t=>n(t)).join("")}
                </div>
            
            </div>
        </div>
    `}let m=["Babylon.js","JavaScript","React.js","webGL","Firebase","Vue.js","HTML 5","CSS 3"];function f(){return`
        <div class="skills-container" id="skills">
            <div class="skills-content">
                <div class="page-titles skills-title">
                    <h1>Skills</h1>
                </div>
                <div class="skills-list">
                    ${m.map(t=>`
                        <div class="skill-item">${t}</div>
                    `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `}function h(){return`
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-text">
                    <p>© 2026 Velibor Markovic</p>
                </div>
            </div>
        </div>
    `}document.querySelector("#app").innerHTML=`
    ${p()}
    ${d()}
    ${u()}
    ${f()}

    ${h()}
`;v();
