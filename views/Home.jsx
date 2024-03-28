import { Text, TouchableHighlight, View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View className="flex flex-col min-h-full min-w-full bg-cyan-300 justify-center items-center">
      <Text className="mb-3">Home</Text>
      <TouchableHighlight onPress={() => navigation.navigate('About')}>
        <Text className="p-2 bg-blue-700 rounded text-white">To About</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Home
