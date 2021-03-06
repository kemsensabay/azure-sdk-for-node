// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d69efb1-b7d7-4b03-8bdc-d2db20e1830d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d69efb1-b7d7-4b03-8bdc-d2db20e1830d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1478901353564,\"modificationTime\":1478901353564,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f7f1ef1-d29b-48fd-b400-634d1b3b31f5',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1478901353564,\"modificationTime\":1478901353564,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f7f1ef1-d29b-48fd-b400-634d1b3b31f5',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls2879.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '8f177382-209c-4f92-9ffa-2ab20286ebc9',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls2879.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '8f177382-209c-4f92-9ffa-2ab20286ebc9',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354204,\"modificationTime\":1478901354204,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3cff594b-74ab-40e2-8033-d826a28f80b0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '287' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354204,\"modificationTime\":1478901354204,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3cff594b-74ab-40e2-8033-d826a28f80b0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:53 GMT',
  connection: 'close',
  'content-length': '287' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls2879.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '5754926d-7d87-4777-9c9d-21f3f85a59a9',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls2879.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': '5754926d-7d87-4777-9c9d-21f3f85a59a9',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354941,\"modificationTime\":1478901355036,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '124234ad-a0ad-43eb-ad00-2607d1ec1c65',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '288' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=MSGETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354941,\"modificationTime\":1478901355036,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '124234ad-a0ad-43eb-ad00-2607d1ec1c65',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '288' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354941,\"modificationTime\":1478901355036,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354204,\"modificationTime\":1478901354204,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb64f367-cc7c-4ae2-be5e-6b62473bd07e',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '608' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2879.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354941,\"modificationTime\":1478901355036,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1478901354204,\"modificationTime\":1478901354204,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb64f367-cc7c-4ae2-be5e-6b62473bd07e',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 11 Nov 2016 21:55:55 GMT',
  connection: 'close',
  'content-length': '608' });
 return result; }]];