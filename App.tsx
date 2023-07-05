//Packages
import { Center, NativeBaseProvider, StatusBar, Text } from 'native-base'
import { useFonts } from 'expo-font'

//Pages
import { theme } from './src/assets/styles/theme'
import { Loading } from './src/components/Loading'
import { SignIn } from './src/screens/SignIn'

export default function App () {
  const [fontsLoaded] = useFonts({
    Anton: require('./src/assets/fonts/Anton-Regular.ttf'),
    Monomaniac: require('./src/assets/fonts/MonomaniacOne-Regular.ttf')
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
       />
      {!fontsLoaded ? <Loading /> : <SignIn />}
    </NativeBaseProvider>
  )
}
