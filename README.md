# React Madlibs

## Description

In this assessment, students prove what they have learned throughout the React fundamentals course by creating a Madlibs app. There is also a conceptual Q&A portion of the assessment, as well as a small problem-solving exercise within the project directory.

## What Is Madlibs?

Though almost everyone knows, an explanation can't hurt, right? Madlibs are fill-in-the-blank short stories. The "player" follows the prompts to fill in the blanks with the types of words the story calls for (e.g. noun here, adjective there, name, verb, etc.) before they've read the story. Once finished, the player reads the story aloud with their chosen words included, usually resulting in a good chuckle, sometimes resulting in crying laughter.  

This app simulates the classic pen and paper game. Users will fill in the prompt form with words of their choice. Once they've submitted their words, the story will be displayed for them to read.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SeanBailey15/React_Madlibs.git
    ```

2. Navigate into the directory:

    ```bash
    cd React_Madlibs
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm run dev
    ```

    **This last command will provide a link in the terminal that will direct you to the port where the **Madlibs** app is running. The following instructions will tell you how to view the other portions of the assessment.*

### Conceptual Q&A

The simplest way to view the conceptual Q&A is to run the following command from within the root level of the React_Madlibs directory:

```bash
cat conceptual.md
```

This will print the contents of the file into the terminal.

### addCommas.js

This is the file containing the solution to the problem-solving exercise included in the assessment. There is also a test suite written for this file.

#### What It Does

The file contains a function called ```addCommas```. The purpose of this function is to format numbers into strings, with commas added where necessary to denote thousands, millions, billions, etc.  

The function accepts a positive or negative number, with or without a decimal amount, and will format the number correctly for any of these cases.

#### Running addCommas

To run the test suite (from the root level of the directory):

```bash
npm test addCommas.test.js
```

To play around with the function on your own:

1. Start the Node REPL (from the root level of the directory):

    ```bash
    node
    ```

    **This will automatically place you within the REPL*

2. Import the module into the REPL:

    ```js
    const { default: addCommas } = await import("./addCommas.js");
    ```

3. Try it out:  

    ```js
    addCommas(1234) // "1,234"
    addCommas(-10) // "-10"
    addCommas(-1234567.89) // "-1,234,567.89"
    ```

**To exit the Node REPL, use ```Ctrl + D``` or type ```.exit```*

## Thank You For Checking Out My Project!

## Contact Me

You can reach out to me on social media:

- [Discord](https://discordapp.com/users/792831510515548220)
- [LinkedIn](https://www.linkedin.com/in/sean-bailey-619723279)
- [Facebook](https://www.facebook.com/profile.php?id=61556172566858)

Feel free to connect with me on any of these platforms!