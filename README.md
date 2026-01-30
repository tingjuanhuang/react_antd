# React_Antd

React_Antd 是基於 React + Ant Design 的學習／筆記型應用，用來紀錄 Ant Design 元件用法與踩坑筆記。

## 技術棧

- **React 19** + **TypeScript** + **Vite**
- **Ant Design 6**（UI 元件）
- **React Router 7**（路由）
- **SCSS**（樣式，集中於 `src/styles/`）

## 專案結構

- **頁面**（`src/pages/`）
  - **Home**（`/`）— 首頁，示範 Counter 元件
  - **Components**（`/components`）— 紀錄各種元件的頁面
  - **Gotchas**（`/gotchas`）— 踩坑筆記
- **共用元件**（`src/components/`）
  - **Header** — 頂部導覽，使用 Ant Design `Layout`、`Menu`
  - **Counter** — 計數器示範元件
- **版面**（`src/layouts/`）
  - **MainLayout** — 主版面，包住 Routes 內容區，背景與無 padding 由 layout.scss 管理
- **樣式**（`src/styles/`）
  - **index.scss** — 入口，依序 @import variables、base、layout、header
  - **variables.scss** — 顏色與間距變數（--layout-bg、--header-*、--primary 等）
  - **base.scss** — 全域基礎（:root、body、a、h1、button）
  - **layout.scss** — #root、.mainLayout、.mainLayoutContent
  - **header.scss** — .appHeader、.headerBrand、.headerMenu
- **路由與殼**（`src/App.tsx`）— `BrowserRouter` + `Routes` + 各頁 `Route`

## 本地開發與建置

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置
npm run build

# 預覽建置結果
npm run preview
```
