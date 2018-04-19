import React from 'react';
import {toNumber} from '../core/utils/Number';

interface GamePageProps {
  title: string
}

interface GamePageState {
}

/**
 * define GamePage class inherits React.Component
 * @React View Component
 */
export class GamePage extends React.Component<GamePageProps, GamePageState> {

	/**
	 * GamePage class constructor method
	 * @constructs
	 * @param {GamePageProps} props
	 */
	constructor(props: GamePageProps) {
		super(props)
	}

	/**
	 * GamePage React Component render method
	 * @returns {JSX.Element}
	 */
	render() {
    const {title} = this.props
    return (
      <div>
        <h2>{title} Game Page !!!!! {toNumber('1')}</h2>
      </div>
    )
	}
}
