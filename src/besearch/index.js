'use strict'
/**
*  besearch - routing
*
*
* @class BesearchRoute
* @package    BesearchRoute
* @copyright  Copyright (c) 2025 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'

class BesearchRoute extends EventEmitter {

  constructor() {
    super()
  }

  /**
  * type of besearch message?
  * @method assessMessage
  *
  */
   assessMessage = function (options) {
    let messageRoute = {}
    messageRoute.type = options.type
    messageRoute.action = options.action
    messageRoute.data = options.data
    messageRoute.task = options.task
    messageRoute.bbid = options.bbid
    return messageRoute
  }

}

export default BesearchRoute
