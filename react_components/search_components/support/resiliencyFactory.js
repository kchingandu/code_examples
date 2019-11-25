import ResiliencyStrategy from '@qgo/q-go-services/src/resiliency/resiliency/ResiliencyStrategy';
import ApiResiliencyValues from '@qgo/q-go-services/src/resiliency/constants/ApiResiliencyValues';
import { resiliencyStrategyConfigFactory } from '@qgo/q-go-services/src/resiliency/resiliency/ResiliencyStrategyConfigFactory';

function createStrategy() {
  const strategyValue = ApiResiliencyValues.SEARCH;
  const config = resiliencyStrategyConfigFactory.createConfig(strategyValue);
  return new ResiliencyStrategy(config);
}

export default { createStrategy };
