export type NumberUpto<
  N extends number,
  Result extends Array<unknown> = []> =
  (Result['length'] extends N
    ? Result
    : NumberUpto<N, [...Result, Result['length']]>)