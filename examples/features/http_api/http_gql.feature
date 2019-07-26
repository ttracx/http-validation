@http_api @http_gql
Feature: GQL Service

  Scenario: Validating HTTP Using GQL Service
    Given I set Accept-Language request header to en-US
    And I set Authorization request header to Bearer 2a199b24-d19b-3646-8cff-5fa8965bddd3.0000016c30080ba0.2fd4ba3ff9a3d3beda3d3da6284676703d6df3a1
    And I set Content-Language request header to en-US
    And I set Cookie request header to dtCookie==3=srv=3=sn=43F4700147E1FB7A46131D6BC067D802=perc=100000=ol=0=mul=1
    And I set dx-gql-authorization request header to Basic Z3FsQGRtMW46UEAkJDEyMyE=
    And I set dx-gql-compression request header to true
    And I set dx-gql-debug request header to http
    And I set dx-gql-trusted request header to true
    And I set User-Agent request header to Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
    And I set x-forwarded-for request header to 10.103.1.209
    When I GET https://api-s.hhc.hilton.com/hospitality-corporate/v2/props/CHIHS/
    Then response status code should be 200