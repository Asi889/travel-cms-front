export function limitString(str: string) {
    if (str.length > 100) {
      return str.slice(0, 100) + "...";
    } else {
      return str;
    }
  }