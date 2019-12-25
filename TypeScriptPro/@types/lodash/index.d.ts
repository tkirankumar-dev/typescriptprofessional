import * as lodash from 'lodash';
declare module 'lodash' {
    interface LoDashStatic {
      log(item: string): void;
    }
}

// declare module 'lodash'{
//     export function chunk(collection: any, size?: number): any[][];
// }