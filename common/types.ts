export interface StaticData<T1 = any> {
  Title?: string;
  SubTitle?: string;
  MetaData?: T1;
  UniqueComponentId: string;
  Heading?: string;
  Description?: string;
  RedirectUrl?: string;
  SubHeading?: string;
  Image?: any;
  Icon?: any;
}

export interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: any;
  data?: any;
  headers?: any;
  path: string;
}
