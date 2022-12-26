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
            console.log(image.message)
            div.appendChild(img)
        }
    })
}


document.addEventListener('DOMContentLoaded',()=>{
    fetchImages()
})
console.log('%c HI', 'color: firebrick')
