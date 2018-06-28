import React from 'react';
import { sparqlConnect } from 'sparql-connect';
import Viz from './viz';
import Spinner from 'js/components/shared/spinner';

const queryBuilder = type => `
  PREFIX idemo:<http://rdf.insee.fr/def/demo#>
  PREFIX igeo:<http://rdf.insee.fr/def/geo#>
  PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  SELECT ?label ?pop2010 ?pop2012 ?pop2013
  WHERE {
    ?area rdf:type <${type}> .
    ?area igeo:nom ?label ; idemo:population ?pop2010URI .
    ?pop2010URI idemo:populationTotale ?pop2010 .
    FILTER(STRENDS(STR(?pop2010URI), "2010")) .
    ?area idemo:population ?pop2012URI .
    ?pop2012URI idemo:populationTotale ?pop2012 .
    FILTER(STRENDS(STR(?pop2012URI), "2012")) .
    ?area idemo:population ?pop2013URI .
    ?pop2013URI idemo:populationTotale ?pop2013 .
    FILTER(STRENDS(STR(?pop2013URI), "2013")) .
  }
`;

const connector = sparqlConnect(queryBuilder, {
	queryName: 'areaEvol',
	params: ['type'],
});

const VizContainer = ({ areaEvol }) => (
	<div>
		<Viz data={areaEvol} />
	</div>
);

export default connector(VizContainer, {
	loading: () => <Spinner text={'Chargement en cours'} />,
});
