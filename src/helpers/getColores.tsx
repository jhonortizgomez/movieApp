import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
    key: 'unique_key',
  });

  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      primary = colors.vibrant;
      secondary = colors.average;
      break;
    case 'ios':
      primary = colors.primary;
      secondary = colors.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary, secondary];
};
