'use strict'
/**
*  network - routing
*
*
* @class NetworkRoute
* @package    NetworkRoute
* @copyright  Copyright (c) 2024 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'

class NetworkRoute extends EventEmitter {

  constructor() {
    super()
  }

  /**
  * type of safeflow message?
  * @method assessMessage
  *
  */
   assessMessage = function (options) {
    let messageRoute = {}
    messageRoute.type = 'network'
    messageRoute.action = options.action
    messageRoute.privacy = options.privacy
    messageRoute.reftype = options.reftype
    messageRoute.task = options.task
    messageRoute.data = options.data
    return messageRoute
  }

}

export default NetworkRoute
