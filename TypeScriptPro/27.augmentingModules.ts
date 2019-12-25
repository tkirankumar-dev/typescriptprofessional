// Augmenting means - we want to extends that is already there. 
import * as _ from 'lodash';

_.chunk([1,2,3,4], 2);

_.mixin({
    log(item: string){
        console.log(':::', item);
    },
});
// Property 'log' does not exist on type '{ default: LoDashStatic; VERSION: string; templateSettings: TemplateSettings; chunk<T>(array: ArrayLike<T>, size?: number): T[][]; 
// compact<T>(array: ArrayLike<false | "" | 0 | T>): T[]; ... 302 more ...; uniqueId(prefix?: string): string; }'.ts(2339)
// _.log('Hello');