import {StyleProp, TextStyle, ImageSourcePropType} from 'react-native';


import {BaseText, Theme} from '@Theme';


interface Props {
  variant?: keyof Theme['textVariants'];
  color?: keyof Theme['colors'];
  tx?: string;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  type?: 'default';
  iconName?: string;
  iconImage?: ImageSourcePropType;
  iconColor?: keyof Theme['colors'];
}

export const Text: React.FC<Props> = ({
  tx,
  children,
  variant,
  color,
  style,
  numberOfLines = 1,
}) => {

  return (
      <BaseText variant={variant} color={color} style={style} numberOfLines={numberOfLines}>
        {children}
      </BaseText>
  );
};

