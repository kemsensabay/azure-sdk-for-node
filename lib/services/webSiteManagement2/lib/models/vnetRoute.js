/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VnetRoute class.
 * @constructor
 * VnetRoute contract used to pass routing information for a vnet.
 * @member {string} [vnetRouteName] The name of this route. This is only
 * returned by the server and does not need to be set by the client.
 * 
 * @member {string} [startAddress] The starting address for this route. This
 * may also include a CIDR notation, in which case the end address must not
 * be specified.
 * 
 * @member {string} [endAddress] The ending address for this route. If the
 * start address is specified in CIDR notation, this must be omitted.
 * 
 * @member {string} [routeType] The type of route this is:
 * DEFAULT - By default, every web app has routes to the local
 * address ranges specified by RFC1918
 * INHERITED - Routes inherited from the real Virtual Network
 * routes
 * STATIC - Static route set on the web app only
 * 
 * These values will be used for syncing a Web App's routes with
 * those from a Virtual Network. This operation will clear all DEFAULT and
 * INHERITED routes and replace them
 * with new INHERITED routes.
 * 
 */
function VnetRoute() {
  VnetRoute['super_'].call(this);
}

util.inherits(VnetRoute, models['Resource']);

/**
 * Defines the metadata of VnetRoute
 *
 * @returns {object} metadata of VnetRoute
 *
 */
VnetRoute.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VnetRoute',
    type: {
      name: 'Composite',
      className: 'VnetRoute',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        vnetRouteName: {
          required: false,
          serializedName: 'properties.name',
          type: {
            name: 'String'
          }
        },
        startAddress: {
          required: false,
          serializedName: 'properties.startAddress',
          type: {
            name: 'String'
          }
        },
        endAddress: {
          required: false,
          serializedName: 'properties.endAddress',
          type: {
            name: 'String'
          }
        },
        routeType: {
          required: false,
          serializedName: 'properties.routeType',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VnetRoute;