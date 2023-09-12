const form =document.querySelector('form');
//this usecase will give you empty
//const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){//eha pe submit lena padega kiuki hmme eya pe submit krna h
    e.preventDefault()//default action ko rokne kliye use hota h

const height =parseInt(document.querySelector('#height').value);
const weight =parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height===''|| height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
}
else if(weight===''|| weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
}else{
    const bmi =(weight/((height*height)/10000)).toFixed(2);
    //show the result
    results.innerHTML = bmi;
}
});