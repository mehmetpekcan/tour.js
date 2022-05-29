import styled from 'styled-components';

const DocumentationLayout = styled.section`
  /*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15
  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/

  .hljs {
    color: #c9d1d9;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    /* prettylights-syntax-keyword */
    color: #ff7b72;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #d2a8ff;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #79c0ff;
  }

  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #a5d6ff;
  }

  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #ffa657;
  }

  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #8b949e;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #7ee787;
  }

  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #c9d1d9;
  }

  .hljs-section {
    /* prettylights-syntax-markup-heading */
    color: #1f6feb;
    font-weight: bold;
  }

  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #f2cc60;
  }

  .hljs-emphasis {
    /* prettylights-syntax-markup-italic */
    color: #c9d1d9;
    font-style: italic;
  }

  .hljs-strong {
    /* prettylights-syntax-markup-bold */
    color: #c9d1d9;
    font-weight: bold;
  }

  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #aff5b4;
    background-color: #033a16;
  }

  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #ffdcd7;
    background-color: #67060c;
  }

  .hljs-char.escape_,
  .hljs-link,
  .hljs-params,
  .hljs-property,
  .hljs-punctuation,
  .hljs-tag {
    /* purposely ignored */
  }

  display: grid;
  grid-template-columns: 1fr min(98%, 65ch) 1fr;

  & > * {
    grid-column: 2;
  }

  pre {
    overflow-x: auto;
    padding: 12px;
    background-color: var(--black-900);
    border-radius: 4px;
  }

  code {
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }

  h5 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.15rem;
    margin-top: 1.1rem;
    margin-bottom: 1.1rem;
  }

  .main-section {
    margin-bottom: 2rem;
  }

  table * {
    text-align: center;
  }

  table p {
    display: inline-flex;
  }

  th,
  td {
    padding: 8px;
  }

  table,
  th,
  td {
    border: 1px solid var(--gray);
  }

  p code {
    border-radius: 4px;
    padding: 4px;
    background-color: var(--black-900);
    color: var(--gray-light);
  }

  a {
    color: var(--white);
  }
`;

const Sidebar = styled.nav`
  grid-column: 1/-1;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--white);

  & > * {
    flex: 1;
    flex-shrink: 0;
    text-align: center;
  }
`;

const Link = styled.a`
  color: var(--white);
`;

export { DocumentationLayout, Sidebar, Link };
