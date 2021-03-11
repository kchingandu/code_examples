import { useRef, useEffect } from 'react'

export type UsePollingConfiguration = {
  pollingDuration: number
  condition: () => boolean
  onConditionMet: Function
  onConditionNotMet?: Function
  conditionInvocationInterval: number
}

type UsePollingReturnType = {
  stopPolling: () => void
  startPolling: () => void
}

type PollConfig = UsePollingConfiguration & {
  timer: any
}

const curriedPoll = (config: PollConfig) => {
  const {
    timer,
    condition,
    onConditionMet,
    pollingDuration,
    onConditionNotMet,
    conditionInvocationInterval
  } = config

  const pollingExpiry = Number(new Date()) + pollingDuration

  const onTimeout = () => {
    const isWithinPollingDuration = Number(new Date()) < pollingExpiry

    if (condition()) {
      onConditionMet()
    } else if (isWithinPollingDuration) {
      timer.current = window.setTimeout(onTimeout, conditionInvocationInterval)
    } else if (onConditionNotMet) onConditionNotMet()
  }

  return onTimeout
}

const usePolling = (prop: UsePollingConfiguration): UsePollingReturnType => {
  const timer = useRef(0)
  const config = useRef(prop)
  const poll = useRef(Function.prototype)

  const stopPolling = () => clearInterval(timer.current)

  useEffect(() => {
    poll.current = () => {
      curriedPoll({ ...config.current, timer })()
      poll.current = Function.prototype
    }
    return stopPolling
  }, [])

  return {
    stopPolling,
    startPolling: () => {
      poll.current()
    }
  }
}

export default usePolling
