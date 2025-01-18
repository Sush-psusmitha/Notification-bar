let toastBox = document.getElementById('toastBox')
let sMsg = '<ion-icon name="checkmark-circle"></ion-icon> Successfully submitted';
let eMsg = '<ion-icon name="close-circle"></ion-icon> Please Fix the Error!';
let IMsg = '<ion-icon name="alert-circle"></ion-icon> Invalid input, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.innerHTML = msg;
    toastBox.appendChild(toast); 
    
    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid'); 
    } 

    setTimeout(()=>{
        toast.remove();
    },5000)

}