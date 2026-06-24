import { Navigate, useParams } from 'react-router-dom';
import { ServiceLocationTemplate } from '@/components/ServiceLocationTemplate';
import { locationData } from '@/data/locations';
import { resolveServiceKeywordFromSlug } from '@/utils/programmaticSeo';
import { hasCuratedInsight } from '@/utils/locationContent';
import NotFound from './NotFound';

const ServiceLocationPage = () => {
  const { service, country, location, city } = useParams();
  
  if (!service || !country || !location) {
    return <NotFound />;
  }

  const serviceSlug = service.toLowerCase();

  // Accept current and legacy service slugs so previously indexed pages do not hard-404.
  const foundService = resolveServiceKeywordFromSlug(serviceSlug);

  // Find the country data (normalize common variants)
  const normalizeCountry = (c: string) => {
    const v = c.toLowerCase();
    if (v === 'us' || v === 'united-states' || v === 'united-states-of-america') return 'usa';
    return v;
  };

  const normalizedCountry = normalizeCountry(country);

  const countryData = locationData.find(c => c.countryCode.toLowerCase() === normalizedCountry);
  if (!countryData) {
    return <NotFound />;
  }

  const canonicalCountryCode = countryData.countryCode.toLowerCase();
  if (country.toLowerCase() !== canonicalCountryCode) {
    const redirectPath = city
      ? `/${service}/${canonicalCountryCode}/${location}/${city}`
      : `/${service}/${canonicalCountryCode}/${location}`;
    return <Navigate to={redirectPath} replace />;
  }

  const stateData = countryData.states.find(s => s.slug === location);
  if (!stateData) {
    return <NotFound />;
  }

  const fallbackLocationPath = hasCuratedInsight(countryData.countryCode, stateData.slug)
    ? `/locations/${canonicalCountryCode}/${stateData.slug}`
    : `/locations/${canonicalCountryCode}`;

  // If city is provided, render the city-level service page (no longer redirects to state).
  if (city) {
    const cityData = stateData.cities.find(c => c.slug === city);
    if (!cityData) {
      return <NotFound />;
    }

    if (!foundService) {
      return <Navigate to={fallbackLocationPath} replace />;
    }

    if (!hasCuratedInsight(countryData.countryCode, stateData.slug)) {
      return <Navigate to={`/locations/${canonicalCountryCode}`} replace />;
    }

    return (
      <ServiceLocationTemplate
        service={foundService}
        location={cityData.name}
        locationSlug={cityData.slug}
        country={countryData.country}
        countryCode={countryData.countryCode}
        state={stateData.name}
        stateSlug={stateData.slug}
        population={cityData.population}
      />
    );
  }

  if (!foundService) {
    return <Navigate to={fallbackLocationPath} replace />;
  }

  if (!hasCuratedInsight(countryData.countryCode, stateData.slug)) {
    return <Navigate to={`/locations/${canonicalCountryCode}/${stateData.slug}`} replace />;
  }

  return (
    <ServiceLocationTemplate
      service={foundService}
      location={stateData.name}
      locationSlug={stateData.slug}
      country={countryData.country}
      countryCode={countryData.countryCode}
    />
  );
};

export default ServiceLocationPage;
