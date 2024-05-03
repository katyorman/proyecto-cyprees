export class singupMethods{
    static insertUsername(username){
        singupElements.textboxes.username.invoke("val", username)
    }
    static insertPassword(password){
        singupElements.textboxes.password.invoke("val", password)
    }
    static clickOnSingupButton(){
        singupElements.buttons.singup.click(),
    }
    static.singup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSingupButton()
    }
}