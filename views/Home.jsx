import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

const Home = () => {
  return (
    <View className="flex flex-col min-h-full min-w-full bg-cyan-300 justify-center items-center">
      <Text className="mb-3">Home</Text>
      <Link to="/about">
        <Text className="p-2 bg-blue-700 rounded text-white">To About</Text>
      </Link>
    </View>
  )
}

export default Home
