let buttons = document.querySelectorAll("button");
let open = false;
for(let button of buttons){
    button.addEventListener("click", () => {
        let ul = document.querySelector(`.${button.classList[0]}Items`);
        let img = button.querySelector(".down-arrow");
        for(let ul1 of document.querySelectorAll("ul")){
            ul1.classList.remove("active");
            for(let arrow of document.querySelectorAll(".down-arrow")){
                arrow.style.rotate = "0deg";
            }
        }
        if(open){
            ul.classList.remove("active");
            open = false;
        }
        else{
            ul.classList.add("active");
            open = true;
        }
        img.style.rotate = "0deg";
        if(ul.classList[1] === "active"){
            img.style.rotate = "180deg";
        }
    });

}