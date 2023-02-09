// Copyright 2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import prueba from './prueba.js';

type StringsType = {
  'prueba': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'nameStringProperty': LinkableProperty<string>;
  }
};

const PruebaStrings = getStringModule( 'PRUEBA' ) as StringsType;

prueba.register( 'PruebaStrings', PruebaStrings );

export default PruebaStrings;
