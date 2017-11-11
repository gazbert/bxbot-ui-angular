import 'rxjs/add/operator/toPromise';
import {Exchange} from '../exchange.model';

/**
 * The Exchange Adapter Data Service provides operations to update Exchange Adapter configuration.
 * It demonstrates use of Promises in the operation responses.
 *
 * @author gazbert
 */
export interface ExchangeAdapterDataPromiseService {

    getExchangeAdapterByBotId(id: string): Promise<Exchange>;

    update(exchangeAdapter: Exchange): Promise<Exchange>;
}
