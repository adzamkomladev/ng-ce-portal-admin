import { trigger, state, style, transition, animate } from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeave', [
  state('flyIn', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: '0' }),
    animate('0.8s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)', opacity: '0' }))
  ])
]);
