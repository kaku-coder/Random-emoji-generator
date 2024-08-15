const btnel=document.querySelector(".btn")
const emojiname=document.querySelector(".emojiname")
const emoji =[]

async function getemoji(){
    let response = await fetch("https://emoji-api.com/emojis? access_key=b5632cfda79614aa14514950418e700326702673")

    data=await response.json()
    console.log(data);
    
    for(let i=0;i<1500;i++){
        emoji.push({
            emojinames:data[i].character,
            emojicode:data[i].unicodeName
        })
    }
}

getemoji()
console.log(emoji);

btnel.addEventListener("click",function(){
    const randomnumber=Math.floor(Math.random()*emoji.length) 
    btnel.innerText=emoji[randomnumber].emojinames
    emojiname.innerText=emoji[randomnumber].emojicode
    
    
})