import React, {SFC} from 'react';
import {toNumber} from '../utils/Number';

interface Props {
  title: string
}

export const Home: SFC<Props> = ({title}) => (
  <div>
    <h2>{title} Home !!!!! {toNumber('1')}</h2>
  </div>
)
