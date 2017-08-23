# Typography [Learn More](https://soho.infor.com/index.php?p=component/typography)

## API Details

Typography styles in Soho do not have a Javascript API.

## Examples

1. [Main Example Page]( ../components/typography/example-index)

## Title Case vs. Sentence Case

Title case follows the standards used in book titles: always capitalize the first and last word, and capitalize all other words in the text string except for articles (a, an, the) and prepositions (except if they are the first or last word). Use title case for the following types of text:

- Any type of header (page headers, section headers, list headers, field set headers)
- Buttons
- Tab and accordion labels
- Menu and navigation options (including context menu options and tree components)
- Input field labels

Sentence case uses standard capitalization rules for full sentences: only capitalize the first letter of the sentence, along with any proper nouns. Use sentence case for the following types of text:

- Radio button labels
- Checkbox labels
- Notification and error and warning messages
- Normal Text
- Instructions


## Singular vs. Plural

As a general rule, use the singular form when referring to a single object, and plural when referring to a collection of objects. For example:

- Navigation (menu options) should be in plural form if referring to business objects (e.g. Sales Orders, Purchase Orders)
- Headers (page titles, section titles, tab labels) should be in plural form when they contain a list or collection of objects (parts, orders) and singular form if they display a single business object (a part detail or order detail)

## Be Concise

Context should be used when choosing label text. For example, if the page title is "Purchase Order 12345", you should generally not prefix labels on the screen with "Purchase", like "Purchase Order Name", "Purchase Order Number", "Purchase Order Description", etc. Instead, use "Name", Description", etc.

In general, "Number" should not be used in labels. Example: use "Advance Ship Notice" rather than "Advance Ship Notice Number". However, "Number" may be appended to a label if it helps differentiate between fields like "Item Number" and "Item Description"

If abbreviations are needed (useful in datagrid), it is better to abbreviate by removing words, for example removing "Item" since context is known. "Item Number" could become "Number" or "Num", and "Item Description" could become "Description" or "Desc"

When a field can contain one or more items, use the plural. Example: rather than "Group(s)", use "Groups"

## Ellipsis for Actions

While menu commands are used for immediate actions, more information might be needed to perform those actions. To indicate a command that needs additional information (including a confirmation), add an ellipsis ("...") to the end of the label. This doesn't mean you should use an ellipsis whenever an action displays another window—only when additional information is required to perform the action. For example, the commands About, Advanced, Help, Options, Properties, and Settings must display another window when clicked, but don't require additional information from the user. Therefore, they don't need ellipses.
