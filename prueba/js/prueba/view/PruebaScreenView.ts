// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author RubenFranc
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import PruebaConstants from '../../common/PruebaConstants.js';
import prueba from '../../prueba.js';
import PruebaModel from '../model/PruebaModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to PruebaScreenView here
};

type PruebaScreenViewOptions = SelfOptions & ScreenViewOptions;

class PruebaScreenView extends ScreenView {

  public constructor( model: PruebaModel, providedOptions: PruebaScreenViewOptions ) {

    const options = optionize<PruebaScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - PruebaConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - PruebaConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

prueba.register( 'PruebaScreenView', PruebaScreenView );
export default PruebaScreenView;