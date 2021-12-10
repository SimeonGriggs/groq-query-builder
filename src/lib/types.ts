export interface QuerySegment {
  _key: string
  path: string
  pathFunction?: string
  operator: string
  value: string
  valueFunction?: string
  type: string
}
