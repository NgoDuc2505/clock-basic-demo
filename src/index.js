let isContinue = true

document.querySelector("#stopBtn").onclick = ()=>{
    isContinue = !isContinue
}

const handleShowTime = () => {
    isContinue ?
        document.querySelector(".preview").innerHTML = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Ho_Chi_Minh" })
        : document.querySelector(".preview").innerHTML = "Stopped"
}

setInterval(handleShowTime, 1000)

