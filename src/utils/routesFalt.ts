import { RoutesConfig } from '../router'
const routesFlat = (routes: Array<RoutesConfig>) => {
  const result: Array<RoutesConfig> = []
  let pathJoin = (path: string) => path.startsWith('/') ? '' : '/'

  routes.forEach(route => {
    const map = (child: RoutesConfig, routePath: string = '') => {
      let path = routePath + pathJoin(child.path) + child.path
      result.push({
        ...child,
        children: undefined,
        path
      })
      child.children?.forEach(chl => map(chl, path))
    }
    map(route)
  })
  return result
}

export default routesFlat
