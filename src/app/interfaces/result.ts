export interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id?: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price?: number;
  sale_price: any;
  available_quantity: number;
  official_store_id?: number;
  official_store_name?: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: any;
  catalog_listing: boolean;
  discounts: any;
  promotions: any[];
  differential_pricing?: DifferentialPricing;
  inventory_id?: string;
  variation_filters?: string[];
}

export interface ProductsSearch {
	site_id: string;
	country_default_time_zone: string;
	query: string;
	paging: Paging;
	results: Result[];
	sort: Sort;
	available_sorts: AvailableSort[];
	filters: Filter[];
	available_filters: AvailableFilter[];
	pdp_tracking: PdpTracking;
}

export interface Paging {
	total: number;
	primary_results: number;
	offset: number;
	limit: number;
}


interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: any;
  promise: any;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id?: string;
  value_name?: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct?: ValueStruct;
  values: Value[];
  source: number;
  value_type: string;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface Value {
  id?: string;
  name?: string;
  struct?: Struct;
  source: number;
}

export interface Struct {
  unit: string;
  number: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface DifferentialPricing {
  id: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}

export interface Value3 {
  id: string;
  name: string;
  results: number;
}

export interface PdpTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

export interface ProductDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface Category {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: any[];
  children_categories: any[];
  attribute_types: string;
  settings: any;
  channels_settings: any[];
  meta_categ_id: any;
  attributable: boolean;
  date_created: string;
}
