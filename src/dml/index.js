'use strict'
/**
*  dml - message validation & routing
*
*
* @class DmlValidateroute
* @package    SafeflowRoute
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'

class DmlValidateroute extends EventEmitter {

  constructor() {
    super()
  }

  /**
  * type of dml message?
  * @method assessMessage
  *
  */
   assessMessage = function (options) {
    let messageRoute = {}
    messageRoute.type = options.type
    messageRoute.action = options.action
    messageRoute.data = options.data
    return messageRoute
  }

}

export default DmlValidateroute