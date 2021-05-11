declare type TargetContext = '_self' | '_blank';

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
