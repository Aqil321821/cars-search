var cars={
    toyota:{
        avolon:{
            name: "Toyota Avolon",
            milage:"22 KMs",
            capacity:5,
            price:'2500$',
            image: '/img/toyota/avolon.png',
            color:['red','black','white']

        },
        camry:{
            name: "Toyota Camry",
            milage:"25 KMs",
            capacity:5,
            price:'2700$',
            image:'/img/toyota/camry.png',
            color:['red','black','white']
        },
        corolla:{
            name: "Toyota Corolla",
            milage:"22 KMs",
            capacity:5,
            price:'2500$',
            image:'/img/toyota/corolla.png',
            color:['red','black','white']

        },
        prius:{
            name: "Toyota Prius",
            milage:"22 KMs",
            capacity:5,
            price:'2500$',
            image:'/img/toyota/prius.png',
            color:['red','black','white']

        },
    },
    honda:{
        city:{
            name: "Honda City",
            milage:"21 KMs",
            capacity:5,
            price:'2700$',
            image:'/img/honda/city.jpg',
            color:['red','black','white']

        },
        brv:{
            name: "Honda BRV",
            milage:"29 KMs",
            capacity:5,
            price:'3000$',
            image:'/img/honda/BRV.jpg',
            color:['red','black','white']

        },
        accord:{
            name: "Honda accord",
            milage:"30 KMs",
            capacity:5,
            price:'3500$',
            image:'/img/honda/accord.jfif',
            color:['red','black','white']

        },
        civic:{
            name: "Honda Civic",
            milage:"35 KMs",
            capacity:5,
            price:'4000$',
            image:'/img/honda/civic.jfif',
            color:['red','black','white']


        }
        
    },
    suzuki:{
        alto:{
            name: "Suzuki Alto",
            milage:"40 KMs",
            capacity:4,
            price:'1500$',
            image:'/img/suzuki/alto.jpg',
            color:['red','black','white']


        },
        cultus:{
            name: "Suzuki Cultus",
            milage:"23 KMs",
            capacity:4,
            price:'2750$',
            image:'/img/suzuki/cultus.jpg',
            color:['red','black','white']


        },
        swift:{
            name: "Suzuki Swift",
            milage:"32 KMs",
            capacity:4,
            price:'1700$',
            image:'/img/suzuki/swift.png',
            color:['red','black','white']


        },
        wagonr:{
            name: "Suzuki WagonR",
            milage:"28 KMs",
            capacity:4,
            price:'1800$',
            image:'/img/suzuki/wagonR.jpg',
            color:['red','black','white']


        },
    },
    hyundai:{
        elantra:{
            name: "Hyundai Elantra",
            milage:"35 KMs",
            capacity:5,
            price:'4000$',
            image:'/img/hyundai/elantra.jfif',
            color:['red','black','white']


        },
        santa:{
            name: "Hyundai Santa",
            milage:"30 KMs",
            capacity:5,
            price:'4500$',
            image:'/img/hyundai/santa.jfif',
            color:['red','black','white']

        },
        sonata:{
            name: "Hyundai Sonata",
            milage:"38 KMs",
            capacity:5,
            price:'4800$',
            image:'/img/hyundai/sonata.jfif',
            color:['red','black','white']

        },
        tucson:{
            name: "Hyundai Tucson",
            milage:"38 KMs",
            capacity:5,
            price:'4200$',
            image:'/img/hyundai/tucson.jfif',
            color:['red','black','white']

        },
    },
}

// grab main 
var main = document.getElementById('main');
var company=document.getElementById('company');
var model=document.getElementById('model');
company.innerHTML='<option>Select Company</option>';
model.innerHTML='<option>Select Model</option>';


var detailContainer=document.getElementById('detail-container');
var searchBtn=document.getElementById('search-btn');
var clearBtn=document.getElementById('clear-btn');


// access the inner object through for-in loop
function allcars(){

    for (const key in cars) {
        company.innerHTML+= ` <option value="${key}">${key}</option>`
        for (const key1 in cars[key]) {
            var obj=cars[key][key1];
                // console.log(obj.color);
                var colorDiv="";
            
              for (var i=0 ; i<obj.color.length;i++) {
    
                // console.log(obj.color[i]);
                colorDiv +=`<div class="${obj.color[i]}"></div>`
                    
                
               
              }
    
            // var colorDiv=' ';
            // for (var  i = 0; i <obj.color.lenght; i++) {
            //     // colorDiv +=`<div class='${obj.color[index]}'> </div>`;
            //     console.log(obj.color[i]);
              
                
            // }
    
            main.innerHTML +=` <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ">
            <div class="card m-3 p-2 " style="width: 90%;">
                <img src=".${obj.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-title">${obj.name}</h4>
                  <h5 >Price : ${obj.price} </h5>
                  <h5>Milage :${obj.milage} </h5>
    
                  <div class="d-flex gap-2">
                  ${colorDiv}
                  </div>
                  
            
             
                  
                </div>
              </div>
           </div>`
    
        //    console.log(obj);
        //    console.log(obj.color);
    //    console.log(colorDiv);
          
        }
        
    }

}

allcars();



function setCompny(){
    // console.log(company.value);
    // console.log(cars[company.value]);
    model.innerHTML="";
    model.innerHTML=`<option>Select Model</option>`;

    for (const key in cars[company.value]) {
        model.innerHTML+=`<option value='${key}'>${key} </option>`;
      
    }



}

function search(){
    
    main.style.display='none';

    // console.log(company.value,model.value);
    /*search k btn click hony per dono select ki values ko use krke us car ka object mangwa lo ,phr us ki details ko nenchay details card me daal do*/

    var car=cars[company.value][model.value];
    console.log(car);
    console.log(car.image);
    var  img=car.image;
     var short=img.slice(1);
     console.log(short);
    
    
    

    detailContainer.innerHTML =`   
      <div class="card mb-3 p-5 m-5" id="car-detail">
    <img src="${short}" class="card-img-top" alt="car image">
    <div class="card-body">
      <h3 class="card-title">${car.name}</h3>
     <h4>Price : ${car.price}</h4>
     <h5>Milage :${car.milage} </h5>
     
      
     
    </div>
</div>
    
    
    `

}

function clear(){
   
    detailContainer.style.display='none';
    main.style.display='flex';
    allcars();
     
}









// event listeners
company.addEventListener('change' , setCompny);
searchBtn.addEventListener('click',search);
clearBtn.addEventListener('click',clear);







