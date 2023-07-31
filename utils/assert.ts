export function assertStringArray(data: any): asserts data is string[] {
  if (!(Array.isArray(data) && data.every(a => typeof a === 'string')))
    throw new TypeError('Malformed articles');
}

export function assertDefined<T extends any>(data: T): asserts data is NonNullable<T> {
  if (data == null)
    throw new TypeError('Undefined');
}
