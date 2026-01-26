// UI 樹根(設計系統骨架)：負責 Layout, Routing, Page, Component

// 引入元件
import Header from './components/Header'
import Home from './pages/home'
// 引入 CSS
import './App.css'

// 根元件（Root Component）
function App() {
  // 回傳 JSX 語法，React 會把它轉換成 React 元素
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

// 把 App 元件 export (Public)出去，讓其他檔案可以 import 使用
export default App
