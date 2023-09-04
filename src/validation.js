const queryId = (id)=>{
    let element = document.querySelector(`#${id}`)
    return element
}
const queryClass = (classT)=>{
    let element = document.querySelector(`.${classT}`)
    return element
}

const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
const regexPassword = /^(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

const emailList = ["ngo2@gmail.com","ngo3@gmail.com","ngo4@gmail.com"]

const notEmptyEmail = (data)=>{
    if(data){
        queryClass(`error-email`).innerHTML = ``
        return true
    }else{
        queryClass(`error-email`).innerHTML = `email khong de trong`
        return false
    }
}

const notEmptyPass = (data)=>{
    if(data){
        queryClass(`error-password`).innerHTML = ``
        return true
    }else{
        queryClass(`error-password`).innerHTML = `password khong de trong`
        return false
    }
}

const isValidPass = (pass) => {
    if(pass.match(regexPassword)){
        queryClass(`error-password`).innerHTML = ``
        return true
    }else{
        queryClass(`error-password`).innerHTML = `password khong dung dinh dang`
        return false
    }
}

const checkValidEmail = (email) =>{
    if(email.match(regexEmail)){
        queryClass(`error-email`).innerHTML = ``
        return true
    }else{
        queryClass(`error-email`).innerHTML = `email sai dinh dang`
        return false
    }
}

const checkIsUniqueEmail = (email) => {
    if(emailList.includes(email)){
        queryClass(`error-email`).innerHTML = `email da ton tai`
        return false
    }else{
        queryClass(`error-email`).innerHTML = ``
        return true
    }
}

queryId('submit-btn').onclick = ()=>{
    let password = queryId('password').value
    let email = queryId('email').value

    let isAllValid = true

    let emailNotEmpty = notEmptyEmail(email)
    let passNotEmpty = notEmptyPass(password)
    
    if(emailNotEmpty){
        let validEmail = checkValidEmail(email)
        if(validEmail){
            let uniqueEmail = checkIsUniqueEmail(email)
            if(uniqueEmail){
                isAllValid &= true
            }else{
                isAllValid &= false
            }
        }else{
            isAllValid &= false
        }
    }

    if(passNotEmpty){
        let isValidPassword = isValidPass(password)
        if(isValidPassword){
            isAllValid &= true
        }else{
            isAllValid &= false
        }
    }else{
        isAllValid &= false
    }

    if(isAllValid == 1){
        console.log("data da gui")
    }else{
        console.log("kiem tra laij fata")
    }

    
}

//  /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/


//   /\b([1-9]|[1-9][0-9]|1[01][0-9]|12[0-7])\b/g