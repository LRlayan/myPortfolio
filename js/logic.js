
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


    //--------------------------------------------follow button logic-------------------------------------------------
    document.getElementById("followBtn").addEventListener('click' , function (){
        if (document.getElementById("followBtn").innerText == "Follow +"){
            document.getElementById("followBtn").style.background = "red"
            document.getElementById("followBtn").innerText = "Unfollow"
            document.getElementById("followCount").innerText++
        }else {
            document.getElementById("followCount").innerText--
            document.getElementById("followBtn").innerText = "Follow +"
            document.getElementById("followBtn").style.background = "#1E8BFA"
        }
    })

    //--------------------------------------------like button logic-------------------------------------------------
    function rotateImage() {
        const img = document.getElementById('likes');
        // Get current rotation angle
        let currentRotation = parseInt(img.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;

        if (currentRotation == 0){
            // Increment rotation angle by -180 degrees (or any desired amount)
            currentRotation -= 180;
            // Apply rotation to image
            img.style.transform = `rotate(${currentRotation}deg)`;
            document.getElementById("likeCount").innerText++
        }else if (currentRotation == -180){
            // Increment rotation angle by 180 degrees (or any desired amount)
            currentRotation += 180;
            img.style.transform = `rotate(${currentRotation}deg)`;
            document.getElementById("likeCount").innerText--
        }
    }