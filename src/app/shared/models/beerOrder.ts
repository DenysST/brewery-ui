import {BeerOrderLine} from "./beerOrderLine";

export class BeerOrder {
  id?: string;
  customerId?: string;
  customerName?: string;
  beerOrderLines?: BeerOrderLine[];
  orderStatus?: string;
  orderStatusCallbackUrl?: string | null;
  version?: number;
  createdDate?: Date;
  lastModifiedDate?: Date;
}
