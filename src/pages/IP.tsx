import React, {SFC} from 'react';
import {toNumber} from '../utils/Number';

interface Props {
  title: string
}

export const IP: SFC<Props> = ({title}) => (
  <div>
    <h2>{title} IP Page !!!!! {toNumber('1')}</h2>
  </div>
)
