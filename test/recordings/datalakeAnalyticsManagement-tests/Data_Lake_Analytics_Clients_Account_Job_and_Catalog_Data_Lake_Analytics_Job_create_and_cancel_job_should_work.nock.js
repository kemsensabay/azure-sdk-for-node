// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8634.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe?api-version=2015-11-01-preview', '*')
  .reply(200, "{\"jobId\":\"294a4739-bb8d-482a-a1da-7609de05efbe\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"startTime\":null,\"endTime\":null,\"state\":\"Compiling\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64fe22ac-4bc4-4113-a00a-3ef60466a860',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8634.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe?api-version=2015-11-01-preview', '*')
  .reply(200, "{\"jobId\":\"294a4739-bb8d-482a-a1da-7609de05efbe\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"startTime\":null,\"endTime\":null,\"state\":\"Compiling\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64fe22ac-4bc4-4113-a00a-3ef60466a860',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8634.azuredatalakeanalytics.net:443')
  .post('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe/CancelJob?api-version=2015-11-01-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '0fc4af8e-edea-49f3-a1e3-06f6a3f44297',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8634.azuredatalakeanalytics.net:443')
  .post('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe/CancelJob?api-version=2015-11-01-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '0fc4af8e-edea-49f3-a1e3-06f6a3f44297',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8634.azuredatalakeanalytics.net:443')
  .get('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe?api-version=2015-11-01-preview')
  .reply(200, "{\"jobId\":\"294a4739-bb8d-482a-a1da-7609de05efbe\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"startTime\":null,\"endTime\":\"Tue, 15 Mar 2016 21:00:46 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_UNKNOWN_CJS_CANCELEDBYUSERWITHOUTREASON\",\"name\":\"CANCELED_BY_USER_WITHOUT_REASON\",\"severity\":\"Info\",\"source\":\"Unknown\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by {0}.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:45 GMT\",\"requestedByUser\":null,\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:46 GMT\",\"requestedByUser\":null,\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00.9218923\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd3633158-199d-410f-afad-bd903271a102',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8634.azuredatalakeanalytics.net:443')
  .get('/Jobs/294a4739-bb8d-482a-a1da-7609de05efbe?api-version=2015-11-01-preview')
  .reply(200, "{\"jobId\":\"294a4739-bb8d-482a-a1da-7609de05efbe\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"startTime\":null,\"endTime\":\"Tue, 15 Mar 2016 21:00:46 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_UNKNOWN_CJS_CANCELEDBYUSERWITHOUTREASON\",\"name\":\"CANCELED_BY_USER_WITHOUT_REASON\",\"severity\":\"Info\",\"source\":\"Unknown\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by {0}.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:40 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:45 GMT\",\"requestedByUser\":null,\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"Tue, 15 Mar 2016 21:00:46 GMT\",\"requestedByUser\":null,\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls7711.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/03/15/21/00/294a4739-bb8d-482a-a1da-7609de05efbe/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00.9218923\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd3633158-199d-410f-afad-bd903271a102',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 21:00:49 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['294a4739-bb8d-482a-a1da-7609de05efbe'];};