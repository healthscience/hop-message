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
import SfRoute from './safeflow/index.js'
import LibraryRoute from './library/index.js'
import DmlValidateroute from './library/index.js'
import NetworkRoute from './network/index.js'

class HopMessages extends EventEmitter {

  constructor() {
    super()
    this.routeNetwork = new NetworkRoute()
    this.routeSafeflow = new SfRoute()
    this.routeLibrary = new LibraryRoute()
    this.routeDML = new DmlValidateroute ()
    // this.routeHyper = new HyperRoute()
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
    // library sf-ECS data-API AI DML
    if (verifyState === true) {
      if (message.type === 'launch') {
        routeMessage.type = 'launch'
        routeMessage.data = 'pass'
      } else if (message.reftype.trim() === 'ignore' && message.type.trim() === 'safeflow'  ) {
        // sf-ECS
        routeMessage = this.routeSafeflow.assessMessage(message)
      } else if (message.type.trim() === 'network') {
        routeMessage = this.routeNetwork.assessMessage(message)
      } else if (message.type.trim() === 'library') {
        routeMessage = this.routeLibrary.assessMessage(message)
      } else if (message.type.trim() === 'bentobox') {
        routeMessage.type = message.type
        routeMessage.action = message.action
        routeMessage.reftype = message.reftype
        routeMessage.task = message.task
        routeMessage.bbid = message.bbid
        routeMessage.data = message.data
      } else if (message.type.trim() === 'data-api') {
        // routeMessage = this.routeHyper.()
       } else if (message.type.trim() === 'bbai') {
        // routeMessage = this.routeBBAi(options)
        routeMessage.type = 'bbai-reply'
        routeMessage.bbid = message.bbid
        routeMessage.reftype = 'ignore'
        routeMessage.action = message.action
        routeMessage.data = message.data
      } else if (message.type.trim() === 'dml') {
        console.log('dml message')
        routeMessage = this.routeDML(options)
        routeMessage.type = 'dml-reply'
        routeMessage.bbid = message.bbid
        routeMessage.reftype = 'ignore'
        routeMessage.action = message.action
        routeMessage.data = message.data
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