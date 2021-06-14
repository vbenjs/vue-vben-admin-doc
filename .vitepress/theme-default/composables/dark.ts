import { useDark } from '@vueuse/core';

export const isDark = useDark({
  storageKey: 'vben-admin-color-scheme',
  valueLight: 'light',
});
