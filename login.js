
// Login js
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginBtn = document.querySelector('#login-btn');
const emailInput = document.querySelector('#email input')
const passwordInput = document.querySelector('#password input')
const navBar = document.querySelector('#navbar')
const sendAndAddClass = document.querySelector('#send-and-add-class')
const signInWelcome = document.querySelector('#welcome')
const logInWelcome = document.querySelector('#welcome-2')
const welcomePopup = document.querySelector('#welcome-popup')
const lgBag = document.querySelector('#lg-bag');



    // localStorage.clear()

let pass = JSON.parse(localStorage.getItem("pic")) || []

if (localStorage.getItem("pic")) {
    pass.map((access) => create(access))
}


// 
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active-now');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active-now');
})


btnPopUp.addEventListener('click', () => {
    wrapper.classList.toggle('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})
// 


// Focus for the Keybord to apear when clicked
emailInput.addEventListener('click', () => {

    // emailInput.reset()
    emailInput.focus()
})

passwordInput.addEventListener('click', () => {

    // passwordInput.reset()
    passwordInput.focus()
})



loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const passwordValue = passwordInput.value
    const inputValue = emailInput.value
    // const emailValue = emailInput.value
    const userProfileName = emailInput.value.charAt(0).toUpperCase() + emailInput.value.slice(1);

    const inputSlice = inputValue.charAt(0).toUpperCase();

    if (inputValue === "") {
        return
    }

    if (passwordValue === "") {
        return
    }

    if (!inputValue.includes("@" && ".")) {
        // alert("hidfjofvsfv")
        return
    } else if (inputValue.includes("@" && ".")) {
        // alert("oihsrovihwrvpiherpihersrougrwf")

        const access = {
            id: new Date().getTime(),
            profile: inputSlice,
            isAlife: true,
            displayName: userProfileName
        }

        pass.push(access)

        localStorage.setItem("pic", JSON.stringify(pass));


        create(access)
    }
})

function create(access) {
    const picEl = document.createElement('li')

    picEl.setAttribute('id', access.id)

    const picElMarup = `

        <div class="profile-wrapper">
            <div id="profile-div" class="profile" ${!access.isAlife}>
                ${access.profile}
            </div>

            <div class="cont tooltip">
                <div>
                    <h2 class="profilename">${access.displayName}</h2>
                </div>
                

                <div id="links">
                    <p><a href="profile.html">My Profile</a></p>
                    <p><a href="#">Personal account</a></p>
                    
                </div>
                <br>

                <div>
                    <li id="send-and-add-class" class="hidden"><a href="login.html"><i class="lg fa-solid fa-right-to-bracket"></i><p>LogIn</p></a></li>
                    <li id="clear-all"><a href="index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>LogOut</a></li>
                </div>
            </div>
        </div>
    `


    picEl.innerHTML = picElMarup
    access.profile = picElMarup.textContent

    if (access.isAlife === true) {
        picElMarup.innerHTML = access.profile
    }

    const specificLi1 = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:last-child li#send-and-add-class');
    const specificLi2 = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:last-child li#clear-all');
    const specificLiForProfile = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:first-child h2.profilename');
    console.log(specificLi1);
    console.log(specificLi2);
    // console.log(access.displayName);
    specificLiForProfile.innerHTML = access.displayName

    // specificLiForProfile =  
    // console.log(specificLiForPrifile);
    // console.log(access.profile);


    specificLi2.addEventListener("click", () => {

        localStorage.clear();
        specificLi2.classList.add("hidden");
        location.reload()
    })

    navBar.appendChild(picEl)
    lgBag.classList.remove("hidden")
    sendAndAddClass.classList.add("hidden");
    specificLi1.classList.add("hidden");
    // clearAll.classList.add("hidden");
    // specificLi2.classList.remove("hidden");

    // localStorage.setItem("pic", JSON.stringify(pass))
}





loginBtn.addEventListener('click',  (e) => {

    const passwordValue = passwordInput.value
    const inputValue = emailInput.value

    // const inputSlice = inputValue.charAt(0).toUpperCase();

    if (inputValue === "") {
        return
    }

    if (passwordValue === "") {
        return
    }

    if (!inputValue.includes("@" && ".")) {
        // alert("hidfjofvsfv")
        return
    } else if (inputValue.includes("@" && ".")) {
        // alert("oihsrovihwrvpiherpihersrougrwf")
        openLogInPopup()

    }
})


function openLogInPopup() {
    logInWelcome.classList.add("open-popup")
    wrapper.classList.add("active-popup")
    btnPopUp.classList.add("hidden")
    // logInWelcome.classList.contains("open-popup")
    //     ? wrapper.classList.remove("active-popup")
    //     : wrapper.classList.add("active-popup")
    // logInWelcome.classList.add("open-poup")
}

wrapper.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()

        e.target.blur()
    }
})

// welcomePopup.addEventListener('click', () => {
//         openSignInPopup()
// })


const signUpUsername = document.querySelector("#username input")
const signUpEmail = document.querySelector("#input2-signUpEmail")
const signUpPassword = document.querySelector("#SignUp-password input")
const welcomeH2 = document.querySelector(".container h2")


// Focus for the Keybord to apear when clicked
signUpUsername.addEventListener('click', () => {

    // signUpUsername.reset()
    signUpUsername.focus()
})

signUpEmail.addEventListener('click', () => {

    // signUpEmail.reset()
    signUpEmail.focus()
})

signUpPassword.addEventListener('click', () => {

    // signUpPassword.reset()
    signUpPassword.focus()
})


let signInPass = JSON.parse(localStorage.getItem("signInPic")) || []

if (localStorage.getItem("signInPic")) {
    signInPass.map((signInAccess) => create(signInAccess))
}


welcomePopup.addEventListener('click', (e) => {

    e.preventDefault()

    const usernameValue = signUpUsername.value
    const passwordValue = signUpPassword.value
    const inputValue = signUpEmail.value
    const userProfileName = signUpUsername.value.charAt(0).toUpperCase() + signUpUsername.value.slice(1);

    const userSlice = usernameValue.charAt(0).toUpperCase();

    if (usernameValue === "") {
        return
    }

    if (inputValue === "") {
        return
    }

    if (passwordValue === "") {
        return
    }

    if (!inputValue.includes("@" && ".")) {
        // alert("hidfjofvsfv")
        return
    } else if (inputValue.includes("@" && ".")) {
        // alert("oihsrovihwrvpiherpihersrougrwf")

        const signInAccess = {
            id: new Date().getTime(),
            profile: userSlice,
            isAlife: true,
            displayName: userProfileName
        }

        signInPass.push(signInAccess)

        localStorage.setItem("pic", JSON.stringify(signInPass));

        create(signInAccess)

        const specificLiForSign1 = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:last-child li#send-and-add-class');
        const specificLiForSign2 = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:last-child li#clear-all');
        const specificLiForProfileSign = picEl.querySelector('.profile-wrapper:last-child .cont.tooltip > div:first-child h2.profilename');
        console.log(specificLiForSign1);
        console.log(specificLiForSign2);
        specificLiForProfileSign.innerHTML = signInAccess.displayName
    }
})


welcomePopup.addEventListener('click',  (e) => {

    e.preventDefault()

    const passwordValue = signUpPassword.value
    const inputValue = signUpEmail.value

    const inputSlice = inputValue.charAt(0).toUpperCase();

    if (inputValue === "") {
        return
    }

    if (passwordValue === "") {
        return
    }

    if (!inputValue.includes("@" && ".")) {
        // alert("hidfjofvsfv")
        return
    } else if (inputValue.includes("@" && ".")) {
        // alert("oihsrovihwrvpiherpihersrougrwf")
        openSignInPopup()
    }
})

// // welcomePopup.addEventListener('click', () => {
// // })

function openSignInPopup() {
    let result = signUpUsername.value.charAt(0).toUpperCase() + signUpUsername.value.slice(1);
    welcomeH2.innerHTML += result
    signInWelcome.classList.add("open-popup")
    wrapper.classList.add("active-popup")
    btnPopUp.classList.add("hidden")
}
