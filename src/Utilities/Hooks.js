import { useFlag, useFlagsStatus } from '@unleash/proxy-client-react';

export const useFeatureFlag = (flag) => {
  const { flagsReady } = useFlagsStatus();
  const isFlagEnabled = useFlag(flag);
  return flagsReady ? isFlagEnabled : undefined;
};

export const useRefreshFeatureFlag = () =>
  useFeatureFlag('registration-assistant-refresh');
