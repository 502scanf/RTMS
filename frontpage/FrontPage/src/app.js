
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import {Provider} from 'react-redux'
function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  // return <Provider store={store}>{children}</Provider>
  return children
}

export default App
