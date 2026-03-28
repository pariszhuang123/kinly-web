import { getCountries } from "./countries";

const FIT_CHECK_CITY_OPTIONS: Record<string, string[]> = {
  AU: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
  CA: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton"],
  GB: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Bristol"],
  MY: ["Kuala Lumpur", "Petaling Jaya", "Johor Bahru", "George Town", "Ipoh", "Shah Alam"],
  NZ: ["Auckland", "Christchurch", "Nelson", "Wellington", "Hamilton", "Dunedin", "Tauranga"],
  SG: ["Singapore"],
  US: ["New York", "Los Angeles", "Chicago", "Houston", "Seattle", "San Francisco"],
};

const FIT_CHECK_PRIORITY_CITY_OPTIONS: Record<string, string[]> = {
  AU: ["Sydney", "Melbourne"],
  CA: ["Toronto", "Vancouver"],
  GB: ["London", "Manchester"],
  MY: ["Kuala Lumpur", "Johor Bahru"],
  NZ: ["Auckland", "Christchurch", "Nelson"],
  SG: ["Singapore"],
  US: ["New York", "Los Angeles", "Chicago"],
};

function matchesCityQuery(city: string, query: string) {
  const normalizedCity = city.toLowerCase();
  if (normalizedCity.includes(query)) return true;

  let queryIndex = 0;
  for (const character of normalizedCity) {
    if (character === query[queryIndex]) {
      queryIndex += 1;
      if (queryIndex === query.length) return true;
    }
  }

  return false;
}

export function getFitCheckCountryOptions(locale?: string) {
  return getCountries(locale).filter((country) => country.code in FIT_CHECK_CITY_OPTIONS);
}

export function getFitCheckCityOptions(countryCode: string | null | undefined, query?: string) {
  const normalizedCountryCode = countryCode?.trim().toUpperCase() ?? "";
  const options = FIT_CHECK_CITY_OPTIONS[normalizedCountryCode] ?? [];
  const trimmedQuery = query?.trim().toLowerCase() ?? "";
  if (!trimmedQuery) return options;

  return options.filter((city) => matchesCityQuery(city, trimmedQuery));
}

export function getFitCheckPriorityCityOptions(countryCode: string | null | undefined, query?: string) {
  const normalizedCountryCode = countryCode?.trim().toUpperCase() ?? "";
  const priorityOptions = new Set(FIT_CHECK_PRIORITY_CITY_OPTIONS[normalizedCountryCode] ?? []);
  return getFitCheckCityOptions(normalizedCountryCode, query).filter((city) => priorityOptions.has(city));
}

export function getFitCheckOtherCityOptions(countryCode: string | null | undefined, query?: string) {
  const normalizedCountryCode = countryCode?.trim().toUpperCase() ?? "";
  const priorityOptions = new Set(FIT_CHECK_PRIORITY_CITY_OPTIONS[normalizedCountryCode] ?? []);
  return getFitCheckCityOptions(normalizedCountryCode, query).filter((city) => !priorityOptions.has(city));
}

export function isValidFitCheckCity(countryCode: string | null | undefined, cityName: string | null | undefined) {
  const normalizedCityName = cityName?.trim().toLowerCase() ?? "";
  if (!normalizedCityName) return false;

  return getFitCheckCityOptions(countryCode).some((city) => city.toLowerCase() === normalizedCityName);
}

export function getFitCheckLocationLabel(countryCode: string | null | undefined, cityName: string | null | undefined) {
  const normalizedCountryCode = countryCode?.trim().toUpperCase() ?? "";
  const normalizedCityName = cityName?.trim() ?? "";
  if (!normalizedCountryCode && !normalizedCityName) return "";

  const countryName =
    getFitCheckCountryOptions().find((country) => country.code === normalizedCountryCode)?.name ?? normalizedCountryCode;

  if (normalizedCityName && countryName) return `${normalizedCityName}, ${countryName}`;
  return normalizedCityName || countryName;
}
