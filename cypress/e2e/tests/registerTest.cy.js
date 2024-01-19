import { registerPage } from "../../Pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'


describe('test automation',()=>{

it('register flow',()=>{

registerObj.openURL()
registerObj.enterFirstName(registerData.FirstName)
registerObj.enterLastName(registerData.LastName)
registerObj.enterEmail(registerData.email)
registerObj.enterTelephone(registerData.phoneNo)
registerObj.enterPassword(registerData.password)
registerObj.selectCheckbox()
registerObj.clickContinue()



})

})
