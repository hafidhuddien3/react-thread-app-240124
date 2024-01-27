/**
 * - Leaderboard spec
 *   - should display leaderboard when click leaderboard
 */

import env from '../../env';

describe('Leaderboard spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display leaderboard when click leaderboard', () => {
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

    // klik nav leader board di homepage
    cy.get('nav').contains(/^Leaderboard$/).click();

    // memverifikasi sekarang berada pada halaman leaderboard
    cy.get('.leaderboard-page').should('be.visible');
  });
});
