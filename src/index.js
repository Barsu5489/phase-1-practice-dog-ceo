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
        const dogBreeds = document.getElementById('dog-breeds')
    for(let i = 0; i < breed.length; i++){
        console.log(breed[i])
        const li = document.createElement('li')
        li.textContent = breed[i]
        dogBreeds.appendChild(li)
        li.addEventListener('click', ()=>{
            li.style.color = 'red'
            console.log(li.textContent.split('').forEach(letter=>{
                if(letter == 'a'){
                    li.style.display = 'block'
                    console.log('yes breddda')
                }else{
                    li.style.display = 'none'
                    console.log('removed')
                }
            }))
        })
    }
       
    
    })   

}


document.addEventListener('DOMContentLoaded',()=>{
    breed()
    fetchImages()
})
console.log('%c HI', 'color: blue')
