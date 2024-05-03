import { loginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'kat01';
    const contrasena = 'kat01'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    loginMethods.login(usuario, contrasena)
    cy.get('a#nameofuser').should('contain.text', usuario)
  })
})
