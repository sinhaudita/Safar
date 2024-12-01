const loginDetails = {
    Email:["sujal.cse122060@bppimt.ac.in", "udita.cse122063@bppimt.ac.in", "amit.cse122035@bppimt.ac.in","sagar.cse122063@bppimt.ac.in"],
    Password:[29082003, 23122003, 1234, 12345]
}

document.getElementById('btn-login').addEventListener('click', (event) =>{
    event.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const index = loginDetails.Email.indexOf(email);

    console.log(email)

    if(index != -1 && loginDetails.Password[index] === parseInt(password) && index === 0){
        window.location.href = "manager.html"
        
    }

    else if(index != -1 && loginDetails.Password[index] === parseInt(password) && index === 1){
        window.location.href = "../pca1/home.html"
        
    }

    else if(index != -1 && loginDetails.Password[index] === parseInt(password) && index === 2){
        window.location.href = "customers.html"
        
    }

    else if(index != -1 && loginDetails.Password[index] === parseInt(password) && index === 3){
        window.location.href = "customers.html"
        
    }


    else{
        document.getElementById('invalid').style.display = "block"
        setTimeout(() => {
            document.getElementById('invalid').style.display = "none"
        }, 3000);
        
    }
})


console.log("Hello World")