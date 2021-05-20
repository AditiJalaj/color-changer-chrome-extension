let page=document.getElementById('buttonDiv')
letSelectedClassName='current';

const presetButtonColors=['#000000','#AED6F1','#E35B3E','#DAF7A6','#FFC300','#F0F3F4','#AF7AC5']


// Reacts to a button click by marking the selected button and saving the selection
const handleButtonClick=(e)=>{
    //remove styling from the previously selected color
    let current=e.target.parentElement.querySelector(`.${selectedClassName}`)

    if(current && current !==e.target){
        current.classList.remove(selectedClassName);
    }

    //mark the button as selected
    let color=e.target.dataset.color;
    e.target.classList.add(selectedClassName)
    chrome.storage.sync.set({color})

    //adding button to the pg for each color
    const options=(buttonColors)=>{
        chrome.storage.sync.get("color",(data)=>{
            let currentColor=data.color

            //for each color-
            for(let buttonColor of buttonColors){
                //create a button with that color
                let button=document.createElement('button');
                button.dataset.color=buttonColor;
                button.style.backgroundColor=buttonColor;

                //mark the currently selected color
                if(buttonColor===currentColor){
                    button.classList.add(selectedClassName);
                }

                // …and register a listener for when that button is clicked
                button.addEventListener('click',handleButtonClick)
                page.appendChild(button)

            }
        })
    }
}

// Initialize the page by constructing the color options
options(presetButtonColors)