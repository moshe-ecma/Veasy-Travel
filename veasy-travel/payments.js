const etranz = document.getElementById('eTransfer') 
const card = document.getElementById('.popup-card')

etranz.onclick = () => {
        // The text you want to copy
    let copyText = 'veasytravelair@gmail.com';

    // Copy the text directly to clipboard
    navigator.clipboard.writeText(copyText)

    alert('E-Transfer email copied to clipboard. Please paste into your banks app.')
};



const paypal = document.getElementById('paypal')

paypal.onclick = () => {
    alert(`VERY IMPORTANT! PLEASE SEND AS "FRIENDS AND FAMILY"`)
}






    