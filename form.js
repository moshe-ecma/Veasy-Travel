//https://docs.google.com/forms/d/e/1FAIpQLSdVpKR5M4As5KPtKIEw7Ka-aRFxbjbt-SpkRDMH5bHMCeJIYA/formResponse


const form = document.getElementById('contact_form')
const name = document.getElementById('form_name')
const phone = document.getElementById('form_phone')
const msg = document.getElementById('form_msg')
const btn = document.getElementById('form_btn')

const name_err = document.getElementById('name_err')
const phone_err = document.getElementById('phone_err')
const msg_err = document.getElementById('msg_err')


let tests = ['true', 'true', 'true']


btn.onclick = (e) => {
    e.preventDefault()

    if(name.value.length <= 1){
        name_err.style.display = 'block'
        name.style.margin = '0px'
        tests[0] = 'false'
        // write a test to valitade that this is a valid number
        
    }
    if(phone.value.length < 10){
        phone_err.style.display = 'block'
        phone.style.margin = '0px'
        tests[1] = 'false'
    }
    if(msg.value.length <= 1){
        msg_err.style.display = 'block'
        msg.style.margin = '0px'
        tests[2] = 'false'
    }



    if (tests[0] == 'true' && tests[1] == 'true' && tests[2] == 'true'){
        form.setAttribute('action', 'https://docs.google.com/forms/d/e/1FAIpQLSdVpKR5M4As5KPtKIEw7Ka-aRFxbjbt-SpkRDMH5bHMCeJIYA/formResponse')


            const myHeaders = new Headers();
            myHeaders.append("Cookie", "COMPASS=spreadsheet_forms=CjIACWuJV7aVtZtyUEApmu9lp4eLQZzBX0SjFTYiA-1fdGmtICLDs_K7KCYZ82CfuOiSVhDIyrG8Bho0AAlriVedugFmA5_x05nfUV_fw8Y6pnWaj7xfHC6qYlHfe6g2ejI2XFQ_aHvYQ1ShSM9YjA==; S=spreadsheet_forms=iZMAf3PJ5Hzwedt3vF6fhXwcgMMBBEDbWuOIdW_NW5M; NID=518=SAj1xE17-edIm6n-yRMG1HKTacckloLR47492dhmpng3qp-6E3w5uxuRN85pgpROZrlK7I5UelMAMmw_nplsfHJwJ4zhOga83mMwl_QvhnJq6FTWB2zRtpM5y0IHMt9-siPWjMoVpFP3QNlpA8lo-qSbZtge1qfdpnCKz2ZDbYAxNvFSPw");
        
            const formdata = new FormData();
            formdata.append("entry.1083992869", name.value);
            formdata.append("entry.1119253858", phone.value);
            formdata.append("entry.1956107096", msg.value);
        
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
        
            fetch("https://docs.google.com/forms/d/e/1FAIpQLSdVpKR5M4As5KPtKIEw7Ka-aRFxbjbt-SpkRDMH5bHMCeJIYA/formResponse", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
        
            window.location.href = '8562354060235449.html'
            // iframe.style.display = 'none'
    }

}

name.oninput = () => {
    name_err.style.display = 'none'
    name.style.marginBottom = '25px'
}
phone.oninput = () => {
    phone_err.style.display = 'none'
    phone.style.marginBottom = '25px'
}
msg.oninput = () => {
    msg_err.style.display = 'none'
    msg.style.marginBottom = '25px'
}


