var data=['https://hungamadeal.co.in/wp-content/uploads/2017/01/shopclues-offer-2-848x477.jpg','https://dog55574plkkx.cloudfront.net/images/shopclues-offers.png','https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/7002-Shopclues-Banner.jpg']


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
            var response=await fetch('https://fakestoreapi.com/products')
            data=await response.json()
            var div =document.getElementById("product-item")
            div.innerHTML=''
            for(var i=0;i<4;i++){
                var para=document.createElement("div")
                var img=document.createElement('img')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',data[i].image)
                para.innerHTML=`CATEGORY: ${data[i].category}<br> PRICE: ${Math.floor (data[i].price)}<br><button>add to cart</button>`
                div.append(img,para)
            }
            
         }
         async function womenClothing(){
            var response=await fetch('https://fakestoreapi.com/products')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            for(var i=15;i<=19;i++){
                var para=document.createElement("div")
                var img=document.createElement('img')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',data[i].image)
                para.innerHTML=`CATEGORY: ${data[i].category}<br> PRICE: ${Math.floor (data[i].price)}<br><button>add to cart</button>`
                div.append(img,para)
            }
            
         }
         async function electronics(){
            var response=await fetch('https://fakestoreapi.com/products')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            for(var i=9;i<14;i++){
                var para=document.createElement("div")
                var img=document.createElement('img')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',data[i].image)
                para.innerHTML=`CATEGORY: ${data[i].category}<br> PRICE: ${Math.floor (data[i].price)}<br><button>add to cart</button>`
                div.append(img,para)
            }
            
         }
         async function jwellary(){
            var response=await fetch('https://fakestoreapi.com/products')
            data=await response.json()
            console.log(data)
            var div =document.getElementById("product-item")
            div.innerHTML=''
            for(var i=4;i<8;i++){
                var para=document.createElement("div")
                var img=document.createElement('img')
                img.style.width="100px"
                img.style.height="100px"
                img.setAttribute('src',data[i].image)
                para.innerHTML=`CATEGORY: ${data[i].category}<br> PRICE: ${Math.floor (data[i].price)}<br><button>add to cart</button>`
                div.append(img,para)
            }
            
         }