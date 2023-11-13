import * as React from 'react';

import { ReactNativeEqualizerViewProps } from './ReactNativeEqualizer.types';

export default function ReactNativeEqualizerView(props: ReactNativeEqualizerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
