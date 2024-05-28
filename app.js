// let red = Math.floor(Math.random()*255)
// let blue = Math.floor(Math.random()*255)
// let green = Math.floor(Math.random()*255)

// // let colorGenerate = document.getElementById('btn')

// let body = document.getElementById('bg')
// let colorGenerate = document.getElementById('btn').addEventListener('click', ()=>{
//     let color = document.getElementById('code');
//     color.innerHTML = `rbg(${red}, ${blue}, ${green})`
//     body.style.background = `rbg(${red}, ${blue}, ${green});`
// })

// setInterval(colorGenerate, 1000);



let body = document.getElementById('bg');
let colorGenerate = document.getElementById('btn').addEventListener('click', () => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    console.log(red,blue,green);
    let color = document.getElementById('code');
    color.innerHTML = `rgb(${red}, ${blue}, ${green});`;
    body.style.background = `rgb(${red}, ${blue}, ${green})`;
});

// If you want to change the color automatically every second, you can do this:
setInterval(() => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    
    console.log(red,blue,green);
    let color = document.getElementById('code');
    color.innerHTML = `rgb(${red}, ${blue}, ${green});`;
    body.style.background = `rgb(${red}, ${blue}, ${green})`;
}, 5000);