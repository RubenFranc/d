// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author RubenFranc
 */

import prueba from '../../prueba.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';

type SelfOptions = {
  //TODO add options that are specific to PruebaModel here
};

type PruebaModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

class PruebaModel {

  public constructor( providedOptions: PruebaModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

prueba.register( 'PruebaModel', PruebaModel );
export default PruebaModel;