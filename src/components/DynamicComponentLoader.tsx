import React, {SFC} from 'react'

interface DynamicComponentLoaderProps {
  prefetch?: boolean
  loading?: JSX.Element
  loader: () => Promise<JSX.Element>
}

interface DynamicComponentLoaderState {
  isLoading: boolean
  comp?: JSX.Element
}

/**
 * define DynamicComponentLoader class inherits React.Component
 * @React View Component
 */
export class DynamicComponentLoader extends React.Component<DynamicComponentLoaderProps, DynamicComponentLoaderState> {

  public static defaultProps: Partial<DynamicComponentLoaderProps> = {
    prefetch: false,
  }

  mounted = true

  /**
   * DynamicComponentLoader class constructor method
   * @constructs
   * @param {DynamicComponentLoaderProps} props
   */
  constructor(props: DynamicComponentLoaderProps) {
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true})

    const start = Date.now()
    const comp = await this.props.loader()
    const duration = Date.now() - start
    const timeout = duration > 4 ? 2000 : 0

    setTimeout(() => {
      if (this.mounted) {
        this.setState({
          comp,
          isLoading: false,
        })
      }
    }, timeout)
  }

  componentWillUnmount() {
    this.mounted = false
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
