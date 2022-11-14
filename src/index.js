'use strict'
/**
*  message flow and logic routing
*
*
* @class HopMessages
* @package    HopMessages
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'

class HopMessages extends EventEmitter {

  constructor() {
    super()
    console.log('{{HOP-Messages}}')
  }

  /**
  * Message in
  * @method messageIn
  *
  */
  messageIn = function (message) {
    let routeMessage = {}
    // verifty -> route ECS or back to network (or both)
    let verifyState = this.verifyMessage()
    // library sf-ECS data-API AI
    if (verifyState === true) {
      if (message.type === 'launch') {
        routeMessage.type = 'launch'
        routeMessage.data = 'pass'
      } else if (message.reftype.trim() === 'ignore' && message.type.trim() === 'safeflow'  ) {
        // sf-ECS
      } else if (message.type.trim() === 'library') {
        this.library(message)
      } else if (message.type.trim() === 'data-api') {
        
      } else if (message.type.trim() === 'bb-ai') { 
      }
    } else {
      routeMessage.type = 'launch'
      routeMessage.data = 'fail'
    }
    return routeMessage
  }

  /**
  * check if signed, structure, warm  cold, allow or disallow, order priority
  * @method verifyMessage
  *
  */
   verifyMessage = function (message) {
    // check for public key sign, format
    // is between peer and HOP or from network?
    return true
   }

}

export default HopMessages