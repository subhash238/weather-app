var data=['https://hungamadeal.co.in/wp-content/uploads/2017/01/shopclues-offer-2-848x477.jpg','https://dog55574plkkx.cloudfront.net/images/shopclues-offers.png','https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/7002-Shopclues-Banner.jpg']
    var cart=JSON.parse(localStorage.getItem('cart'))||[]

        var img=document.createElement('img')
        img.style.width='100%'
        img.style.height='100%'
         var main=document.getElementById('main')
         main.append(img)
         img.setAttribute('src',data[0])
        
         var i=0;
         function prev(){
             if(i>0){
                 i--
             }else{
                 i=data.length-1
             }
             img.setAttribute('src',data[i])
         }
         function next(){
             if(i<data.length-1){
                 i++
             }else{
                 i=0
             }
             img.setAttribute('src',data[i])
         }
        async function MenClothing(){
            var response=await fetch('https://fakestoreapi.com/products/category/men clothing')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            data.forEach(element=>{
                var para=document.createElement("div")
                para.style.width="25%"
                var img=document.createElement('img')
                var p=document.createElement('p')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',element.image)
                var btn=document.createElement('button')
                btn.addEventListener('click',function(){
                    addtocart(element)
                })
                    btn.textContent='add to cart'
                p.innerHTML=`CATEGORY: ${element.category}<br> PRICE: ${Math.floor(element.price)}<br>`
                para.append(p,img,btn)
                div.append(para)
                console.log(element)
            })
            
            
         }
         async function womenClothing(){
            var response=await fetch('https://fakestoreapi.com/products/category/women clothing')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            data.forEach(element=>{
                var para=document.createElement("div")
                para.style.width="25%"
                var img=document.createElement('img')
                var p=document.createElement('p')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',element.image)
                var btn=document.createElement('button')
                btn.addEventListener('click',function(){
                    addtocart(element)
                })
                    btn.textContent='add to cart'
                p.innerHTML=`CATEGORY: ${element.category}<br> PRICE: ${Math.floor(element.price)}<br>`
                para.append(p,img,btn)
                div.append(para)
                console.log(element)
            })
            
            
         }
         async function electronics(){
            var response=await fetch('https://fakestoreapi.com/products/category/electronics')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            data.forEach(element=>{
                var para=document.createElement("div")
                para.style.width="25%"
                var img=document.createElement('img')
                var p=document.createElement('p')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',element.image)
                var btn=document.createElement('button')
                btn.addEventListener('click',function(){
                    addtocart(element)
                })
                    btn.textContent='add to cart'
                p.innerHTML=`CATEGORY: ${element.category}<br> PRICE: ${Math.floor(element.price)}<br>`
                para.append(p,img,btn)
                div.append(para)
                console.log(element)
            })
            
            
         }
         async function jwellary(){
            var response=await fetch('https://fakestoreapi.com/products/category/jewelery')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            data.forEach(element=>{
                var para=document.createElement("div")
                para.style.width="25%"
                var img=document.createElement('img')
                var p=document.createElement('p')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',element.image)
                var btn=document.createElement('button')
                btn.addEventListener('click',function(){
                    addtocart(element)
                })
                    btn.textContent='add to cart'
                p.innerHTML=`CATEGORY: ${element.category}<br> PRICE: ${Math.floor(element.price)}<br>`
                para.append(p,img,btn)
                div.append(para)
                console.log(element)
            })
            
            
         }  
         
         function addtocart(e){
            cart.push(e)
            localStorage.setItem('cart',JSON.stringify(cart))
         }
