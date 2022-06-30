// let box_by_tag = document.getElementsByTagName('div')
// let box_by_class = document.getElementsByClassName('box')
// let box_by_id = document.getElementById('box')

// let div_class = document.querySelector('.box')
// let div_id = document.querySelector('#box')
// let div_all = document.querySelectorAll('.box')
// let body = document.body

// console.log(div_all, box_by_tag);

// div_tag.addEventListener('click', () => {

// })

// events

// div_tag.onclick = () => {
//     console.log('click');
// }
// div_tag.onmouseenter = () => {
//     console.log('enter');
// }
// div_tag.onmouseleave = () => {
//     console.log('leave');
// }
// div_tag.onmousemove = () => {
//     console.log('move');
// }
// div_tag.ondblclick = () => {
//     console.log('double click');
// }
// body.onscroll = () => {
//     console.log('scrolling...');
// }


// let div_tag = document.querySelector('div')
// let h1 = document.querySelector('span')


// div_tag.onclick = () => {
// class
// div_tag.className += " active"    
// div_tag.classList.contains('active')
// if(div_tag.classList.contains('active')) {
//     div_tag.classList.remove('active')
// } else {
//     div_tag.classList.add('active')
// }
// div_tag.classList.toggle('active')

// text
// h1.innerText = "bye bye <b  style='color: red;'>world</b>"
// h1.innerHTML = "bye <input type='text' value='bye' /> <b  style='color: red;'>world</b>"

// }



// let inp = document.querySelector('input')

// // attributes

// btn.onclick = () => {


//     if(inp.getAttribute('type') === 'password') {
//         inp.setAttribute('type', 'text')

//         btn.innerHTML = "hide"

//     } else {
//         inp.setAttribute('type', 'password')
//         btn.innerHTML = "show"
//     }
//     // console.log(inp.getAttribute('type'));

// }



// btn.onclick = () => {
//     btn.style.border = "2px solid red"
//     btn.style.borderRadius = "14px"
//     btn.style.padding = "20px"

//     document.body.style.background = "black"
// }



let btn = document.querySelector('button')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')

btn.onclick = () => {
   openModal()
}


function openModal(params) {
    modal.style.display = "flex"
    modal_bg.style.display = "block"

    setTimeout(() => {
        modal.style.opacity = "1"
        modal_bg.style.opacity = "1"
        modal.style.transform = "translate(-50%, -50%) scale(1)"
    }, 200);
}