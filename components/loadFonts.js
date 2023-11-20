import * as Font from 'expo-font';

export const customFonts = {
  'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
  'JosefinSans-SemiBold': require('../assets/fonts/JosefinSans-SemiBold.ttf'),
  'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
};

export async function LoadFonts(onLoadCallback) {
  await Font.loadAsync(customFonts)
    .then(onLoadCallback())
    .catch((e) => {
      console.log(e);
    });
}
