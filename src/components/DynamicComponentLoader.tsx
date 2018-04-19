import React, {SFC} from 'react';

interface DynamicComponentLoaderProps {
  prefetch?: boolean,
  loading?: JSX.Element,
  loader: () => Promise<JSX.Element>,
}

interface DynamicComponentLoaderState {
  isLoading: boolean,
  comp?: JSX.Element
}

/**
 * define DynamicComponentLoader class inherits React.Component
 * @React View Component
 */
export class DynamicComponentLoader extends React.Component<DynamicComponentLoaderProps, DynamicComponentLoaderState> {

  public static defaultProps: Partial<DynamicComponentLoaderProps> = {
    prefetch: false
  }

  /**
   * DynamicComponentLoader class constructor method
   * @constructs
   * @param {DynamicComponentLoaderProps} props
   */
	constructor(props: DynamicComponentLoaderProps) {
		super(props)

    this.state = {
		  isLoading: true,
		}
	}

	async componentDidMount() {
	  const comp = await this.props.loader()

    this.setState({
      comp,
      isLoading: false
    })
  }

  /**
   * DynamicComponentLoader React Component render method
   * @returns {JSX.Element}
   */
	render() {
	  const {loading = null} = this.props
	  const {isLoading, comp = null} = this.state
		return (
      isLoading ? loading : comp
		)
	}
}

export const ComponentLoader = (options: DynamicComponentLoaderProps): SFC => {
  return () => <DynamicComponentLoader {...options} />
}
