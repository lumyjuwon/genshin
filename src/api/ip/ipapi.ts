interface IpApi {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  country_area: string;
  country_population: string;
  continent_code: string;
  in_eu: string;
  postal: string;
  latitude: string;
  longitude: string;
  latlong: string;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string;
}

export async function fetchIpApi(): Promise<IpApi> {
  const response = await fetch('https://ipapi.co/json/');
  const data: IpApi = await response.json();

  return data;
}
