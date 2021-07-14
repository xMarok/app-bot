export default class ObjectCache<V extends { name: string }> extends Map<string, V> {
  getOrThrow(key: string): V {
    const value = this.get(key.toLowerCase())
    if (!value) throw new Error(`no value for key '${key}' in this cache`)
    return value
  }
}
