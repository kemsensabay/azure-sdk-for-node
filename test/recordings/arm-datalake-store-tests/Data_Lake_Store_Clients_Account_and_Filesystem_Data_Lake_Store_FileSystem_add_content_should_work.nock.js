// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls8152.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '52578d4c-f6c0-45a7-a756-d02332a7f7cb',
  'set-cookie': [ 'UserPrincipalSession=444d668f-943b-4282-96c8-4325ba4b3ba0; path=/; secure; HttpOnly' ],
  'server-perf': '[52578d4cf6c045a7a756d02332a7f7cb][ AuthTime::1477.27923999244::PostAuthTime::30939.462345632 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:051 ms]%0a[OpenNewHandle :: 00:00:051 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:051 ms]%0a[Open :: 00:00:051 ms]%0a[FsGetStreamLength :: 00:00:009 ms]%0a[GetLength :: 00:00:010 ms]%0a[FsAppendStream :: 00:00:419 ms]%0a[Write :: 00:00:419 ms]%0a[APPEND :: 00:00:483 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:06 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls8152.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '52578d4c-f6c0-45a7-a756-d02332a7f7cb',
  'set-cookie': [ 'UserPrincipalSession=444d668f-943b-4282-96c8-4325ba4b3ba0; path=/; secure; HttpOnly' ],
  'server-perf': '[52578d4cf6c045a7a756d02332a7f7cb][ AuthTime::1477.27923999244::PostAuthTime::30939.462345632 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:051 ms]%0a[OpenNewHandle :: 00:00:051 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:051 ms]%0a[Open :: 00:00:051 ms]%0a[FsGetStreamLength :: 00:00:009 ms]%0a[GetLength :: 00:00:010 ms]%0a[FsAppendStream :: 00:00:419 ms]%0a[Write :: 00:00:419 ms]%0a[APPEND :: 00:00:483 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:06 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls8152.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458073981070,\"modificationTime\":1458073987833,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff543f91-25ab-4c6f-89f7-cc90dd786aac',
  'set-cookie': [ 'UserPrincipalSession=2ebbfc55-202a-482d-8279-cdc323fb0675; path=/; secure; HttpOnly' ],
  'server-perf': '[ff543f9125ab4c6f89f7cc90dd786aac][ AuthTime::1498.21608356137::PostAuthTime::31675.1022405238 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:241 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:241 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:08 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls8152.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1458073981070,\"modificationTime\":1458073987833,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff543f91-25ab-4c6f-89f7-cc90dd786aac',
  'set-cookie': [ 'UserPrincipalSession=2ebbfc55-202a-482d-8279-cdc323fb0675; path=/; secure; HttpOnly' ],
  'server-perf': '[ff543f9125ab4c6f89f7cc90dd786aac][ AuthTime::1498.21608356137::PostAuthTime::31675.1022405238 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:241 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:241 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:08 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; }]];