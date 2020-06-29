class CoursePage
{

// Page where specific course details are displayed

CourseContentDownload()
{
    return cy.get('#dnn_ctr836_CourseDetails_aDLAppForm')
}

CourseLocation()
{
    return cy.get('.location')
}
}
export default CoursePage;
