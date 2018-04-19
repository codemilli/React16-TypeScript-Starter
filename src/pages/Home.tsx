import React, {SFC} from 'react';
import {toNumber} from '../core/utils/Number';
import {Link, Route} from 'react-router-dom';
import {ComponentLoader} from '../components/DynamicComponentLoader';

interface Props {
  title: string
  match: any
}

const GamePageLoaderComponent = ComponentLoader({
  loader: async () => {
    const {GamePage} = await import(/* webpackChunkName: "GamePage" */ './GamePage')
    return <GamePage title="Hello Game"/>
  },
  loading: <div>Loading...</div>
})

const ViewerPageLoaderComponent = ComponentLoader({
  loader: async () => {
    const {ViewerPage} = await import(/* webpackChunkName: "ViewerPage" */ './ViewerPage')
    return <ViewerPage title="Hello Viewer"/>
  },
  loading: <div>Loading...</div>
})

export const Home: SFC<Props> = ({title, match}) => {
  return (
    <div>
      <h2>{title} Home !!!!! {toNumber('1')}</h2>

      <nav>
        <Link to={match.url + '/games'}>
          Games
        </Link>
        <Link to={match.url + '/viewer'}>
          Viewer
        </Link>
      </nav>

      <div>
        <Route path={match.url + '/games'} component={GamePageLoaderComponent} />
        <Route path={match.url + '/viewer'} component={ViewerPageLoaderComponent} />
      </div>
    </div>
  )
}
