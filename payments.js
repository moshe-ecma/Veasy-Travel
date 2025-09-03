const e_tarnsfer = document.getElementById('eTransfer')
const paypal = document.getElementById('paypal')


e_tarnsfer.onclick = () => {
        // The text you want to copy
    let copyText = 'veasytravelair@gmail.com';

    // Copy the text directly to clipboard
    navigator.clipboard.writeText(copyText)

    alert('E-Transfer email copied to clipboard. Please paste into your banks app.')
};


paypal.onclick = () => {
    alert(`VERY IMPORTANT! PLEASE SEND AS "FRIENDS AND FAMILY"`)
}