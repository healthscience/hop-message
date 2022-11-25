'use strict'
/**
*  library - routing
*
*
* @class LibraryRoute
* @package    LibraryRoute
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import util from 'util'
import EventEmitter from 'events'

class LibraryRoute extends EventEmitter {

  constructor() {
    super()
    console.log('{{library-route}}')
  }

  /**
  * type of safeflow message?
  * @method assessMessage
  *
  */
   assessMessage = function (options) {
    let messageRoute = {}
    messageRoute.type = 'library'
    messageRoute.action = options.action
    messageRoute.reftype = options.reftype
    messageRoute.data = options.data
    return messageRoute
  }

}

export default LibraryRoute