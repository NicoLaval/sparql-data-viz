import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import LegalPopulation from './';
import Spinner from 'js/components/shared/spinner';

const queryBuilder = () => `
  PREFIX idemo:<http://rdf.insee.fr/def/demo#>
  PREFIX igeo:<http://rdf.insee.fr/def/geo#>
  PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
  SELECT ?name ?population ?date
  WHERE {
    ?district igeo:codeRegion "11"^^xsd:token ; igeo:nom ?name ; idemo:population ?popURI .
    ?popURI idemo:populationTotale ?population ; idemo:date ?date .
    FILTER(lang(?name) = 'fr')
  }
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'populationDistrict',
});

function LegalPopulationContainer({ populationDistrict }) {
	return (
		<div>
			<LegalPopulation data={populationDistrict} />
		</div>
	);
}

export default connector(LegalPopulationContainer, {
	loading: () => <Spinner text={'Chargement en cours'} />,
});
