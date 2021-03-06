/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the NamespaceCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Namespace operation.
 *
 * @member {string} location Namespace location.
 * 
 * @member {object} [sku]
 * 
 * @member {string} [sku.name] Name of this Sku. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 * 
 * @member {string} [sku.tier] The tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard', 'Premium'
 * 
 * @member {number} [sku.capacity] The messaging units for the tier specified
 * 
 * @member {object} [tags] Namespace tags.
 * 
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * 
 * @member {string} [status] State of the namespace. Possible values include:
 * 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active',
 * 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing',
 * 'Removed', 'Failed'
 * 
 * @member {date} [createdAt] The time the namespace was created.
 * 
 * @member {date} [updatedAt] The time the namespace was updated.
 * 
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * ServiceBus operations.
 * 
 * @member {boolean} [createACSNamespace] Indicates whether to create ACS
 * namespace.
 * 
 * @member {boolean} [enabled] Specifies whether this instance is enabled.
 * 
 */
export interface NamespaceCreateOrUpdateParameters {
  location: string;
  sku?: Sku;
  tags?: { [propertyName: string]: string };
  provisioningState?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  serviceBusEndpoint?: string;
  createACSNamespace?: boolean;
  enabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * Sku of the Namespace.
 *
 * @member {string} [name] Name of this Sku. Possible values include: 'Basic',
 * 'Standard', 'Premium'
 * 
 * @member {string} tier The tier of this particular SKU. Possible values
 * include: 'Basic', 'Standard', 'Premium'
 * 
 * @member {number} [capacity] The messaging units for the tier specified
 * 
 */
export interface Sku {
  name?: string;
  tier: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the NamespaceResource class.
 * @constructor
 * Description of a Namespace resource.
 *
 * @member {object} [sku]
 * 
 * @member {string} [sku.name] Name of this Sku. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 * 
 * @member {string} [sku.tier] The tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard', 'Premium'
 * 
 * @member {number} [sku.capacity] The messaging units for the tier specified
 * 
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * 
 * @member {string} [status] State of the namespace. Possible values include:
 * 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active',
 * 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing',
 * 'Removed', 'Failed'
 * 
 * @member {date} [createdAt] The time the namespace was created.
 * 
 * @member {date} [updatedAt] The time the namespace was updated.
 * 
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * ServiceBus operations.
 * 
 * @member {boolean} [createACSNamespace] Indicates whether to create ACS
 * namespace.
 * 
 * @member {boolean} [enabled] Specifies whether this instance is enabled.
 * 
 */
export interface NamespaceResource extends Resource {
  sku?: Sku;
  provisioningState?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  serviceBusEndpoint?: string;
  createACSNamespace?: boolean;
  enabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate  AuthorizationRules.
 *
 * @member {string} [location] data center location.
 * 
 * @member {string} [name] Name of the AuthorizationRule.
 * 
 * @member {array} rights The rights associated with the rule.
 * 
 */
export interface SharedAccessAuthorizationRuleCreateOrUpdateParameters {
  location?: string;
  name?: string;
  rights: string[];
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleResource class.
 * @constructor
 * Description of a Namespace AuthorizationRules.
 *
 * @member {array} rights The rights associated with the rule.
 * 
 */
export interface SharedAccessAuthorizationRuleResource extends Resource {
  rights: string[];
}

/**
 * @class
 * Initializes a new instance of the ResourceListKeys class.
 * @constructor
 * Namespace/ServiceBus Connection String
 *
 * @member {string} [primaryConnectionString] PrimaryConnectionString of the
 * created Namespace AuthorizationRule.
 * 
 * @member {string} [secondaryConnectionString] SecondaryConnectionString of
 * the created Namespace AuthorizationRule
 * 
 * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token
 * 
 * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token
 * 
 * @member {string} [keyName] A string that describes the authorization rule
 * 
 */
export interface ResourceListKeys {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the RegenerateKeysParameters class.
 * @constructor
 * Parameters supplied to the Regenerate Auth Rule.
 *
 * @member {string} [policykey] Key that needs to be regenerated . Possible
 * values include: 'PrimaryKey', 'SecondaryKey'
 * 
 */
export interface RegenerateKeysParameters {
  policykey?: string;
}

/**
 * @class
 * Initializes a new instance of the QueueCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Queue operation.
 *
 * @member {string} [name] Queue name.
 * 
 * @member {string} location location of the resource.
 * 
 * @member {string} [lockDuration] the duration of a peek lock; that is, the
 * amount of time that the message is locked for other receivers. The maximum
 * value for LockDuration is 5 minutes; the default value is 1 minute.
 * 
 * @member {date} [accessedAt] Last time a message was sent, or the last time
 * there was a receive request to this queue.
 * 
 * @member {string} [autoDeleteOnIdle] the TimeSpan idle interval after which
 * the queue is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the queue. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {date} [createdAt] the exact time the message was created.
 * 
 * @member {string} [defaultMessageTimeToLive] the default message time to
 * live value. This is the duration after which the message expires, starting
 * from when the message is sent to Service Bus. This is the default value
 * used when TimeToLive is not set on a message itself.
 * 
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes..
 * 
 * @member {boolean} [enableBatchedOperations] value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {boolean} [deadLetteringOnMessageExpiration] a value that indicates
 * whether this queue has dead letter support when a message expires.
 * 
 * @member {boolean} [enableExpress] a value that indicates whether Express
 * Entities are enabled. An express queue holds a message in memory
 * temporarily before writing it to persistent storage.
 * 
 * @member {boolean} [enablePartitioning] value that indicates whether the
 * queue to be partitioned across multiple message brokers is enabled.
 * 
 * @member {boolean} [isAnonymousAccessible] a value that indicates whether
 * the message is anonymous accessible.
 * 
 * @member {number} [maxDeliveryCount] the maximum delivery count. A message
 * is automatically deadlettered after this number of deliveries.
 * 
 * @member {number} [maxSizeInMegabytes] the maximum size of the queue in
 * megabytes, which is the size of memory allocated for the queue.
 * 
 * @member {number} [messageCount] the number of messages in the queue.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {boolean} [requiresDuplicateDetection] the value indicating if this
 * queue requires duplicate detection.
 * 
 * @member {boolean} [requiresSession] a value that indicates whether the
 * queue supports the concept of session.
 * 
 * @member {number} [sizeInBytes] the size of the queue in bytes.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {boolean} [supportOrdering] a value that indicates whether the
 * queue supports ordering.
 * 
 * @member {date} [updatedAt] the exact time the message has been updated.
 * 
 */
export interface QueueCreateOrUpdateParameters {
  name?: string;
  location: string;
  lockDuration?: string;
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  entityAvailabilityStatus?: string;
  createdAt?: Date;
  defaultMessageTimeToLive?: string;
  duplicateDetectionHistoryTimeWindow?: string;
  enableBatchedOperations?: boolean;
  deadLetteringOnMessageExpiration?: boolean;
  enableExpress?: boolean;
  enablePartitioning?: boolean;
  isAnonymousAccessible?: boolean;
  maxDeliveryCount?: number;
  maxSizeInMegabytes?: number;
  messageCount?: number;
  countDetails?: MessageCountDetails;
  requiresDuplicateDetection?: boolean;
  requiresSession?: boolean;
  sizeInBytes?: number;
  status?: string;
  supportOrdering?: boolean;
  updatedAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the MessageCountDetails class.
 * @constructor
 * Message Count Details.
 *
 * @member {number} [activeMessageCount] Number of active messages in the
 * queue, topic, or subscription.
 * 
 * @member {number} [deadLetterMessageCount] Number of messages that are dead
 * letters.
 * 
 * @member {number} [scheduledMessageCount] Number scheduled messages.
 * 
 * @member {number} [transferDeadLetterMessageCount] Number of messages
 * transferred into dead letters.
 * 
 * @member {number} [transferMessageCount] Number of messages transferred to
 * another queue, topic, or subscription.
 * 
 */
export interface MessageCountDetails {
  activeMessageCount?: number;
  deadLetterMessageCount?: number;
  scheduledMessageCount?: number;
  transferDeadLetterMessageCount?: number;
  transferMessageCount?: number;
}

/**
 * @class
 * Initializes a new instance of the QueueResource class.
 * @constructor
 * Description of queue Resource.
 *
 * @member {string} [lockDuration] the duration of a peek lock; that is, the
 * amount of time that the message is locked for other receivers. The maximum
 * value for LockDuration is 5 minutes; the default value is 1 minute.
 * 
 * @member {date} [accessedAt] Last time a message was sent, or the last time
 * there was a receive request to this queue.
 * 
 * @member {string} [autoDeleteOnIdle] the TimeSpan idle interval after which
 * the queue is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the queue. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {date} [createdAt] the exact time the message was created.
 * 
 * @member {string} [defaultMessageTimeToLive] the default message time to
 * live value. This is the duration after which the message expires, starting
 * from when the message is sent to Service Bus. This is the default value
 * used when TimeToLive is not set on a message itself.
 * 
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes..
 * 
 * @member {boolean} [enableBatchedOperations] value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {boolean} [deadLetteringOnMessageExpiration] a value that indicates
 * whether this queue has dead letter support when a message expires.
 * 
 * @member {boolean} [enableExpress] a value that indicates whether Express
 * Entities are enabled. An express queue holds a message in memory
 * temporarily before writing it to persistent storage.
 * 
 * @member {boolean} [enablePartitioning] value that indicates whether the
 * queue to be partitioned across multiple message brokers is enabled.
 * 
 * @member {boolean} [isAnonymousAccessible] a value that indicates whether
 * the message is anonymous accessible.
 * 
 * @member {number} [maxDeliveryCount] the maximum delivery count. A message
 * is automatically deadlettered after this number of deliveries.
 * 
 * @member {number} [maxSizeInMegabytes] the maximum size of the queue in
 * megabytes, which is the size of memory allocated for the queue.
 * 
 * @member {number} [messageCount] the number of messages in the queue.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {boolean} [requiresDuplicateDetection] the value indicating if this
 * queue requires duplicate detection.
 * 
 * @member {boolean} [requiresSession] a value that indicates whether the
 * queue supports the concept of session.
 * 
 * @member {number} [sizeInBytes] the size of the queue in bytes.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {boolean} [supportOrdering] a value that indicates whether the
 * queue supports ordering.
 * 
 * @member {date} [updatedAt] the exact time the message has been updated.
 * 
 */
export interface QueueResource extends Resource {
  lockDuration?: string;
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  entityAvailabilityStatus?: string;
  createdAt?: Date;
  defaultMessageTimeToLive?: string;
  duplicateDetectionHistoryTimeWindow?: string;
  enableBatchedOperations?: boolean;
  deadLetteringOnMessageExpiration?: boolean;
  enableExpress?: boolean;
  enablePartitioning?: boolean;
  isAnonymousAccessible?: boolean;
  maxDeliveryCount?: number;
  maxSizeInMegabytes?: number;
  messageCount?: number;
  countDetails?: MessageCountDetails;
  requiresDuplicateDetection?: boolean;
  requiresSession?: boolean;
  sizeInBytes?: number;
  status?: string;
  supportOrdering?: boolean;
  updatedAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the TopicCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Topic operation.
 *
 * @member {string} [name] Topic name.
 * 
 * @member {string} location Location of the resource.
 * 
 * @member {date} [accessedAt] Last time the message was sent or a request was
 * received for this topic.
 * 
 * @member {string} [autoDeleteOnIdle] TimeSpan idle interval after which the
 * topic is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the topic. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {date} [createdAt] Exact time the message was created.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {string} [defaultMessageTimeToLive] Default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used
 * when TimeToLive is not set on a message itself.
 * 
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes..
 * 
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {boolean} [enableExpress] Value that indicates whether Express
 * Entities are enabled. An express topic holds a message in memory
 * temporarily before writing it to persistent storage.
 * 
 * @member {boolean} [enablePartitioning] Value that indicates whether the
 * topic to be partitioned across multiple message brokers is enabled.
 * 
 * @member {boolean} [enableSubscriptionPartitioning] Value that indicates
 * whether partitioning is enabled or disabled..
 * 
 * @member {boolean} [filteringMessagesBeforePublishing] Whether messages
 * should be filtered before publishing.
 * 
 * @member {boolean} [isAnonymousAccessible] Value that indicates whether the
 * message is anonymous accessible.
 * 
 * @member {boolean} [isExpress]
 * 
 * @member {number} [maxSizeInMegabytes] Maximum size of the topic in
 * megabytes, which is the size of memory allocated for the topic.
 * 
 * @member {boolean} [requiresDuplicateDetection] Value indicating if this
 * topic requires duplicate detection.
 * 
 * @member {number} [sizeInBytes] Size of the topic in bytes.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {number} [subscriptionCount] Number of subscriptions.
 * 
 * @member {boolean} [supportOrdering] Value that indicates whether the topic
 * supports ordering.
 * 
 * @member {date} [updatedAt] The exact time the message has been updated.
 * 
 */
export interface TopicCreateOrUpdateParameters {
  name?: string;
  location: string;
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  entityAvailabilityStatus?: string;
  createdAt?: Date;
  countDetails?: MessageCountDetails;
  defaultMessageTimeToLive?: string;
  duplicateDetectionHistoryTimeWindow?: string;
  enableBatchedOperations?: boolean;
  enableExpress?: boolean;
  enablePartitioning?: boolean;
  enableSubscriptionPartitioning?: boolean;
  filteringMessagesBeforePublishing?: boolean;
  isAnonymousAccessible?: boolean;
  isExpress?: boolean;
  maxSizeInMegabytes?: number;
  requiresDuplicateDetection?: boolean;
  sizeInBytes?: number;
  status?: string;
  subscriptionCount?: number;
  supportOrdering?: boolean;
  updatedAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the TopicResource class.
 * @constructor
 * Description of topic Resource.
 *
 * @member {date} [accessedAt] Last time the message was sent or a request was
 * received for this topic.
 * 
 * @member {string} [autoDeleteOnIdle] TimeSpan idle interval after which the
 * topic is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the topic. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {date} [createdAt] Exact time the message was created.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {string} [defaultMessageTimeToLive] Default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used
 * when TimeToLive is not set on a message itself.
 * 
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes..
 * 
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {boolean} [enableExpress] Value that indicates whether Express
 * Entities are enabled. An express topic holds a message in memory
 * temporarily before writing it to persistent storage.
 * 
 * @member {boolean} [enablePartitioning] Value that indicates whether the
 * topic to be partitioned across multiple message brokers is enabled.
 * 
 * @member {boolean} [enableSubscriptionPartitioning] Value that indicates
 * whether partitioning is enabled or disabled..
 * 
 * @member {boolean} [filteringMessagesBeforePublishing] Whether messages
 * should be filtered before publishing.
 * 
 * @member {boolean} [isAnonymousAccessible] Value that indicates whether the
 * message is anonymous accessible.
 * 
 * @member {boolean} [isExpress]
 * 
 * @member {number} [maxSizeInMegabytes] Maximum size of the topic in
 * megabytes, which is the size of memory allocated for the topic.
 * 
 * @member {boolean} [requiresDuplicateDetection] Value indicating if this
 * topic requires duplicate detection.
 * 
 * @member {number} [sizeInBytes] Size of the topic in bytes.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {number} [subscriptionCount] Number of subscriptions.
 * 
 * @member {boolean} [supportOrdering] Value that indicates whether the topic
 * supports ordering.
 * 
 * @member {date} [updatedAt] The exact time the message has been updated.
 * 
 */
export interface TopicResource extends Resource {
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  entityAvailabilityStatus?: string;
  createdAt?: Date;
  countDetails?: MessageCountDetails;
  defaultMessageTimeToLive?: string;
  duplicateDetectionHistoryTimeWindow?: string;
  enableBatchedOperations?: boolean;
  enableExpress?: boolean;
  enablePartitioning?: boolean;
  enableSubscriptionPartitioning?: boolean;
  filteringMessagesBeforePublishing?: boolean;
  isAnonymousAccessible?: boolean;
  isExpress?: boolean;
  maxSizeInMegabytes?: number;
  requiresDuplicateDetection?: boolean;
  sizeInBytes?: number;
  status?: string;
  subscriptionCount?: number;
  supportOrdering?: boolean;
  updatedAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Subscription operation.
 *
 * @member {string} location Subscription data center location.
 * 
 * @member {string} [type] Resource Manager type of the resource.
 * 
 * @member {date} [accessedAt] Last time a there was a receive request to this
 * subscription.
 * 
 * @member {string} [autoDeleteOnIdle] TimeSpan idle interval after which the
 * topic is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {date} [createdAt] Exact time the message was created.
 * 
 * @member {string} [defaultMessageTimeToLive] Default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used
 * when TimeToLive is not set on a message itself.
 * 
 * @member {boolean} [deadLetteringOnFilterEvaluationExceptions] Value that
 * indicates if a subscription has dead letter support on Filter evaluation
 * exceptions.
 * 
 * @member {boolean} [deadLetteringOnMessageExpiration] Value that indicates
 * if a subscription has dead letter support when a message expires.
 * 
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the topic. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {boolean} [isReadOnly] Value that indicates whether the entity
 * description is read-only.
 * 
 * @member {string} [lockDuration] The lock duration time span for the
 * subscription.
 * 
 * @member {number} [maxDeliveryCount] Number of maximum deliveries.
 * 
 * @member {number} [messageCount] Number of messages.
 * 
 * @member {boolean} [requiresSession] Value indicating if a subscription
 * supports the concept of session.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {date} [updatedAt] The exact time the message has been updated.
 * 
 */
export interface SubscriptionCreateOrUpdateParameters {
  location: string;
  type?: string;
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  countDetails?: MessageCountDetails;
  createdAt?: Date;
  defaultMessageTimeToLive?: string;
  deadLetteringOnFilterEvaluationExceptions?: boolean;
  deadLetteringOnMessageExpiration?: boolean;
  enableBatchedOperations?: boolean;
  entityAvailabilityStatus?: string;
  isReadOnly?: boolean;
  lockDuration?: string;
  maxDeliveryCount?: number;
  messageCount?: number;
  requiresSession?: boolean;
  status?: string;
  updatedAt?: Date;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionResource class.
 * @constructor
 * Description of Subscription Resource.
 *
 * @member {date} [accessedAt] Last time a there was a receive request to this
 * subscription.
 * 
 * @member {string} [autoDeleteOnIdle] TimeSpan idle interval after which the
 * topic is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {date} [createdAt] Exact time the message was created.
 * 
 * @member {string} [defaultMessageTimeToLive] Default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used
 * when TimeToLive is not set on a message itself.
 * 
 * @member {boolean} [deadLetteringOnFilterEvaluationExceptions] Value that
 * indicates if a subscription has dead letter support on Filter evaluation
 * exceptions.
 * 
 * @member {boolean} [deadLetteringOnMessageExpiration] Value that indicates
 * if a subscription has dead letter support when a message expires.
 * 
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the topic. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {boolean} [isReadOnly] Value that indicates whether the entity
 * description is read-only.
 * 
 * @member {string} [lockDuration] The lock duration time span for the
 * subscription.
 * 
 * @member {number} [maxDeliveryCount] Number of maximum deliveries.
 * 
 * @member {number} [messageCount] Number of messages.
 * 
 * @member {boolean} [requiresSession] Value indicating if a subscription
 * supports the concept of session.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {date} [updatedAt] The exact time the message has been updated.
 * 
 */
export interface SubscriptionResource extends Resource {
  accessedAt?: Date;
  autoDeleteOnIdle?: string;
  countDetails?: MessageCountDetails;
  createdAt?: Date;
  defaultMessageTimeToLive?: string;
  deadLetteringOnFilterEvaluationExceptions?: boolean;
  deadLetteringOnMessageExpiration?: boolean;
  enableBatchedOperations?: boolean;
  entityAvailabilityStatus?: string;
  isReadOnly?: boolean;
  lockDuration?: string;
  maxDeliveryCount?: number;
  messageCount?: number;
  requiresSession?: boolean;
  status?: string;
  updatedAt?: Date;
}


/**
 * @class
 * Initializes a new instance of the NamespaceListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Namespaces
 * 
 */
export interface NamespaceListResult extends Array<NamespaceResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of AuthorizationRules
 * 
 */
export interface SharedAccessAuthorizationRuleListResult extends Array<SharedAccessAuthorizationRuleResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the QueueListResult class.
 * @constructor
 * The response of the List Queues operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Queues
 * 
 */
export interface QueueListResult extends Array<QueueResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicListResult class.
 * @constructor
 * The response of the List Topics operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Topics
 * 
 */
export interface TopicListResult extends Array<TopicResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionListResult class.
 * @constructor
 * The response of the List Subscriptions operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Subscriptions
 * 
 */
export interface SubscriptionListResult extends Array<SubscriptionResource> {
  nextLink?: string;
}
