// 获取所有的非一级路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  //   console.log(result)
  return result
}

// 获取到所有的一级路由
export const filterRouters = (routes) => {
  // childrenRoutes所有的子路由
  const childrenRoutes = getChildrenRoutes(routes)
  // 完整的路由16条数据
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

// 检测空对象以及检测空数组 如果为空返回false
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true

  return false
}

// 将所有的一级路由数据处理成菜单需要的渲染数据
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 获取三条数据patn路径
    const routePath = item.path
    let route = result.find((route) => route.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }

    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  console.log(result)
  return result
}
