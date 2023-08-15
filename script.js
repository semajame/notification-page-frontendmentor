

const notifcount = document.querySelector(".notif-count");

const profile = document.querySelectorAll(".profile");

const accountnotif = document.querySelectorAll(".account-notif");

function allasread(){
    notifcount.innerHTML = 0;

    profile.forEach((account)=>{
        account.classList.add("active");
    })
}

function notifaccounts(account){

    if (notifcount.innerHTML !== "0") {
        notifcount.innerHTML = String(Number(notifcount.innerHTML) - 1);
    } else {
        notifcount.innerHTML = "0";
    }

    account.target.classList.add("active");

}

accountnotif.forEach((notifs)=>{
    notifs.addEventListener("click", (account)=>{
       notifaccounts(account);
    })
})

document.querySelector(".mark-all").addEventListener("click", allasread);

