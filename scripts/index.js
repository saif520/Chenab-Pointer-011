let baseURL = "http://localhost:3000/"



let navEnd = document.getElementById("navEnd")
let navEle= ["SHOP NOW","MEN","WOMEN","ACCESSORIES","LIVE NOW","HEAVY DUTY","BEWAKOOF AIR","OFFICIAL MERCH","PLUS SIZE"]
navEle.forEach(element => {
    let span= document.createElement("span")
    span.innerText=element
    navEnd.append(span)
});

    
    
// let data=await res.json();
//     let ans = {}
//     data.reduce((pre,curr)=>{
//         if(ans[curr.material]){
//             ans[curr.material]++
//         }
//         else{
//             ans[curr.material]=1
//         }
//         return pre;
//     },{})
//     console.log(ans);



  
let firstCatItem = [
    {
        title:"Bestseller",
        image:"https://images.bewakoof.com/uploads/grid/app/category-Icon-Homepage-common-1713936362.gif",
        sort:"popularity"
    },
    {
        title:"High Rated",
        image:"https://images.bewakoof.com/uploads/grid/app/category-icon-230x320-1713944743.gif",
        sort:"rating"
    },
    {
        title:"Official Collabaration",
        image:"https://images.bewakoof.com/uploads/grid/app/category-Icon-Homepage-common-1713936362.gif",
        value:"popularity"

    },
    {
        title:"Plus Size",
        image:"https://images.bewakoof.com/uploads/grid/app/category-icon-230x320.gif",
        value:"plus"
    },
    {
        title:"Customization",
        image:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
        value:"popularity"
    },
    {
        title:"Combos",
        image:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
        value:"popularity"
    },
    {
        title:"Vote for Desings",
        image:"https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
        value:"popularity"
    },
    {
        title:"Last Sizes left",
        image:"https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
        value:"popularity"
    }
]
let first_Category = document.getElementById("first_Category")
firstCatItem.forEach(element => {
    let cont = document.createElement("div")
    let title = document.createElement("h5")
    let image = document.createElement("img")

    title.innerText = element.title
    image.src=element.image
    
    cont.append(image,title)
    first_Category.append(cont)
});
// Trending categories-------------------------------------------------------------------------
let trendCategories = document.getElementById("trendCategories")
let trendCat= [
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp",
        category:""
    },
]
trendCat.forEach(element => {
    let image = document.createElement("img")
    image.src= element.image
    trendCategories.append(image)
});

// tooHot----------------------------------------------------------------------------------------------
let toHotList = [
    {
        image:"https://images.bewakoof.com/uploads/grid/app/double-the-fun-B1g1-Desktop-Midsize-banner-1714978289.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Desktop-midsize-OS-tees-common-ezgif-com-optimize--6--1715319745.gif",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-common-buy-2--1--1714561166.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-buy3-common-1715069683.jpg",
        value:""
    }
]
let tooHot = document.getElementById("tooHot")

toHotList.forEach(element => {
    let image = document.createElement("img")
    image.src=element.image
    tooHot.append(image)
});
// categories to bag-------------------------------------------------
let categoriesBag = document.getElementById("categoriesBag")
let categoriesBagList= [
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-women-1706514429.jpg",
        category:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg",
        category:""
    }
]
categoriesBagList.forEach(element => {
    let image = document.createElement("img")
    image.src= element.image
    categoriesBag.append(image)
});


// BEST PICKS----------------------------------------------------------------------------------------------
let bestPicksList = [
    {
        image:"https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER---combo-carnival-1714042407.png",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Official-Merch-Store-Desktop-midsize-banner-1713792662.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg",
        value:""
    }
]
let bestPicks = document.getElementById("bestPicks")

bestPicksList.forEach(element => {
    let image = document.createElement("img")
    image.src=element.image
    bestPicks.append(image)
});

// carousal bottom-----------------------------------------------------
let carousal_btm =document.getElementById("carousal_btm")
let carousal_btm_list =[
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Feb-1x1-vests299--3--1714561834.jpg",
        value:"",
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/HC---1X1-twice-as-nice--1714768452.png",
        value:"",
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/HC-BANNERS---1X1---dresses--3--1714561832.jpg",
        value:"",
    }
]
carousal_btm_list.forEach(element => {
    let image = document.createElement("img")
    image.src=element.image
    carousal_btm.append(image)
});

// Product cards-------------------------------
let topAccList= [
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Sliders-1705043484.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Backpacks-1705043482.jpg",
        value:""
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Caps-1705043483.jpg",
        value:""
    }
]
let topAcc =document.getElementById("topAcc")
topAccList.forEach(element => {
    let image = document.createElement("img")
    image.src=element.image
    topAcc.append(image)
});

// BESTSELLERS------------------------------------------

let best1 = document.querySelector('#best1')
let best2 = document.querySelector('#best2')
let best3 = document.querySelector('#best3')


async function fetchData(){  
    try {
        let res=await fetch(`http://localhost:3000/product?_sort=sales&_order=DESC&_page=1&_limit=5`,{
      "method":"GET",
      "headers":{
        "content-type":"application/json"
      }
    });
    let data=await res.json();
    data.forEach(element => {
      let card = createCard(element)  
      best1.append(card)
    });
    
    } catch (error) {
        console.log(error)
    }  
    
    
  }
fetchData();
async function fetchData2(){  
    try {
        let res=await fetch(`http://localhost:3000/product?_sort=sales&_order=DESC&_page=2&_limit=5`,{
      "method":"GET",
      "headers":{
        "content-type":"application/json"
      }
    });
    let data=await res.json();
    data.forEach(element => {
        let card = createCard(element)  
        best2.append(card)
      });
    } catch (error) {
        console.log(error)
    }  
    
    
  }
fetchData2();
async function fetchData3(){  
    try {
        let res=await fetch(`http://localhost:3000/product?_sort=sales&_order=DESC&_page=3&_limit=5`,{
      "method":"GET",
      "headers":{
        "content-type":"application/json"
      }
    });
    let data=await res.json();
    data.forEach(element => {
        let card = createCard(element)  
        best3.append(card)
      });
    } catch (error) {
        console.log(error)
    }  
    
    
  }
fetchData3();



function createCard(elem){
    let cardCont = document.createElement("div")
    let image = document.createElement("img")
    let brand = document.createElement("h5")
    let title = document.createElement("p")
    let priceCont = document.createElement("div")
    let price = document.createElement("h3")
    let priceStrik = document.createElement("p")
    let off = document.createElement("p")
    let dis = Math.ceil(((elem.oldPrice-elem.price)/elem.price)*100)

    cardCont.className = "cardCont"
    priceCont.className= "priceCont"
    

    image.src = elem.image 
    brand.innertext = elem.brand
    title.innerText = elem.title
    price.innerText = `₹${elem.price}`
    priceStrik.innerText = `₹${elem.oldPrice}`
    off.innerText=`${dis}% OFF`
    priceCont.append(price,priceStrik,off)
    cardCont.append(image,brand,title,priceCont)

    return cardCont;
}   