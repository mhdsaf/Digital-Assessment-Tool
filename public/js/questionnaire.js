$(document).ready(function(){
    $("#welcome").html(localStorage.getItem('name'));
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    window.scrollTo(0, 0);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    window.scrollTo(0, 0);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    });
    $("#next5").click(function(){
        $("#errors").html("");
        let scores = [];
        let errors = [];
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        let c4 = 0;
        let c5 = 0;
        let i = 1;
        let j = 1;
        while(i<=3){
            while(j<=3){
                if(document.getElementById(`c1q${i}radio${j}`).checked){
                    c1++;
                    scores.push(parseInt(document.getElementById(`c1q${i}radio${j}`).getAttribute('value')));
                }
                j++;
            }
            j = 1;
            i++;
        }
        if(c1!=3){
            // user missed a question
            errors.push('Business Strategy');
        }
        i = 1;
        j = 1;
        while(i<=4){
            while(j<=3){
                //console.log(`c2q${i}radio${j}`)
                if(document.getElementById(`c2q${i}radio${j}`).checked){
                    c2++;
                    scores.push(parseInt(document.getElementById(`c2q${i}radio${j}`).getAttribute('value')));
                }
                j++;
            }
            j = 1;
            i++;
        }
        if(c2!=4){
            errors.push('Internal Digitalization')
        }
        i = 1;
        j = 1;
        while(i<=7){
            while(j<=3){
                //console.log(`c2q${i}radio${j}`)
                if(document.getElementById(`c3q${i}radio${j}`).checked){
                    c3++;
                    scores.push(parseInt(document.getElementById(`c3q${i}radio${j}`).getAttribute('value')));
                }
                j++;
            }
            j = 1;
            i++;
        }
        if(c3!=7){
            errors.push('Digital Products');
        }
        i = 1;
        j = 1;
        while(i<=8){
            while(j<=3){
                //console.log(`c2q${i}radio${j}`)
                if(document.getElementById(`c4q${i}radio${j}`).checked){
                    c4++;
                    scores.push(parseInt(document.getElementById(`c4q${i}radio${j}`).getAttribute('value')));
                }
                j++;
            }
            j = 1;
            i++;
        }
        if(c4!=8){
            errors.push('Data Management');
        }
        i = 1;
        j = 1;
        while(i<=3){
            while(j<=3){
                //console.log(`c2q${i}radio${j}`)
                if(document.getElementById(`c5q${i}radio${j}`).checked){
                    c5++;
                    scores.push(parseInt(document.getElementById(`c5q${i}radio${j}`).getAttribute('value')));
                }
                j++;
            }
            j = 1;
            i++;
        }
        if(c5!=3){
            errors.push('Content Production');
        }
        console.log(errors);
        console.log(scores);
        if(errors.length==0 && scores.length==25){
            // all answers are valid
            document.getElementById('go').click();
            let date = new Date();
            let time = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
            let BS = scores[0] + scores[1] + scores[2];
            let ID = scores[3] + scores[4] + scores[5] + scores[6];
            let DP = scores[7] + scores[8] + scores[9] + scores[10] + scores[11] + scores[12] + scores[13];
            let DM = scores[14] + scores[15] + scores[16] + scores[17] + scores[18] + scores[19] + scores[20] + scores[21];
            let CP = scores[22] + scores[23] + scores[24];  
            let obj = {
                BS,
                ID,
                DP,
                DM,
                CP,
                email: localStorage.getItem('email'),
                time
            };
            fetch('/results',{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then((response)=>{
                response.json().then((data)=>{
                    console.log(data);
            })
        });
        }else{
            let index = 0;
            while(index<errors.length){
                console.log("as");
                $("#errors").append(`<div class="alert alert-danger">Missing question(s) in ${errors[index]}</div>`)
                index++;
            }
        }
    });
    //console.log(localStorage.getItem('email'));
    // fetch('/results',{ // www.dat.com/user
    //     method: 'PATCH',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(obj)
    // }).then((response)=>{
    //         response.json().then((data)=>{
    //         console.log(data);
    //     })
    // });
    });