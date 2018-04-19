import React, {SFC} from 'react';
import {toNumber} from '../utils/Number';

interface Props {
  title: string
}

export const Viewer: SFC<Props> = () => (
  <div>
    <h2> Viewer Page !!!!! {toNumber('1')} </h2>
  </div>
)
