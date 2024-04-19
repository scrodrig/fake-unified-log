# END example data
curl --location 'https://api.dev.galp.com/logging/v1/api/send-log-end' \
--header 'client_id: xxx' \
--header 'client_secret: xxx' \
--header 'x-correlation-id: d1a4f090-c048-11ee-aae9-0279385562e9' \
--header 'x-api-name: externalAPI' \
--header 'x-timestamp: 2024-01-01T00:00:00.000+00:00' \
--header 'x-user: testUser' \
--header 'x-platform: postmanPlatform' \
--header 'x-step: 2' \
--header 'Content-Type: application/json' \
--data '{
    "applicationType": "Process",
    "domain": "domain",
    "content": {
        "inputPayload": "",
        "payload": "{\n  external_reference: \"1234567890\",\n  external_level_code: \"ABC12\"\n}",
        "context": {
            "elapsed": 60,
            "isError": "0",
            "eCode": "201",
            "eDescription": "Sucesso",
            "businessKeyGroups": [
                {
                    "businessKeys": {
                        "Produto": "Pao",
                        "Preco": "1.5"
                    }
                },
                {
                    "businessKeys": {
                        "Produto": "Queijo",
                        "Preco": "2.05"
                    }
                }             
            ]
        }
    },
    "requestMethod": "POST",
    "rawRequestUri": "/api/appName/v1/flow2"
}'


# START example data
curl --location 'https://api.dev.galp.com/logging/v1/api/send-log-start' \
--header 'client_id: xxx' \
--header 'client_secret: xxx' \
--header 'x-correlation-id: d1a4f090-c048-11ee-aae9-0279385562e9' \
--header 'x-timestamp: 2024-01-01T00:00:00.000+00:00' \
--header 'x-api-name: externalAPI' \
--header 'x-user: testUser' \
--header 'x-platform: postmanPlatform' \
--header 'x-step: 2' \
--header 'Content-Type: application/json' \
--data '{
    "applicationType": "Process",
    "domain":"domain",
    "content": {
        "inputPayload": "{\n  id: \"1234567890\"\n}",
        "payload": "",
        "context": {
            "elapsed": 0,
            "isError": "0",
            "businessKeyGroups": [
                {
                    "businessKeys": {
                    }
                }
            ]
        }
    },
    "requestMethod": "POST",
    "rawRequestUri": "/api/appName/v1/flow2"
}'

# FLOW example data
curl --location 'https://api.dev.galp.com/logging/v1/api/send-log-flow' \
--header 'client_id: xxx' \
--header 'client_secret: xxx' \
--header 'x-correlation-id: d1a4f090-c048-11ee-aae9-0279385562e9' \
--header 'x-api-name: externalAPI' \
--header 'x-timestamp: 2024-01-01T00:00:00.000+00:00' \
--header 'x-user: testUser' \
--header 'x-platform: postmanPlatform' \
--header 'x-step: 2' \
--header 'Content-Type: application/json' \
--data '{
    "applicationType": "Process",
    "domain": "domain",
    "content": {
        "inputPayload": "{\n  id: \"1234567890\"\n}",
        "payload": "{\n  external_reference: \"1234567890\",\n  external_level_code: \"ABC12\"\n}",
        "context": {
            "elapsed": 60,
            "isError": "0",
            "businessKeyGroups": [
                {
                    "businessKeys": {
                        "field1": "value1",
                        "field2": "value2"
                    }
                }
            ]
        }
    },
    "requestMethod": "POST",
    "rawRequestUri": "/api/appName/v1/flow2"
}'

# EXCEPTION example data
curl --location 'https://api.dev.galp.com/logging/v1/api/send-log-exception' \
--header 'client_id: xxx' \
--header 'client_secret: xxx' \
--header 'x-correlation-id: d1a4f090-c048-11ee-aae9-0279385562e9' \
--header 'x-api-name: externalAPI' \
--header 'x-timestamp: 2024-01-01T00:00:00.000+00:00' \
--header 'x-user: testUser' \
--header 'x-platform: postmanPlatform' \
--header 'x-step: 2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "applicationType": "Process",
    "domain":"domain",
    "content": {
        "inputPayload": "{\n  id: \"1234567890\"\n}",
        "payload": "{\n  code: \"404\",\n  \"type\": \"NOT_FOUND\",\n  timestamp: \"2024-01-02T16:14:19.783+00:00\",\n  title: \"/send-log-start\",\n  detail: \"galpgroup-logging-exp-main/processors/3 @ galpgroup-logging-exp:galpgroup-logging-exp.xml:20\",\n  referenceId: \"asf456\"\n} as Object {encoding: \"UTF-8\", mediaType: \"application/json; charset=UTF-8\", mimeType: \"application/json\", contentLength: 255}",
        "context": {
            "elapsed": 60,
            "eCode": "401",
            "eDescription": "Request does not contains permissions to access this api. You should provide an valid access token",
            "nCode": "401",
            "nDescription": "Client request has not been completed because it lacks valid authentication credentials for the requested resource",
            "businessKeyGroups": [
                {
                    "businessKeys": {
                        "field1": "value1",
                        "field2": "value2"
                    }
                },
                {
                    "businessKeys": {
                        "field1": "value3",
                        "field2": "value4"
                    }
                }
            ]
        }
    },
    "requestMethod": "POST",
    "rawRequestUri": "/api/appName/v1/flow2"
}'