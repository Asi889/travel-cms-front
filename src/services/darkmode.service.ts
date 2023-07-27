import { Queriers } from "@/lib/consts";
import {
  DarkModeOptions,
  getUserPreferences,
  setUserPreferences,
} from "@/lib/localStroge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const setDarkMode = (darkMode: DarkModeOptions): void => {
  setUserPreferences({ darkMode });
};

const getDarkMode = (): DarkModeOptions => {
  const { darkMode } = getUserPreferences();
  return darkMode;
};

const useDarkMode = () => {
  return useQuery<DarkModeOptions>([Queriers.darkMode], getDarkMode);
};

const useSetDarkMode = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, DarkModeOptions>(
    async (newDarkMode: DarkModeOptions) => setDarkMode(newDarkMode),
    {
      onSuccess: () => queryClient.invalidateQueries([Queriers.darkMode]),
    }
  );
};

export { useDarkMode, useSetDarkMode };
