export function useJSONLocalStorage<T = {}>(key: string) {
  function get() {
    const item = JSON.parse(window.localStorage.getItem(key) as string);
    return item as T;
  }

  function merge(toUpdate: Partial<T>) {
    const item = get()
    const updatedItemAsJSON = JSON.stringify({ ...item, ...toUpdate });
    window.localStorage.setItem(key, updatedItemAsJSON);
  }

  function set(toUpdate: Partial<T>) {
    const updatedItemAsJSON = JSON.stringify(toUpdate);
    window.localStorage.setItem(key, updatedItemAsJSON);
  }

  return { get, set, merge };
}

export function useLocalStorage(key: string) {
  function get() {
    return window.localStorage.getItem(key);
  }
  function set(toUpdate: string) {
    window.localStorage.setItem(key, toUpdate);
  }
  return { get, set };
}
