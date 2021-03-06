import { Store } from 'effector';

export function reshape<Type, Shape extends {}>(_: {
  source: Store<Type>;
  shape: { [ShapeKey in keyof Shape]: (value: Type) => Shape[ShapeKey] };
}): { [ResultKey in keyof Shape]: Store<Shape[ResultKey]> };
