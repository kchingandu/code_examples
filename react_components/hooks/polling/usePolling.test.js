import { act, renderHook } from '@testing-library/react-hooks'
import { advanceBy, clear } from 'jest-date-mock'
import usePolling from './usePolling'

jest.useFakeTimers()

describe('usePolling', () => {
  const POLLING_DURATION = 300
  const POLLING_INTERVAL = 100

  let renderedHook
  let config

  const createConfig = () => ({
    condition: jest.fn(),
    onConditionMet: jest.fn(),
    onConditionNotMet: jest.fn(),
    pollingDuration: POLLING_DURATION,
    conditionInvocationInterval: POLLING_INTERVAL
  })

  beforeEach(() => {
    config = createConfig()
    renderedHook = renderHook(usePolling, { initialProps: config })
    renderedHook.result.current.startPolling()
  })

  afterAll(clear)

  const advanceDateAndTime = (increment = POLLING_INTERVAL) => {
    advanceBy(increment)
    jest.advanceTimersByTime(increment)
  }

  it('should invoke the provided condition callback once before polling begins', () => {
    expect(config.condition).toBeCalledTimes(1)
  })

  it('should continuously invoke the condition callback until the specified polling duration expires', () => {
    advanceDateAndTime()
    advanceDateAndTime()

    expect(config.condition).toBeCalledTimes(3)
  })

  it('should invoke the conditionNotMet callback when the specified polling duration expires', () => {
    expect(config.onConditionNotMet).not.toHaveBeenCalled()

    advanceDateAndTime(POLLING_DURATION)

    expect(config.onConditionNotMet).toHaveBeenCalled()
  })

  it('should invoke the conditionMet callback when the condition function returns true', () => {
    const { condition, onConditionMet, onConditionNotMet } = config

    advanceDateAndTime()
    condition.mockReturnValue(true)

    advanceDateAndTime()

    expect(condition).toBeCalledTimes(3)
    expect(onConditionMet).toBeCalledTimes(1)
    expect(onConditionNotMet).toBeCalledTimes(0)
  })

  it('should allow the consumer of the hook the ability to cancel polling', () => {
    const { condition } = config
    advanceDateAndTime()

    renderedHook.result.current.stopPolling()

    advanceDateAndTime()
    advanceDateAndTime()

    expect(condition).toBeCalledTimes(2)
  })

  it('should limit the startPolling callback to one invocation', () => {
    const { condition } = config
    const { result } = renderedHook
    const hookResult = result.current

    hookResult.startPolling()
    hookResult.startPolling()
    hookResult.startPolling()

    expect(condition).toBeCalledTimes(1)
  })

  it('should stop polling when the host component is unmounted', () => {
    const { result, unmount } = renderedHook

    result.current.stopPolling()

    act(unmount)

    advanceDateAndTime()
    advanceDateAndTime()
    advanceDateAndTime()

    expect(config.condition).toBeCalledTimes(1)
  })
})
