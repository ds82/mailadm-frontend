import {Routes} from '@ngrx/router';

import {MailadmDashboardComponent} from './dashboard/dashboard.component'
import {MailadmDomainListComponent} from './domains/list.component';

export const routes: Routes = [
  {
    path: '/',
    component: MailadmDashboardComponent
  },
  {
      path: '/domains',
      component: MailadmDomainListComponent
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