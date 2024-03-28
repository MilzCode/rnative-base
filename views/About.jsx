import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

const About = () => {
  return (
    <View className="flex flex-col min-h-full min-w-full bg-red-300 justify-center items-center">
      <Text className="mb-3">About</Text>
      <Link to="/">
        <Text className="p-2 bg-red-700 rounded text-white">To Home</Text>
      </Link>
    </View>
  )
}

export default About
