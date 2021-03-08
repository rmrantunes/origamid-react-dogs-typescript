export function useJSONLocalStorage<T = {}>(key: string) {
  function get() {
    const item = JSON.parse(window.localStorage.getItem(key) as string);
    return item as T;
  }

  function set(toUpdate: Partial<T>) {
    const updatedItemAsJSON = JSON.stringify(toUpdate);
    window.localStorage.setItem(key, updatedItemAsJSON);
  }

  function merge(toUpdate: Partial<T>) {
    const item = get();
    const updatedItemAsJSON = JSON.stringify({ ...item, ...toUpdate });
    window.localStorage.setItem(key, updatedItemAsJSON);
  }

  function remove() {
    window.localStorage.removeItem(key);
  }

  return { get, set, merge, remove };
}

export function useLocalStorage(key: string) {
  function get() {
    return window.localStorage.getItem(key);
  }
  function set(toUpdate: string) {
    window.localStorage.setItem(key, toUpdate);
  }

  function remove() {
    window.localStorage.removeItem(key);
  }

  return { get, set, remove };
}
