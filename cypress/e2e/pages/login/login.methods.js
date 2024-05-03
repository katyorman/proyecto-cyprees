import { loginElements } from "./login.elemnts";

export class loginMethods{
    static insertUsername(username){
        loginElements.textboxes.username.invoke('val', username)
    }
    static insertPassword(password){
        loginElements.textboxes.password.invoke('val',password)
    }
    static clickOnLoginButton(){
        loginElements.buttons.login.click()
    }
    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}