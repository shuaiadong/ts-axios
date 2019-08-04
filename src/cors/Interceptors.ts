import { AxiosInterceptoManager, ResolvedFn, RejectedFn } from '../types'

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptoManager<T> {
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  use(resolved: ResolvedFn, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  forEach(fn: (interceptor: Interceptor<T>) => void) {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  eject(id: number) {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
