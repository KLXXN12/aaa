function $(elementId) {
    return document.getElementById(elementId);
}
/*验证邮箱*/
function checkEmail() {
    var email = $("email").value;
    var email_prompt = $("email_prompt");
    email_prompt.innerHTML = "";
    var reg = /^\w+@\w+\.\w+[(com)|(cn)]$/;
    if (reg.test(email) == false) {
        email_prompt.innerHTML = "Email格式不正确，例如web@sohu.com";
        return false;
    }
    return true;
}
/*验证手机号码*/
function checkMobile() {
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt");
    var regMobile = /^1\d{10}$/;
    if (regMobile.test(mobile) == false) {
        mobileId.innerHTML = "手机号码不正确，请重新输入";
        return false;
    }
    mobileId.innerHTML = "";
    return true;
}
/*提交表单*/
window.onload = function () {
    onsubmit = function () {
        alert("预约成功");
    }
}