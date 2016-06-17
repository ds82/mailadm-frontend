import {Routes} from '@ngrx/router';

import {MailadmDashboardComponent} from './dashboard/dashboard.component'
import {DomainListComponent} from './domains/domain-list/domain-list.component';

export const routes: Routes = [
  {
    path: '/',
    component: MailadmDashboardComponent
  },
  {
      path: '/domains',
      component: DomainListComponent
  }
//   {
//     path: '/blog',
//     component: BlogPage,
//     children: [
//       {
//         path: ':id',
//         component: PostPage
//       }
//     ]
//   }
]