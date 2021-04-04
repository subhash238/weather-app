var products=JSON.parse(localStorage.getItem('cart'))
var div=document.getElementById("display")
products.forEach(element => {
    var para=document.createElement("div")
    para.style.width="25%"
    var img=document.createElement('img')
    var p=document.createElement('p')
    img.style.width="100px"
    img.style.height="100px"
    img.setAttribute('src',element.image)
    p.innerHTML=`CATEGORY: ${element.category}<br> PRICE: ${Math.floor(element.price)}<br>`
                para.append(img,p)
                div.append(para)
                
});
var total=products.reduce((a,c)=>
  a+Number(c.price),
0)
var h=document.getElementById('total')
 h.textContent=`your total cart value is ${Math.floor(total)}`

function apply(){
    var promo=document.getElementById('promocode').value
    var now=document.getElementById("now")
    if(promo=="PROMO10"){
        var discount=Math.floor((10/100)*Math.floor(total))
        var pay=(Math.floor(total))-(discount)
        now.textContent=`You got 10% Of discount now your cart value is ${pay} `
        alert("congrats you got 10% discount")
        setTimeout(()=>{
            window.location.href="checkout.html"
        },2000)
    }else{
        alert('your promocode is not valide')
        window.location.href="checkout.html"
    }
}