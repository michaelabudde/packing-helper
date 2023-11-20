import * as Font from 'expo-font';

export const customFonts = {
  'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
  'JosefinSans-SemiBold': require('../assets/fonts/JosefinSans-SemiBold.ttf'),
  'JosefinSans-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
  'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
};

export async function LoadFonts(onLoadCallback) {
  await Font.loadAsync(customFonts)
    .then(onLoadCallback())
    .catch((e) => {
      console.log(e);
    });
}
