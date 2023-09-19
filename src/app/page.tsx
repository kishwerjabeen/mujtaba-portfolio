import Image from 'next/image'
import './globals.css'


import Transition from './components/Transition';


const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{/*       
      <MyApp /> */}
 
 <Transition />
      
    </main>
  )
}
export default Home;