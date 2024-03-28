import { Text, TouchableHighlight, View } from 'react-native'

const About = ({ navigation }) => {
  return (
    <View className="flex flex-col min-h-full min-w-full bg-red-300 justify-center items-center">
      <Text className="mb-3">About</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text className="p-2 bg-red-700 rounded text-white">To Home</Text>
      </TouchableHighlight>
    </View>
  )
}

export default About
