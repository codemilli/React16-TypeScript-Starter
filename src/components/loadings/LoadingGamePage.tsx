import React, {SFC} from 'react';
import ContentLoader from 'react-content-loader'

export const LoadingGamePage: SFC = () => (
  <ContentLoader
    width={100}
    height={100}
    speed={1}
  >
    <rect x="0" y="2" rx="2" ry="2" width="100" height="5" />
    <rect x="0" y="9" rx="2" ry="2" width="100" height="5" />
    <rect x="0" y="16" rx="2" ry="2" width="100" height="5" />
  </ContentLoader>
)
