import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const DARK_MODE_KEY = "darkMode";

const setDarkMode = (newValue: boolean): void => {
  localStorage.setItem(DARK_MODE_KEY, newValue.toString());
};

const getDarkMode = (): boolean => {
  const darkMode = localStorage.getItem(DARK_MODE_KEY);
  if (darkMode === null) {
    setDarkMode(false);
    return false;
  }
  return darkMode === "true";
};

const useDarkMode = () => {
  return useQuery<boolean>(["darkMode"], getDarkMode);
};

const useSetDarkMode = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, boolean>(
    async (newDarkMode: boolean) => setDarkMode(newDarkMode),
    {
      onSuccess: () => queryClient.invalidateQueries(["darkMode"]),
    }
  );
};

export { useDarkMode, useSetDarkMode };