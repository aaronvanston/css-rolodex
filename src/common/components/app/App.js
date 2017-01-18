import React, { PropTypes } from 'react';

import { Aside, Search } from '~/common/components';

const App = props => (
  <div>
    <Aside />

    <section>
      <Search />

      <main>
        {props.children}
      </main>
    </section>
  </div>
);


App.propTypes = {
  children: PropTypes.element,
};

export default App;
