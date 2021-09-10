/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  newLikes(likes) {
    this.numberOfLikes += likes;
  }
  comment(comments) {
    this.comments.push(comments);
  }

};

var tweet1 = new Tweet("Kai", "This is my first tweet ever", "8:45am Friday, Sept 10 2021", 1, ["Congratulations!"]);

tweet1.newLikes(5);
tweet1.comment ("Proud of you");

console.log(tweet1);

var tweet2 = new Tweet("Jessica", "Wishing I was on a beach today instead of working", "11:44am Wednesday, Sept 8 2021", 2, ["Me too", "I feel ya"]);

tweet2.newLikes(24);
tweet2.comment("Let's book flights!");

console.log(tweet2);

tweet1.comment("Post more please");
