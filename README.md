# A Google Spreadsheet-Powered List

Transform a Google Spreadsheet into a styled list. Good for creating a list where each list item contains multiple components, e.g. a list of state and details corresponding to each state, court cases and their statuses, and so on. Here's a screenshot of one from the wild:

<p align="center">
  <img width="75%" src="https://github.com/motherjones/prettylist/blob/master/img/screenshot.png" alt="screenshot"/>
</p>

## Examples in the wild

[It's Not Just Hobby Lobby: These 71 Companies Don't Want to Cover Your Birth Control Either](http://www.motherjones.com/politics/2014/04/hobby-lobby-sebelius-contraceptive-for-profit-lawsuits)

[The Supreme Court's McCutcheon Decision Nuked Campaign Laws In These 11 States (Plus DC)](http://www.motherjones.com/mojo/2014/04/supreme-court-mccutcheon-impact-state-laws)

## How it works

*MoJo users:* Before you get started, follow [these instructions](https://github.com/motherjones/story-tools#starting-a-new-project).

Prettylist is like any other HTML unordered list, except each list item is automatically populated by data you'll enter into a Google Spreadsheet. This allows you to skip having to manually write out each list item in HTML. Prettylist works on mobile. We'd love to see pull requests to improve on its design and code base.

## Set up your Google Spreadsheet

First, make a copy of [this example spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AuHOPshyxQGGdFJzdlAzQWtFakZCSzlvak9zMmJyeFE#gid=1) and move the copy into the relevant beat folder in the Mother Jones Google Drive. Rename the spreadsheet as you see fit. Change the owner of the spreadsheet to MoJo Data in `Share > Advanced`.

Fill the first row with headers indicating the type of data that will appear in your list, as shown below. (**Pro tip:** There seem to be issues when spaces, special characters, or capital letters are included in the column headers. To avoid these issues, we recommend using all lowercase letters in your column headers.)

<p align="center">
  <img width="75%" src="https://github.com/motherjones/prettylist/blob/master/img/spreadsheet.png" alt="screenshot"/>
</p>

In order for prettylist to be able to read the data in your spreadsheet, you'll need to make your new spreadsheet public. Go to `File` and click on `Publish to the web,` then click on `Start publishing`. 

A URL will appear. It will look something like this: 
```
https://docs.google.com/spreadsheet/pub?key=0AuHOPshyxQGGdFJzdlAzQWtFakZCSzlvak9zMmJyeFE&output=html
```

Copy that link. This is your spreadsheet ID or url, which you will use to connect your spreadsheet to the prettylist.

## Modify your project files

*MoJo users:* By now you should have a local copy of this project repo on your machine. If you don't, go back and follow [these instructions](https://github.com/motherjones/story-tools#starting-a-new-project).

**In your copy of index.html (required):**

In order to get your data showing up in the prettylist, you'll need to edit a couple of lines of code in your index.html file. Open up index.html in a text editor and look for the script that looks like this:

```
    <script>
      var listItemTemplate = '\
        <h2>{casename}</h2>\
        <p><strong>Date filed:</strong> {datefiled}</p>\
        <p><strong>Case number:</strong> {courtandcasenumber}</p>\
        <p><strong>About the company:</strong> {descriptionlocation}</p>\
        <p><strong>Case status:</strong> {status}</p>\
      ';
      var thing = PrettyList(
        'your_spreadsheet_url_goes_here',
        '#prettylist',
        listItemTemplate);
    </script>
```
Paste the ID or url you just copied from your spreadsheet in the place of `your_spreadsheet_url_goes_here`.

Where we define the variable listItemTemplate, notice that we have some HTML with the spreadsheet column headers wrapped in curly brackets `{}`. This is the template for each list item. `<h2>{casename}</h2>\`, for example, will be filled with whatever you put in the rows under the casename column in your spreadsheet, and repeat that action for every row that has a case name.

Customize the template to match the data types in the first row of your spreadsheet. Make sure your column headers are wrapped in `{}`.

Don't forget to save your changes.

Open index.html using a web browser and check that your data is showing up as a list.

**Styling the list (optional):**

Once you've got your data showing up in the list, you can style it to your own taste. (*MoJo users* will want to stick to the default styles.)

## Staging the prettylist (for MoJo users)

*MoJo users:* When you're done, upload to s3 and embed in the shell [(follow this how to)](https://github.com/motherjones/story-tools#starting-a-new-project).

## Questions?

Hit us up by email, or Twitter: [@jaeahjlee](https://twitter.com/jaeahjlee) or [@tasneemraja](https://twitter.com/tasneemraja)

## License
Copyright (c) 2012 Mother Jones

