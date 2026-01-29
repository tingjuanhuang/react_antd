import Counter from '../../components/Counter'

export default function Home() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Home</h1>
            <Counter />
        </main>
    )
}


// 管理狀態
// import { useState } from 'react'
// 引入圖片
// import reactLogo from './assets/react.svg'
// 引入 Ant Design 的 Button 元件


// const [count, setCount] = useState(0)

// <>
    //   <div>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Butoon</h1>
    //   <div>
    //     <Button type="primary">Primary Button</Button>
    //     <Button type="default">Default Button</Button>
    //     <Button type="dashed">Dashed Button</Button>
    //     <Button type="text">Text Button</Button>
    //     <Button type="link">Link Button</Button>
    //   </div>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    // </>