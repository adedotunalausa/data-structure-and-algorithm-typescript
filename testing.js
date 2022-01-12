// const http = require('http');
// const port = 3002;

// http.createServer((req, res) => {
//   res.writeHead(
//     200,
//     {
//       'Content-Type': 'text/plain'
//     }
//   );
//   res.end("Hello Adedotun")
// }).listen(port, "127.0.0.1", () => {
//   console.log(`Server running at http://127.0.0.1:${port}`);
// });

const info = ["hobbies", "skills"];

const user = {
  name: "Adedotun Alausa",
  email: "adedotunalausa@gmail.com",
  [info[0]]: "Travel...",
  [info[1]]: "Java, Nodejs"
}

console.log(user);

const string = 'all your base belongs to us';
const regex = /base/;
const isExisting = regex.test(string);
console.log(isExisting);

const listOfListOfPosts = [
  [
    {
      id: 3,
      description: "Yessssss",
      created_at: 100
    },
    {
      id: 4,
      description: "Oooooooo",
      created_at: 101
    }
  ],
  [
    {
      id: 2,
      description: "Whaaaat",
      created_at: 101
    },
    {
      id: 7,
      description: "Huhhhhhh",
      created_at: 103
    }
  ],
  [
    {
      id: 3,
      description: "Yessssss",
      created_at: 100
    }
  ]
]