import { HomeMethods} from "./pages/home/home.methods";
import { LoginMethods } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    //const usuario = 'kat01'
    //const contrasena = 'kat01'
    cy.visit('https://www.demoblaze.com/')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(10000)
  })
})
