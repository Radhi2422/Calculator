class Theme{

constructor(){

this.button=

document.getElementById(

"theme"

);

}

toggle(){

document.body.classList.toggle(

"dark"

);

}

initialize(){

this.button.addEventListener(

"click",

()=>this.toggle()

);

}

}

export default Theme;