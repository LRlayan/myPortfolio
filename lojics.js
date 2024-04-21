
    const obServer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                entry.target.classList.add("show");
            }else {
                entry.target.classList.remove("show")
            }
        })
    })

    const  hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => obServer.observe(el))

    const  hiddenMainTitle = document.querySelectorAll('.hiddenMainTitle');
    hiddenMainTitle.forEach((el) => obServer.observe(el))

    const  upToDown = document.querySelectorAll('.upToDown');
    upToDown.forEach((el) => obServer.observe(el))

    const  rightToLeft = document.querySelectorAll('.rightToLeft');
    rightToLeft.forEach((el) => obServer.observe(el))

    const  rightToLeftSm = document.querySelectorAll('.rightToLeftSm');
    rightToLeftSm.forEach((el) => obServer.observe(el))


    //follow button logic
    document.getElementById("followBtn").addEventListener('click' , function (){
        if (document.getElementById("followBtn").innerText == "Follow +"){
            document.getElementById("followBtn").style.background = "red"
            document.getElementById("followBtn").innerText = "unfollow"
            document.getElementById("followCount").innerText++
        }
    })