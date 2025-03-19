
const conatiner=document.querySelector('.conatiner');

document.body.setAttribute('style','  font-family: sans-serif;')
// nav bar
let navbar=document.createElement('nav');
navbar.setAttribute('class','navbar');
navbar.setAttribute('id','navbar');

//logo
let logo=document.createElement('div');
logo.setAttribute('class','logo');
logo.setAttribute('id','logo')
let textlogo=document.createTextNode("Carzone");
logo.appendChild(textlogo);
logo.style.cssText="font-size: 1.5rem;font-weight: bold; margin-left:20px"
//list
let menu=document.createElement('ul')
menu.setAttribute('id','menu')
menu.setAttribute('class','menu')



let li1=document.createElement('li');
li1.setAttribute('id','homeLink')
let tex1=document.createTextNode("Home");
li1.appendChild(tex1);

let li2=document.createElement('li');
li2.setAttribute('id','serviceLink')
let tex2=document.createTextNode("Service");
li2.appendChild(tex2);

let li3=document.createElement('li');
li3.setAttribute('id','featuredLink')
let tex3=document.createTextNode("Featured Cars");
li3.appendChild(tex3);

let li4=document.createElement('li');
li4.setAttribute('id','newLink')
let tex4=document.createTextNode("New Cars");
li4.appendChild(tex4);

let li5=document.createElement('li');
li5.setAttribute('id','contactLink')
let tex5=document.createTextNode("Contact");
li5.appendChild(tex5);

menu.append(li1,li2,li3,li4,li5);
navbar.append(logo,menu)
conatiner.appendChild(navbar)

const navclass=document.querySelector('.navbar');
const styles={
    display: "flex",
   justifyContent: "space-between",
    backgroundColor:" black",
   color: "white",
   padding:" 10px",
   alignItems:"center",
   textTransform: "uppercase"
}

Object.assign(navclass.style,styles)
menu.style='display:flex ; list-style:none; gap:16px; margin-right:20px; cursor:pointer; font-size:1rem; transition: color 0.3s ease';

let list=document.querySelectorAll('li');
list.forEach(l=>{
    l.addEventListener('mouseover',()=>{
        l.style='color:gray'
    })
 
})
list.forEach(l=>{
    l.addEventListener('mouseout',()=>{
        l.style='color:white'
    })
})


const herosection=document.createElement('div')
const herocontent=document.createElement('div');
herosection.className='hero-section';
herocontent.className='hero-content';
herosection.setAttribute('id','heroSection');
herocontent.setAttribute('id','heroContent');

const herostyle={
    // backend image 
    background:"url(./limecar.jpg)",
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover",
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 68px)',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    textAlign: 'center'

}

Object.assign(herosection.style,herostyle);
herocontent.style='width:100%;'
const he1=document.createElement('h1');
he1.setAttribute('id','mainHeading');
he1.textContent='GET YOUR';

const span1=document.createElement('span');
span1.setAttribute('id','dreamCar');
span1.textContent="DREAM CAR";
span1.style='color: rgb(243,202,134); word-spacing:10px; margin:0 10px 0px 10px';

const span2=document.createElement('span');
span2.className='highlight';
span1.className='highlight';
span2.setAttribute('id','dreamPrice');
span2.textContent="DREAM PRICE"
span2.style='color: rgb(255,102,196); word-spacing:10px; margin-left:10px';


he1.appendChild(span1);
he1.appendChild(document.createTextNode('AT A'));
he1.appendChild(span2);

const he2=document.createElement('h2');
he2.setAttribute('id','subHeading')
he2.append(document.createTextNode('The largest invertory of cars in Northern India'));
he2.style='font-size:2rem; margin-bottom:20px;'

const button1=document.createElement('button');
button1.className="contact-btn" ;
button1.setAttribute('id','contactButton');
button1.append(document.createTextNode('Contact Us'));
button1.style='padding:20px 40px; background:linear-gradient(to right, #b42687,#fa2d34); color:white; border:none; border-radius:32px; font-size:1.5rem; cursor:pointer; transition:background-color 0.3s ease; text-transform:uppercase; margin-top:60px;'

button1.addEventListener('mouseover',()=>{
    button1.style.setProperty('filter','brightness(0.8)')
})
button1.addEventListener('mouseout',()=>{
    button1.style.setProperty('filter','brightness(0.9)')

})
herocontent.append(he1,he2,button1);
herosection.append(herocontent);
conatiner.appendChild(herosection);
he1.style='font-size:3rem; font-weight:bold; margin-bottom:16px; word-spacing:10px;'
const features={
    // imsge path
    background:"url(./whitecar.jpg)",
    backgroundRepeat:"no-repeat" ,
    backgroundSize:"cover",
    backgroundPosition: 'top 50% left 50%',
    minHeight: 'calc(100vh - 68px)',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    height:"800px",
    textAlign: 'center',
    

}
const  filter_features=document.createElement('div');
filter_features.className="filter-feature-section";
filter_features.setAttribute('id','featureServiceSection');
Object.assign(filter_features.style,features);

const  filter_content=document.createElement('div');
filter_content.className='filter_content';
filter_content.setAttribute('id','filterContent');
filter_content.style='width:80%; height:256px; display:flex; align-item:center; justify-content:center; background-color:#ffff; margin-bottom:100px; border-radius:10px'

const  filter_section=document.createElement('div');
filter_section.className='filter_section';
filter_section.setAttribute('id','filterSection');
filter_section.style='display:flex; flex-direction: row; justify-content: space-between;   gap: 20px; padding: 40px; background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(5px); backdrop-filter: blur(5px);   width: 100vw;   margin: auto;   border-radius: 16px; align-items:center; height:500px';


const filter_table=document.createElement('div');
filter_table.className='filter-table';
filter_table.style='flex-basis:75%; display:flex; flex-direction:column; gap:24px';
let rows=[{
    id:'yearLabel',
    for:'year',
    labelsta:'Select Year',
    option1:["Year",2020,2021,2022,2023,2024],   
}
,
{
    id:'makeLabel',
    for:'make',
    labelsta:'Select Make',
    option1:["Make","Maruti","Mahindra","nexon"],   
},
{
    id:'modelLabel',
    for:'model',
    labelsta:'Select Model',
    option1:["Model","Dzire","Mahindra Scorpio N","Tata Punch","Maruti Swift"],   
},
]
function show(){
    const filter_row=document.createElement('div');
    filter_row.className='filter-row'
    filter_row.style='display: flex;  justify-content: space-between; gap: 20px; '
rows.forEach(e=>{
    const filter_item=document.createElement('div');
    filter_item.className='filter-item;';
    filter_item.style='display: flex;  flex-direction: column; gap: 16px;  width: 100%; align-items:center; justify-content;'
    const lab1=document.createElement('label');
   lab1.setAttribute('for',e.for);
   lab1.setAttribute('id',e.id);
   lab1.append(document.createTextNode(e.labelsta));
   lab1.style='  font-size: 16px; font-weight: bold;    color: #666;  text-align: left;'
   const selec=document.createElement('select');
   selec.setAttribute('id',e.for);
   selec.style='  color: #666; padding: 10px;   border: 1px solid #ddd;  border:none;   border-radius: 8px;  background-color:rgb(247, 247, 247); font-size: 14px; width:150px '

   const opt=e.option1;
   opt.forEach(data=>{
   let option=document.createElement('option');
   option.append(data)
   selec.appendChild(option)
})
console.log(selec)
filter_item.append(lab1,selec);
filter_row.appendChild(filter_item)
})
filter_table.appendChild(filter_row);
}
show(list);
function sho(e){
    const filter_row=document.createElement('div');
    filter_row.className='filter-row'
    filter_row.style='display: flex;  justify-content: space-between; gap: 20px; '
e.forEach(e=>{
    const filter_item=document.createElement('div');
    filter_item.className='filter-item;';
    filter_item.style='display: flex;  flex-direction: column; gap: 16px;  width: 100%; align-items:center; justify-content;'
    const lab1=document.createElement('label');
   lab1.setAttribute('for',e.for);
   lab1.setAttribute('id',e.id);
   lab1.append(document.createTextNode(e.labelsta));
   lab1.style='  font-size: 16px; font-weight: bold;    color: #666;  text-align: left;'
   const selec=document.createElement('select');
   selec.setAttribute('id',e.for);
   selec.style='  color: #666; padding: 10px;   border: 1px solid #ddd;  border:none;   border-radius: 8px;  background-color:rgb(247, 247, 247); font-size: 14px; width:150px '

   const opt=e.option1;
   opt.forEach(data=>{
   let option=document.createElement('option');
   option.append(data)
   selec.appendChild(option)
})
console.log(selec)
filter_item.append(lab1,selec);
filter_row.appendChild(filter_item)
})
filter_table.appendChild(filter_row);
}
let cols=[{
    id:'styleLabel',
    for:'style',
    labelsta:'Body Style',
    option1:["Style","Sport car","Hatchback","Coupe"],   
}, {
    id:'conditionLabel',
for:'condition',
labelsta:'Car Condition',
option1:["Condition","Mechanical","Excellent","Fair","poor"],   
},
{
    id:'priceLabel',
for:'price',
labelsta:'Select Price',
option1:["Price","12 lacs","10 lacs","9 lacs","11 lacs"],   
},
]
sho(cols)

const button2=document.createElement('button');
button2.className='search-btn';
button2.setAttribute('id','searchButton');
button2.append(document.createTextNode('Search'))
button2.style=' padding: 10px 30px;  font-size: 16px;  font-weight: bold;  color: white;   background-color: #4f46e5;    border: none; border-radius: 4px;  cursor: pointer; margin-right:0px '
button2.addEventListener('mouseover',()=>{
    button2.style.setProperty('filter','brightness(0.8)')
})
button2.addEventListener('mouseout',()=>{
    button2.style.setProperty('filter','brightness(0.9)')

})


filter_section.appendChild(filter_table);
filter_section.appendChild(button2);
filter_content.append(filter_section);

filter_section.style='  width: 80%;   display: flex;   margin-top: 16px;      gap: 16px;   align-items: center; justify-content: space-between; '

const feature_section=document.createElement('div');
feature_section.className='feature-section';
feature_section.setAttribute('id','featureSection');
feature_section.style='  width: 80%;  display: flex; justify-content: space-between;  align-items: center;  gap: 16px;  margin-top: 16px;'
let card=[
    {
        class:"service-card",
        src:"https://cdn-icons-png.flaticon.com/512/2211/2211425.png",
        service:"Largest Dealership",
        alt:"Car Icon",
    },
    {
        class:"service-card",
        src:"https://cdn-icons-png.flaticon.com/512/18497/18497231.png",
        service:"Unlimited Warranty",
        alt:'Warranty Icon',

    },
    {
        class:"service-card",
        src:"https://cdn-icons-png.flaticon.com/512/1456/1456840.png",
        service:"Insurance Support",
        alt:"Insurance Icon",

    }

]

function ss(car){

    car.forEach(car=>{
    const service=document.createElement('div');
    service.className=car.class;
    const img=document.createElement('img');
    img.className='service-icon';
    img.alt=car.alt;
    img.style= ' width:64px; height:64px; margin-bottom:20px '
    img.src=car.src;
    service.style='background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(5px);   color: #000;   border-radius: 16px;   padding: 30px 20px; text-align: center;   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);              '
    const h3=document.createElement('h3');
    h3.className="service-title";
    
    h3.textContent=car.service;
    const p=document.createElement('p');
    p.className="service-description";
    p.style='  font-size: 16px;   line-height: 1.5;   color: #555;  '
    h3.style='font-size: 24px; font-weight: bold;margin-bottom: 10px; '
    p.append(document.createTextNode('Nemo enim ipsam voluptatem quia voluptas sit aspernatur  aut odit aut den fugit sed quia.'))
    service.append(img,h3,p)
    feature_section.appendChild(service)
    console.log(feature_section);
    })
}

ss(card);


filter_features.append(filter_content,feature_section);
conatiner.appendChild(filter_features)
