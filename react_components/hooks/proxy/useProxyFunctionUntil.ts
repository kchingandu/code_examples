import { useEffect, useRef, useState } from 'react'

const useProxyFunctionUntil = <T extends Function, C extends Array<any>>(
  proxyTarget: T,
  conditions: C
): T[] => {
  let proxyArgs = useRef([])
  const [isInvoked, setIsInvoked] = useState(false)

  let proxyFunction = useRef((...args) => {
    setIsInvoked(true)
    proxyArgs.current = args
  })

  const clear = () => {
    proxyArgs = null
    proxyFunction = null
  }

  useEffect(() => {
    if (isInvoked && conditions.every(Boolean)) {
      proxyTarget.call(null, ...proxyArgs.current)
      clear()
    }
    return clear
  }, [isInvoked, ...conditions])

  return [(proxyFunction.current as unknown) as T]
}

export default useProxyFunctionUntil
