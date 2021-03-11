import { useRef, useState, useEffect } from 'react'
import usePolling from './usePolling'

const POLLING_DURATION_IN_MILLISECONDS = 45000
const CONDITION_INVOCATION_INTERVAL_IN_MILLISECONDS = 200

const usePollingClient = (
  condition,
  onConditionMet?: () => void,
  pollingDuration: number = POLLING_DURATION_IN_MILLISECONDS
) => {
  const isMounted = useRef(true)
  const [, forceComponentUpdate] = useState(null)

  const { startPolling } = usePolling({
    pollingDuration,
    condition: () => true,
    onConditionMet: () => {
      if (isMounted.current) {
        if (onConditionMet) {
          onConditionMet()
        }
        forceComponentUpdate(0)
      }
    },
    conditionInvocationInterval: CONDITION_INVOCATION_INTERVAL_IN_MILLISECONDS
  })

  useEffect(() => {
    startPolling()
  },[])
}

export default usePollingClient
