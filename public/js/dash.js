$(document).ready(function () {
    $("#pdfDownloader").click(function(){
        console.log("pdf");
        html2canvas(document.getElementById("page-top"), {
            onrendered: function(canvas) {
                let a = ($("#page-top").width()+50)*0.2645833333;
                let b = $("#page-top").height()*0.2645833333;
                console.log(a);
                console.log(b);
                var imgData = canvas.toDataURL('image/png', 1.0);
                console.log('Report Image URL: '+imgData);
                var doc = new jsPDF('p', 'mm', [a, b]); //210mm wide and 297mm high
                doc.addImage(imgData, 'JPEG', 10, 10);
                doc.save('Result-Dashboard.pdf');
            }
        });
	});
    // get user profile: name/title...
    let index = new Date();
    $("#copyright").html(index.getFullYear());

    const approach = (score) => {
        if(score>=25 && score<=45){
            let text = `Digital is a concept that can give your organization the competitive advantage to operate and excel in the 21st Century. Your challenge lies in understanding which areas of digital transformation you are strong in and which of those areas that need to be strengthened. There are some exciting developments in the ecosystem, but at the same time there are more questions than answers. Who are my fans? Who is buying tickets? What is the best way to work remotely? What processes can be automated? Which platforms should I use to manage contracts?<br><br>

            Our recommendation: the most meaningful next step for an organization with such a score is to perform an early stage assessment and benchmarking exercise to determine where it sits within the digital ecosystem and determine the best next steps to embark on the digital transformation journey`;
            $("#approachHeader").html('Understand');
            $("#approachBody").html(text);

        }else if(score>=46 && score<=80){
            let text = `You know what you have, you’ve understood the gaps, you understand your pain points. But most probably you’re struggling in determining best next steps to take. It might be the right time to decide on the key milestones for the next few years for you. Whether your objectives are to increase your audience or find new revenue sources, take some time to reflect on these and make a decision.<br><br>

            Which areas should we focus on when we launch our digital transformation? How do we accelerate our digital transformation and ensure its success? How do we align leadership around short- and long-term digital investment priorities? Are we well-equipped to capture digital opportunities? Building a vision might enable you to stay on track and remind you what is the priority during your journey, while also taking advantage of new opportunities from the fast-moving digital landscape.<br><br>
            
            Our recommendation: the most meaningful next step for an organization with such a score is to invest on designing and developing a comprehensive vision & strategy document that is aligned with corporate strategy. Such a document will create internal alignment, unlock budgets for its proper execution and pave the way for a successful digital transformation journey`;
            $("#approachHeader").html('Develop');
            $("#approachBody").html(text);
        }else{
            let text = `By now, you’ve most probably built a good portion of your product(s) and you’ve run several tests. Probably, you’re wondering how to scale your activity, take your product(s) to a bigger market and escalate it to your entire audience. You are ready to figure out ways to monetize these digital investments you have made so far.<br><br>

            To fully take advantage of this phase, there are common technologies, systems and data sets that you can bring together in singular fan, customer and stakeholder journeys. Additionally, it is important to include measures that ensure the regulatory compliance and functionality of every new service or process from the start. <br><br>
            
            Our recommendation: The most meaningful next step for an organization with such a score is to develop its digital scale playbook. By successfully implementing it, the organization will be able to identify new engagement and monetization opportunities through digital as well as develop a roadmap for its next digital iterations.`
            $("#approachHeader").html('Scale');
            $("#approachBody").html(text);
        }
    }

    let obj = {
        email: localStorage.getItem('email')
    }
    fetch('/profile',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        }).then((response)=>{
        response.json().then((data)=>{
            $("#ClientName").html(data.name);
            $("#ClientCompany").html(data.company);
            $("#emailUs").html(`<a target="_blank" rel="nofollow" href="mailto:info@n3xtsports.com?subject=Digital Assessment of ${data.company}" class="btn btn-block btn-lg btn-info">CONTACT US</a>`);
            $("#ClientTitle").html(data.title);
        })
    });
    fetch('/userresults',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
        }).then((response)=>{
        response.json().then((data)=>{
            $("#ClientDate").html(data.SubmittedAt);
            $("#bs").html(Math.ceil((data.Business_Strategy/12)*100) + "%");
            $("#bsbar").css("width", Math.ceil((data.Business_Strategy/12)*100) + "%")
            $("#id").html(Math.ceil((data.Internal_Digitalization/16)*100) + "%");
            $("#idbar").css("width", Math.ceil((data.Internal_Digitalization/16)*100) + "%")
            $("#dp").html(Math.ceil((data.Digital_Products/28)*100) + "%");
            $("#dpbar").css("width", Math.ceil((data.Digital_Products/28)*100) + "%")
            $("#dm").html(Math.ceil((data.Data_Management/32)*100) + "%");
            $("#dmbar").css("width", Math.ceil((data.Data_Management/32)*100) + "%")
            $("#cp").html(Math.ceil((data.Content_Production/12)*100) + "%");
            $("#cpbar").css("width", Math.ceil((data.Content_Production/12)*100) + "%");
            $("#ClientTotal").html(data.Total + " ");
            localStorage.setItem('Total', data.Total);
            localStorage.setItem('bs', data.Business_Strategy);
            localStorage.setItem('id', data.Internal_Digitalization);
            localStorage.setItem('dp', data.Digital_Products);
            localStorage.setItem('dm', data.Data_Management);
            localStorage.setItem('cp', data.Content_Production);
            approach(data.Total);
        })
    });

});