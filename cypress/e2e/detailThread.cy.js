/**
 * - DetailPage spec
 *   - should display detail when click thread item
 */

import env from '../../env';

describe('DetailPage spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display detail when click thread item', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type(env.email);

    // mengisi password
    cy.get('input[placeholder="Password"]').type(env.password);

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').contains(/^Home$/).should('be.visible');
    cy.get('button').contains('Sign out').should('be.visible');

    cy.get('.leaderboard-page').should('not.exist');

    // klik thread item di homepage
    cy.get('.thread-item').first().click();

    // memverifikasi sekarang berada pada halaman detail
    cy.get('.detail-page').contains(/^Add Comment$/).should('be.visible');
  });
});
