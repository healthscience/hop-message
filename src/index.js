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
    console.log('message')
  }

}

export default HopMessages