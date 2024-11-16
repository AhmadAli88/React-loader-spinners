
import './App.css'
import BasicLoader from './components/Basic Loader'
import ConditionalLoader from './components/Conditional Loader'
import LoaderWithMessage from './components/Custom Message with Loader'
import CustomSizeLoader from './components/Custom Size Loader'
import DynamicColorLoader from './components/Dynamic Color Loader'
import DataLoader from './components/Dynamic Data Loader'
import FullScreenLoader from './components/Full-Screen Loader'
import MultiLoader from './components/Multi-Loader Example'

function App() {
 

  return (
   <div>
    <BasicLoader/>
    <DynamicColorLoader/>
    <FullScreenLoader/>
    <ConditionalLoader/>
    <MultiLoader/>
    <CustomSizeLoader/>
    <LoaderWithMessage/>
    <DataLoader/>
   </div>
  )
}

export default App
