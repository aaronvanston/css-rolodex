import React from 'react';
import { Link } from 'react-router';

import { Header } from '~/common/components';

import styles from './Aside.css';

const mainMenuLinks = [{
  title: 'Properties',
  url: '/properties',
}, {
  title: 'Selectors',
  url: '/selctors',
}, {
  title: 'Groups',
  url: '/groups',
}, {
  title: 'Cheatsheets',
  url: '/cheatsheets',
}, {
  seperator: true,
}, {
  title: 'Suggest and edit',
  url: '/suggest-an-edit',
}, {
  title: 'Add a page',
  url: '/add-a-page',
}];


const Aside = () => (
  <aside className={styles.aside}>
    <Header />

    <nav className={styles.nav}>
      <ul className={styles.navGroup}>
        {mainMenuLinks.map((link, linkIndex) => (
          (link.seperator) ?
            <div key={linkIndex} className={styles.linkSeperator} /> :
            <li key={linkIndex} className={styles[link.title.toLowerCase()]}>
              <Link
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
                to={link.url}
              >
                {link.title}
              </Link>
            </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Aside;
