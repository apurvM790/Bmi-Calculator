const form = document.querySelector('form');

//this usecase will give you empty value.
//const height = parseInt(document.querySelector("#height").value)

const under = document.querySelector('#under');
const normal = document.querySelector('#normal');
const over = document.querySelector('#over');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value) // this value will come in the form of string so we have to change into int 
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    // isNaN checks weather the value convertible to the number or not.
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height';
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight';
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2); // toFixed show the value to its after 2 decimals only.
        // show the result.
        // result.innerHTML = bmi;
        if(bmi<18.6){
            result.innerHTML = bmi + " -You are Under Weight-";
        }
        else if(bmi>=18.6 && bmi<=24.9){
            result.innerHTML = bmi +" -You are Normal Range-";
        }
        else if(bmi>24.9){
            result.innerHTML =bmi +  " -You are Over Weight-"
        }
    }



});