location.hash = "Home";
var content = document.querySelectorAll(".content");
var Li = document.querySelectorAll("li");
Li.forEach(e => {
    e.addEventListener("click", () => {
        const target = document.querySelector(e.dataset.target);
        Li.forEach(
            es => {
                es.classList.remove("active")
            }
        );
        content.forEach(e => {
            e.classList.remove("active_tab")
        })
        target.classList.add("active_tab");
        e.classList.add("active");
        location.hash = e.textContent;
    });

});








var main = document.querySelector(".main");
var loader = document.querySelector(".loader");
var WelcomeNote = document.querySelector(".hello");
var LuckyDay = document.querySelector(".lucky");
var Go = document.querySelector(".go");

var Texts = ["Today is you Lucky Day","Welcome Back","What a beautifull Day","Life is beautifull","Let's Build a Website together"];

document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "flex";
    setTimeout(() => {
        if (loader.style.display == "flex") {
            WelcomeNote.style = "opacity: 1 !important; transform: none  !important;";
            setTimeout(() => {
                if (WelcomeNote.style.opacity == "1") {
                    WelcomeNote.style = "opacity: 0 !important; transform: scale(0.9)  !important;";
                        LuckyDay.innerText = Texts[Math.floor(Math.random() * Texts.length)];
                        LuckyDay.style = "opacity: 1 !important; transform: none  !important;";
                    setTimeout(() => {
                        if (LuckyDay.style.opacity == "1") {
                            WelcomeNote.style = "opacity: 0 !important; transform: scale(0.9)  !important;";
                            LuckyDay.style = "opacity: 0 !important; transform: none  !important;";
                            Go.style = "opacity: 1 !important; transform: none  !important;";
                            if (Go.style.opacity == "1") {
                                setTimeout(() => {
                                    WelcomeNote.style = "opacity: 0 !important; transform: scale(0.9)  !important;";
                                    LuckyDay.style = "opacity: 0 !important; transform: none  !important;";
                                    Go.style = "opacity: 0 !important; transform: none  !important;";
                                    offAni();
                                }, 500)
                            }
                        }
                    }, 1000)
                }
            }, 1000)
        }
    }, 1000)
});

function offAni() {
    if(loader.style.display == "flex"){
        loader.style.display = "none";
    }
}



var to = document.querySelectorAll(".row");
to.forEach(e => {
    e.addEventListener("mouseenter", ee => {
        var tos = ee.target.getAttribute("to");
        var and = ee.target.getAttribute("and");
        var third = ee.target.getAttribute("third");
        tos = document.querySelector(tos)
        and = document.querySelector(and)
        third = document.querySelector(third)
        to.forEach(e=> e.classList.remove("active_bg"))
        tos.classList.add("active_bg");
        and.classList.add("active_bg");
        third.classList.add("active_bg");
    })

})
to.forEach(e => {
    e.addEventListener("mouseleave", ee => {
        to.forEach(e=> e.classList.remove("active_bg"))
    })

})
