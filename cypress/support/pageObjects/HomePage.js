class HomePage
{
// LYIt Home Page 
getCourseArea()
{
    return cy.get('#dnn_ctr850_CourseSearch_ddlDisciplines')
}

getCourseLevel()
{
    return cy.get('#dnn_ctr850_CourseSearch_ddlLevels')

}
Search()
{
  return  cy.get('#dnn_ctr850_CourseSearch_btnSearchIcon')
}



}

export default HomePage;
