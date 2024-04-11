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