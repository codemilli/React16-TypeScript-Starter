import React, {SFC} from 'react';
import * as _ from 'lodash'

import {toNumber} from '../utils/Number';

console.log('lodash : ', _.map)

interface Props {
  title: string
}

export const Home: SFC<Props> = ({title}) => (
  <div>
    <h2>{title} Home !!! {toNumber('1')}</h2>
  </div>
)
