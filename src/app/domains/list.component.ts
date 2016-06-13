import { Component, OnInit } from '@angular/core';
import { Domain } from './domain';
import { DomainService } from './domain.service';

@Component({
    moduleId: module.id,
    selector: 'mailadm-domain-list',
    templateUrl: 'list.component.html',
    providers: [DomainService]
})
export class MailadmDomainListComponent implements OnInit {
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