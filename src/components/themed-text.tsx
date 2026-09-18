import { Platform, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

const typeClassNames: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base leading-6 font-medium',
  title: 'text-[48px] leading-[52px] font-semibold',
  small: 'text-sm leading-5 font-medium',
  smallBold: 'text-sm leading-5 font-bold',
  subtitle: 'text-[32px] leading-[44px] font-semibold',
  link: 'text-sm leading-[30px]',
  linkPrimary: 'text-sm leading-[30px] text-link-primary',
  code: 'text-xs',
};

const colorClassNames: Record<ThemeColor, string> = {
  text: 'text-text',
  background: 'text-background',
  backgroundElement: 'text-background-element',
  backgroundSelected: 'text-background-selected',
  textSecondary: 'text-text-secondary',
};

export function ThemedText({ className, style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const classNames = [
    colorClassNames[themeColor ?? 'text'],
    typeClassNames[type],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Text
      className={classNames}
      style={[
        type === 'code' && { fontFamily: Fonts.mono, fontWeight: Platform.select({ android: 700 }) ?? 500 },
        style,
      ]}
      {...rest}
    />
  );
}
