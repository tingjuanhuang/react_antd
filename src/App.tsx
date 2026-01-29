// UI 樹根(設計系統骨架)：負責 Layout, Routing, Page, Component

// 引入 Router 相關
// BrowserRouter：外層容器（啟動路由系統），讓 React 知道現在要顯示哪一頁
// Routes：路由清單（只能包 Route），用於路徑比對
// Route：單一頁面規則，path 對應 element（畫面）
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 引入元件
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
// 引入 CSS
import './App.css'

// 根元件（Root Component）
function App() {
  // 回傳 JSX 語法，React 會把它轉換成 React 元素
  return (
    <BrowserRouter>
      {/* 整個 App */}
      <Header />
      <Routes>
        {/* path 為網址，畫面顯示 element */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

// 把 App 元件 export (Public)出去，讓其他檔案可以 import 使用
export default App
