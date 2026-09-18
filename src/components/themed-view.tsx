import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  type?: ThemeColor;
};

const colorClassNames: Record<ThemeColor, string> = {
  text: 'bg-text',
  background: 'bg-background',
  backgroundElement: 'bg-background-element',
  backgroundSelected: 'bg-background-selected',
  textSecondary: 'bg-text-secondary',
};

export function ThemedView({ className, type, ...otherProps }: ThemedViewProps) {
  const classNames = [colorClassNames[type ?? 'background'], className].filter(Boolean).join(' ');

  return <View className={classNames} {...otherProps} />;
}
