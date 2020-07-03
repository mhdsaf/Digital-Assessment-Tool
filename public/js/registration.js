$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        let email = $("#email").val();
        let name = $("#name").val();
        let title = $("#title").val();
        let company = $("#company").val();
        if(email!='' || name!='' || title!='' || company!=''){
            console.log("asd");
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                //valid email
                let obj = {
                    email,
                    name,
                    title,
                    company
                };
                fetch('/user',{ // www.dat.com/user
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }).then((response)=>{
                        response.json().then((data)=>{
                        if(data.success){
                            localStorage.setItem('email', email);
                            localStorage.setItem('name', name);
                            document.getElementById('ques').click();
                        }else{
                            //fail
                        }
                    })
                });
            }else{
                //invalid email
                $("#error").html(`<div class="alert alert-light" style="color: red">Please enter a valid email</div>`)
            }
        }else{
            console.log("else")
            $("#error").html(`<div class="alert alert-light" style="color: red">Make sure all fields are filled</div>`)
        }
    });
});