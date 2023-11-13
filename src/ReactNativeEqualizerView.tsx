import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeEqualizerViewProps } from './ReactNativeEqualizer.types';

const NativeView: React.ComponentType<ReactNativeEqualizerViewProps> =
  requireNativeViewManager('ReactNativeEqualizer');

export default function ReactNativeEqualizerView(props: ReactNativeEqualizerViewProps) {
  return <NativeView {...props} />;
}
