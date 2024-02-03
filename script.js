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







const greetings = [
    'ہیلو',
    'مرحبًا',
    '你好',
    'नमस्ते',
    'こんにちは',
    '¡Hola',
    'Bonjour',
    'Hallo',
    'Привет',
    'Olá',
    'Hello',
    "Let's Go!"
];

var loader = document.querySelector(".loader");
const greetingElement = document.querySelector('.text');
function displayGreetings() {

    greetings.forEach((greeting, index) => {
        setTimeout(() => {
            greetingElement.innerHTML =`<li style="list-style='circle'">${greeting}</li>` ;
            setTimeout(()=>{
                loader.style = "display: none;"
            },150 * greeting.length + 2000)
        }, index * 150 );
    });

}

window.onload = displayGreetings;


var to = document.querySelectorAll(".row");
to.forEach(e => {
    e.addEventListener("mouseenter", ee => {
        var tos = ee.target.getAttribute("to");
        var and = ee.target.getAttribute("and");
        var third = ee.target.getAttribute("third");
        tos = document.querySelector(tos)
        and = document.querySelector(and)
        third = document.querySelector(third)
        to.forEach(e => e.classList.remove("active_bg"))
        tos.classList.add("active_bg");
        and.classList.add("active_bg");
        third.classList.add("active_bg");
    })

})
to.forEach(e => {
    e.addEventListener("mouseleave", ee => {
        to.forEach(e => e.classList.remove("active_bg"))
    })

})


document.querySelector("h1").onclick = ()=>{
    location.reload()
}










var right_c = document.querySelector(".right-c");

right_c.addEventListener("mouseenter", () => {
    var right_top = right_c.querySelector(".top");
    right_top.style = "transform: translateY(-100%);"


    var right_before = right_c.querySelector(".before");
    right_before.style = "transform: rotate(90deg) translate(1003px, 106px);"

    var right_after = right_c.querySelector(".after");
    right_after.style = "transform: rotate(90deg) translate(993px, 106px);"

    var hov_text = right_c.querySelector(".hov-text");
    hov_text.style = "scale: 0;;"
})


right_c.addEventListener("mouseleave", () => {
    var right_top = right_c.querySelector(".top");
    right_top.style = "transform: translateY(0%);"


    var right_before = right_c.querySelector(".before");
    right_before.style = "transform: rotate(90deg) translate(203px, 106px);"

    var right_after = right_c.querySelector(".after");
    right_after.style = "transform: rotate(90deg) translate(117px, 106px);"

    var hov_text = right_c.querySelector(".hov-text");
    hov_text.style = "scale: 1;;"
})






function time() {
    setInterval(() => {
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        hour = (hour < 10) ? "0" + hour : hour;
        if(hour > 12){
            hour = hour - 12;
        }

        if(hour >= 12){
            document.querySelector(".clock > p").textContent = `${hour} / ${min} / ${sec}-pm`
        }else{
            document.querySelector(".clock > p").textContent = `${hour} / ${min} / ${sec}-am`
            
        }
    }, 1000)
};


document.addEventListener("DOMContentLoaded", time())
