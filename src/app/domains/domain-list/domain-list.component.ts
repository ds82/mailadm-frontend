import { Component, OnInit } from '@angular/core';
import { Domain } from '../shared/domain';
import { DomainService } from '../shared/domain.service';

import {DomainTableComponent} from './domain-table.component';

@Component({
    moduleId: module.id,
    selector: 'domain-list',
    templateUrl: 'domain-list.component.html',
    providers: [DomainService],
    directives: [DomainTableComponent]
})
export class DomainListComponent implements OnInit {
    domains: Domain[];

    constructor(private $domains: DomainService) { }

    ngOnInit() {
        this.getDomains();
    }

    getDomains() {
        this.$domains.get().subscribe(
            domains => this.domains = domains,
            error => console.log(error)
        )
    }

}