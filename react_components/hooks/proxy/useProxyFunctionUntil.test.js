import { act, renderHook } from '@testing-library/react-hooks'
import useProxyFunctionUntil from './useProxyFunctionUntil'

describe('useProxyFunctionUntil', () => {
  it('should invoke the proxied function when the proxy function is invoked and the values in the conditions array all resolve true', () => {
    const proxyFunction = jest.fn()

    const { result } = renderHook(() =>
      useProxyFunctionUntil(proxyFunction, [true, true])
    )

    act(() => result.current[0]({ originalCall: 'args' }))

    expect(proxyFunction).toHaveBeenCalledWith({ originalCall: 'args' })
  })

  it('should invoke the proxied function when all the values in the conditions array all resolve true', () => {
    const proxyFunction = jest.fn()

    const obj = { value: false }

    const { result, rerender } = renderHook(() =>
      useProxyFunctionUntil(proxyFunction, [obj.value, true])
    )

    act(() => result.current[0]({ originalCall: 'args' }))

    expect(proxyFunction).not.toHaveBeenCalled()

    act(() => {
      obj.value = true
      rerender()
    })

    expect(proxyFunction).toHaveBeenCalled()
  })

  it('should invoke the proxied function only once', () => {
    const proxyFunction = jest.fn()

    const { result } = renderHook(() =>
      useProxyFunctionUntil(proxyFunction, [true, true])
    )

    act(() => {
      result.current[0]({ originalCall: 'args' })
      result.current[0]({ originalCall: 'args' })
      result.current[0]({ originalCall: 'args' })
    })

    expect(proxyFunction).toBeCalledTimes(1)
  })
})
