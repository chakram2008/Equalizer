import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeEqualizer.web.ts
// and on native platforms to ReactNativeEqualizer.ts
import ReactNativeEqualizerModule from './ReactNativeEqualizerModule';
import ReactNativeEqualizerView from './ReactNativeEqualizerView';
import { ChangeEventPayload, ReactNativeEqualizerViewProps } from './ReactNativeEqualizer.types';

// Get the native constant value.
export const PI = ReactNativeEqualizerModule.PI;

export function hello(): string {
  return ReactNativeEqualizerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeEqualizerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeEqualizerModule ?? NativeModulesProxy.ReactNativeEqualizer);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeEqualizerView, ReactNativeEqualizerViewProps, ChangeEventPayload };
