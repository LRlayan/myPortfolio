
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
