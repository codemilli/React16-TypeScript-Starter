import React from 'react';
import {toNumber} from '../core/utils/Number';

interface ViewerPageProps {
  title: string
}

interface ViewerPageState {
}

/**
 * define ViewerPage class inherits React.Component
 * @React View Component
 */
export class ViewerPage extends React.Component<ViewerPageProps, ViewerPageState> {

  /**
   * ViewerPage class constructor method
   * @constructs
   * @param {ViewerPageProps} props
   */
  constructor(props: ViewerPageProps) {
    super(props);
  }

  /**
   * ViewerPage React Component render method
   * @returns {JSX.Element}
   */
  render() {
    return (
      <div>
        <h2> Viewer Page !!!!! {toNumber('1')} </h2>
      </div>
    );
  }
}
