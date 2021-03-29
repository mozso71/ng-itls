import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* => *', [
    query(':enter, :leave', style({ opacity: 0 }), { optional: true }),

    group([
      query(
        ':leave',
        [style({ opacity: 1 }), animate(200, style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate(400, style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
