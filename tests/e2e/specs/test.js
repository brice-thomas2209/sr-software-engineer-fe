import projectFaker from '../../faker/project.json'

// Running project on the default port 8080
describe('Checking sidebar functionality', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.get('.ant-select-selection__placeholder').contains('Start typing to filter the list below')
  })

  it('Check if no marker is visible', () => {
    cy.get('.mapboxgl-canvas-container .marker').should('not.exist')
  })

  it('Check first switch and see if marker is visible', () => {
    cy.get('.m-sidebar .m-project-card').first().find('button').click()
    cy.wait(1500)
    cy.get('.mapboxgl-canvas-container .marker').should('exist')
  })  

  it('Uncheck first switch and see if marker is removed', () => {
    cy.get('.m-sidebar .m-project-card').first().find('button').click()
    cy.wait(1500)
    cy.get('.mapboxgl-canvas-container .marker').should('not.exist')
  })

  it('Select project through the autocomplete', () => {
    cy.get('.ant-select-selection__rendered').type(projectFaker.Title)
    cy.get('.ant-select-dropdown-content ul li').first().click()
    cy.get('.m-sidebar').click()
    cy.wait(1500)    
    cy.get('.mapboxgl-canvas-container .marker').should('exist')
  })

  it('Remove project through in the autocomplete', () => {
    cy.get('.ant-select-selection__choice__remove').click()
    cy.wait(1500)
    cy.get('.mapboxgl-canvas-container .marker').should('not.exist')
  })
})
