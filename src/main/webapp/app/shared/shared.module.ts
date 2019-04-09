import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MjhipsterSampleApplicationSharedLibsModule, MjhipsterSampleApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MjhipsterSampleApplicationSharedLibsModule, MjhipsterSampleApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [MjhipsterSampleApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MjhipsterSampleApplicationSharedModule {
    static forRoot() {
        return {
            ngModule: MjhipsterSampleApplicationSharedModule
        };
    }
}
