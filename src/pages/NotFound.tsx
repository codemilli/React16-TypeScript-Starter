import React, {SFC} from 'react';
import {toNumber} from '../core/utils/Number';

export const NotFound: SFC = () => (
  <div>
    <h2> NotFound !!!!! {toNumber('404')} </h2>
  </div>
)
