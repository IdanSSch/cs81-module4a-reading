// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Adds a new book entry to the reading log.
 * @param day - The day of the week the book was read.
 * @param book - The title of the book read.
 * @param minutes - The number of minutes spent reading the book.
 */
function addReadBook(day, book, minutes) {
  // Does what it sounds like. Adds to the end of the list, though that's irrelevant for this use.
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/**
 * Calculates the total number of minutes read from the log.
 * @param log - The reading log array.
 * @returns {total} - The total number of minutes read.
 */
function totalReadingMinutes(log) {
  let total = 0;
  // A stream operator could be used here, but this is simpler.
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

/**
 * Finds the most read book from the log.
 * @param log - The reading log array.
 * @returns {maxBook} - The title of the most read book.
 */
function mostReadBook(log) {
  const bookCounts = {};
  // First, take the duplicate entries and count them into one object.
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // Now, actually get the max value from this concatenated object. There is a better way to do this, but... it's not nice.
  for (let book in bookCounts) { // The `of` vs `in` distinction is very silly, but it does indeed matter here.
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

/**
 * Prints a summary of the reading log for each day.
 * @param log - The reading log array.
 */
function printDailySummary(log) {
  // ...yep.
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
