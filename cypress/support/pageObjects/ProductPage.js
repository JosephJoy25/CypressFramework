class ProductPage
{
// Page where various courses are displayed
CourseSelected()
{
    return cy.get('h3.ng-binding:visible')
}


}
export default ProductPage;
