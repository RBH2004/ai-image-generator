const generateFrom=document.querySelector(".generate-form");
const imageGallery=document.querySelector(".image-gallery");

const generateAiImages=async(userPromt,userImgQuantity)=>{
    try{
        const response=await fetch("https://api.openai.com/v1/images/generations",{   
            method:"Post",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${OPENAI_API_KEY}`
            },

            body:JSON.stringify({
                promt:userPromt,
                n:userImgQuantity,
                size:"512x512"
            })
        });
        
    
    }catch(error){
        console.log(error)
    }
}
const handleFormSubmission=(e)=>{
    e.preventDefault();
    console.log(e.srcElement);
    const userPromt=e.srcElement[0].value;
    const userImgQuantity=e.srcElement[1].value;

    const imgCardMarkup=Array.from({length:userImgQuantity},()=>`<div class="img-card loading">
            <img src="images/loader.svg" alt="">
            <a href="#" class="download-btn">
                <img src="images/download.svg" alt="download icon">
            </a>
        </div>`).join();

        console.log(imgCardMarkup);
        imageGallery.innerHTML= imgCardMarkup;
        generateAiImages(userPromt,userImgQuantity)
}


generateFrom.addEventListener("submit",handleFormSubmission);