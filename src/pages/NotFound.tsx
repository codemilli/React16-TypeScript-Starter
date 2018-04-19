import React, {SFC} from 'react';
import {toNumber} from '../utils/Number';

export const NotFound: SFC = () => (
  <div>
    <h2> NotFound !!!!! {toNumber('404')} </h2>
  </div>
)
