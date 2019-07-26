@http_api @cookies_gql
Feature: Using cookies for GQL

  Scenario: Visiting GQL Services
    Given enable cookies
    When I GET https://www.stg.hilton.com/graphql/customer/
    Then response status should be ok
    And response should have a guest_id cookie
    And response guest_id cookie should not be secure
    And response guest_id cookie should not be http only