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
        const select = document.querySelector('#breed-dropdown')
        const options = select.options;
        // for(let i = 0; i < options.length; i++){
        //         options[i].addEventListener('click', () =>{
        //             console.log('a was clicked')
        //         })
            
        // }
        



    for(let i = 0; i < breed.length; i++){
        
        const li = document.createElement('li')
        li.textContent = breed[i]
        dogBreeds.appendChild(li)
        li.addEventListener('click', ()=>{
            li.style.color = 'red'
        })
            const filter_w = li.textContent.split('')
            
                const selectElement = document.querySelector('#breed-dropdown');
                selectElement.addEventListener('change', function(event) {
                    filter_w.forEach(letter=>{
                    const selectValue = event.target.value
                    if(selectValue === letter){
                        console.log('present')
                        li.style.color = 'red'
                        
                        console.log(li.textContent)
                     }else if(selectValue !== letter){
                        li.style.display -= 'none'
                     }
                  
                     //else if (letter != selectValue){
                    //     li.style.display = 'none'
                    // }

    
                });
            })
        
            // console.log(li.textContent.split('').forEach(letter=>{
            //     if(letter == 'a'){
            //         li.style.display = 'block'
            //         console.log('yes breddda')
            //     }else{
            //         li.style.display = 'none'
            //         console.log('removed')
            //     }
            // }))
        
    }
       
    
    })   

}


document.addEventListener('DOMContentLoaded',()=>{
    breed()
    fetchImages()
})
console.log('%c HI', 'color: blue')
