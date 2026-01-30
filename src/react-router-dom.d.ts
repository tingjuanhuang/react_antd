/**
 * 當 node_modules 中尚未安裝 react-router-dom 時的型別宣告。
 * 在本機執行 npm install 後，TypeScript 會改為使用套件內建型別，此檔僅作備援。
 */
declare module 'react-router-dom' {
  import type { ReactNode } from 'react'

  export interface NavigateFunction {
    (to: string, options?: { replace?: boolean }): void
  }

  export interface Location {
    pathname: string
    search: string
    hash: string
    state: unknown
    key: string
  }

  export function useNavigate(): NavigateFunction
  export function useLocation(): Location

  export interface LinkProps {
    to: string
    children?: ReactNode
    className?: string
  }
  export function Link(props: LinkProps): JSX.Element

  export interface BrowserRouterProps {
    children?: ReactNode
  }
  export function BrowserRouter(props: BrowserRouterProps): JSX.Element

  export interface RoutesProps {
    children?: ReactNode
  }
  export function Routes(props: RoutesProps): JSX.Element

  export interface RouteProps {
    path?: string
    index?: boolean
    element?: ReactNode
    children?: ReactNode
  }
  export function Route(props: RouteProps): JSX.Element | null
}
