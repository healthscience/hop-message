'use strict'
/**
*  beebee - message validation & routing
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

class BeebeeMessage extends EventEmitter {

  constructor() {
    super()
  }

  /**
  * check details and retrun route to follow
  * @method assessMessage
  *
  */
   assessMessage = function (message) {
    let routeMessage = {}
    if (message.action.trim() === 'question') {
      routeMessage.type = 'bbai-reply'
      routeMessage.bbid = message.bbid
      routeMessage.reftype = 'ignore'
      routeMessage.action = message.action
      routeMessage.data = message.data
    } else if (message.action.trim() === 'predict-future') {
      routeMessage.type = 'bbai-reply'
      routeMessage.bbid = message.bbid
      routeMessage.reftype = 'ignore'
      routeMessage.action = message.action
      routeMessage.data = message.data
    } else if (message.action.trim() === 'bentoboxds') {
      routeMessage.type = 'bbai-reply'
      routeMessage.bbid = message.bbid
      routeMessage.reftype = 'ignore'
      routeMessage.action = message.action
      routeMessage.data = message.data
    }
    return routeMessage
  }

}

export default BeebeeMessage