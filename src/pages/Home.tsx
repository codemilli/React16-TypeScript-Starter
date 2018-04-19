import React, {SFC} from 'react';
import {toNumber} from '../utils/Number';
import {Link, Route} from 'react-router-dom';
import {IP} from './IP';
import {Viewer} from './Viewer';

interface Props {
  title: string
  match: any
}

export const Home: SFC<Props> = ({title, match}) => {
  return (
    <div>
      <h2>{title} Home !!!!! {toNumber('1')}</h2>

      <nav>
        <Link to={match.url + '/ip'}>
          IP
        </Link>
        <Link to={match.url + '/viewer'}>
          Viewer
        </Link>
      </nav>

      <div>
        <Route path={match.url + '/ip'} component={IP} />
        <Route path={match.url + '/viewer'} component={Viewer} />
      </div>
    </div>
  )
}
