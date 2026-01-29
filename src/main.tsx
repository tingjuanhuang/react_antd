// App 啟動與包裝層，包裝全域層級的東西（CSS, BrowserRouter, Provider, ConfigProvider, 各種初始化），不寫畫面細節

// React 在開發中的檢查工具，幫助發現潛在問題
import { StrictMode } from 'react'
// 建立一個 React Root，負責把 React UI 樹渲染到指定 DOM 上
import { createRoot } from 'react-dom/client'
// 整個 React UI 樹的根元件（Root Component）
import App from './App'

// 把 <App /> 這棵 React 樹，插到 HTML 裡的 #root 這個洞裡
// 驚嘆號是告知 TypeScript 這個元素一定存在，不會是 null
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)