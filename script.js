const wrapper = document.querySelector(".wrapper");


function show () {

    wrapper.classList.remove("close");
}

function hide () {
    console.log(wrapper)
    wrapper.classList.add("close");
}