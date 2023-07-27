export type DarkModeOptions = "auto" | "on" | "off";
type UserPreferences = {
  darkMode: DarkModeOptions;
};

const USER_PREFERENCES_KEY = "userPreferences/v1" as const;
const defaultUserPreferences: UserPreferences = {
  darkMode: "auto",
};

export const getUserPreferences = (): UserPreferences => {
  try {
    const data = JSON.parse(localStorage.getItem(USER_PREFERENCES_KEY) || "{}");
    return {
      ...defaultUserPreferences,
      ...data,
    };
  } catch {
    localStorage.clear;
    return defaultUserPreferences;
  }
};

export const setUserPreferences = (
  newUserPreferences: Partial<UserPreferences>
): void => {
  const userPreferences = getUserPreferences();
  localStorage.setItem(
    USER_PREFERENCES_KEY,
    JSON.stringify({
      ...defaultUserPreferences,
      ...userPreferences,
      ...newUserPreferences,
    })
  );
};
