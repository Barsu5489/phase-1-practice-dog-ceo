function fetchImages(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res=>res.json())
    .then(image=>{
        for(let i = 0;i < image.message.length; i++){
            const dogImageContainer = document.getElementById('dog-image-container')
            const div = document.createElement('div')
            dogImageContainer.appendChild(div)
            const img = document.createElement('img')
            img.src = image.message[i]
            div.appendChild(img)
        }
    })
}

function breed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(breeds=>{
        const breed = Object.keys(breeds.message)
    for(let i = 0; i < breed.length; i++){
        console.log(breed[i])
    }
       
    
    })   
}


document.addEventListener('DOMContentLoaded',()=>{
    breed()
    fetchImages()
})
console.log('%c HI', 'color: blue')
