export class registerPage{

weblocators={

fName: '#input-firstname',
lName:'#input-lastname',
Email: '#input-email',
Telephone: '#input-telephone',
pword: '#input-password',
pwordConfirm:'#input-confirm',
policyCheckbox:'input[type="checkbox"]',
continue: '.btn.btn-primary',

}
openURL(){
cy.visit(Cypress.env('URL'))

}

//Actions
enterFirstName(FirstName){
cy.get(this.weblocators.fName).type(FirstName)
}

enterLastName(LastName){
cy.get(this.weblocators.lName).type(LastName)
}

enterEmail(email){
cy.get(this.weblocators.Email).type(email)
}

enterTelephone(phoneNo){
cy.get(this.weblocators.Telephone).type(phoneNo)
}
enterPassword(password){
cy.get(this.weblocators.pword).type(password)
cy.get(this.weblocators.pwordConfirm).type(password)
}

selectCheckbox(){
cy.get(this.weblocators.policyCheckbox).check()

}
clickContinue(){
    cy.get(this.weblocators.continue).click()
}

}