// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author RubenFranc
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import PruebaColors from '../common/PruebaColors.js';
import prueba from '../prueba.js';
import PruebaModel from './model/PruebaModel.js';
import PruebaScreenView from './view/PruebaScreenView.js';
import PruebaStrings from '../PruebaStrings.js';

type SelfOptions = {
  //TODO add options that are specific to PruebaScreen here
};

type PruebaScreenOptions = SelfOptions & ScreenOptions;

class PruebaScreen extends Screen<PruebaModel, PruebaScreenView> {

  public constructor( providedOptions: PruebaScreenOptions ) {

    const options = optionize<PruebaScreenOptions, SelfOptions, ScreenOptions>()( {
      name: PruebaStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: PruebaColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new PruebaModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new PruebaScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

prueba.register( 'PruebaScreen', PruebaScreen );
export default PruebaScreen;