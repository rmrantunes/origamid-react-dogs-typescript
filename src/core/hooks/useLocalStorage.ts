export function useJSONLocalStorage<T = {}>(key: string) {
  function get() {
    const item: T | null = JSON.parse(window.localStorage.getItem(key)!);
    return item;
  }

  function set(valueToAssign: T) {
    const updatedItemAsJSON = JSON.stringify(valueToAssign);
    window.localStorage.setItem(key, updatedItemAsJSON);
  }

  function merge(valueToUpdate: Partial<T>) {
    const item = get();
    const updatedItemAsJSON = JSON.stringify({ ...item, ...valueToUpdate });
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
  
  function set(valueToAssign: string) {
    window.localStorage.setItem(key, valueToAssign);
  }

  function remove() {
    window.localStorage.removeItem(key);
  }

  return { get, set, remove };
}
