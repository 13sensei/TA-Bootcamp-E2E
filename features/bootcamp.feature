Feature: Search bar and internet shop logo button

    Background:
        Given open newegg home page

    Scenario: Search bar
        When enter "<searchedPhrase>" in a search bar
        And click on a search icon
        Then searching resluts for "<searchedPhrase>" are displayed

        Examples:
            | searchedPhrase |
            | Windows        |

    Scenario: Internet shop logo button
        When click on Today's Best Deals tab
        And click on Internet shop logo
        Then home page is displayed