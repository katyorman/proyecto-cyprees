export class singupElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('input#sign-username')
            },
            get password(){
                return cy.get('input#sign-password')
            },
        }:
    }
    static get buttons(){
        return {
            get close(){
                return cy.contains('button', 'Close').eq(1)
            },
            get singup(){
                return cy.contains('button', 'Sign up')
            },
        }:
    }

}