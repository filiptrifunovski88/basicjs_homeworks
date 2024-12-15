const book = {
  title: "",
  author: "",
  readingStatus: true,

  check: function () {
    if (this.readingStatus) {
      return `You have read ${this.title} by ${this.author}.`;
    } else {
      return `You haven't read ${this.title} by ${this.author} yet.`;
    }
  },
};

book.title = prompt("Enter the title of the book:");
book.author = prompt("Enter the author of the book:");
book.readingStatus = confirm(
  "Have you already read the book? (OK for YES, Cancel for NO)"
);

console.log(book.check());
