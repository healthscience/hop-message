'use strict'
/**
*  safeflow - routing
*
*
* @class SfRoute
* @package    SafeflowRoute
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'
import SafeFlow from 'node-safeflow'

class SfRoute extends EventEmitter {

  constructor() {
    super()
    console.log('{{sf-route}}')
  }

  /**
  * type of safeflow message?
  * @method assessMessage
  *
  */
   assessMessage = function (options) {
    console.log('type analaysis')
    let messageRoute = {}
    messageRoute.type = 'safeflow'
    messageRoute.action = options
    return messageRoute
  }

}

export default SfRoute