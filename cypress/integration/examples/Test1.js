/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CoursePage from '../../support/pageObjects/CoursePage'

describe('My Second Test Suite', function() 
{

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
      })



it('My FirstTest case',function() {
 
const homePage=new HomePage()
const productPage=new ProductPage()
const coursePage=new CoursePage()
    cy.visit(Cypress.env('url'))
     
   // TestCase to find the CyberSecurity related postGraduate courses in Letterkenny
   
homePage.getCourseArea().select(this.data.CourseArea)
homePage.getCourseLevel().select(this.data.CourseLevel)
homePage.Search().click()


productPage.CourseSelected().each(($e1, index, $list) => {
 
  const courseTitle=$e1.text()
  if(courseTitle.includes(this.data.course))
  {
    
      productPage.CourseSelected().eq(index).click()
     
      const location=coursePage.CourseLocation().then(function(LocationVal)
      {
        const variab=LocationVal.text()
        if(variab.includes('Letterkenny'))
        {
          cy.log('The PostGraduate Course'+ courseTitle + 'is in LetterKenny Campus')
        }
       
      })

  
      cy.go('back')
      
  }

})


})
})































