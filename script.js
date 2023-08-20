fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // process the data here
  var name=data.map((ele)=>`${ele.name.common}`);
  var capital=data.map((ele)=>`${ele.capital}`);
  var region=data.map((ele)=>`${ele.region}`);
  var flag=data.map((ele)=>`${ele.flags.png}`);
  var code=data.map((ele)=>`${ele.flag}`);


  console.log(data);

  for(var i=1; i<data.length; i++){
    var creating_div=document.createElement('div')
    creating_div.innerHTML=`
    <div class="con">
    <div class="country-name"><h2>${name[i]}</h2></div>
    <div class="in-con"><img src=${flag[i]}></div>
    <div class="country-capital"><p>Capital:${capital[i]}</p></div>
    <div class="country-region"><p>Region:${region[i]}</p></div>
    <div class="country-code"><p>country code:${code[i]}</p></div>
    <div><button>Click for Weather</button></div>
</div> 
    `
    document.querySelector('div').append(creating_div)
    
   }
 
  })

