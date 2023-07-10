// Problem 1-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem1(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  const lowestNum = Math.min(...arr);
  const highestNum = Math.max(...arr);

  return highestNum - lowestNum;
}

// console.log(problem1([1, 2, 3, -4])); // 7
// console.log(problem1([23, 17, 4, 65])); // 61
// console.log(problem1([])); // 0
// console.log(problem1([1])); // 0

// Problem 2-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem2(string, num) {
  const wordArr = string.replace(/[^\w\s']/g, "").split(/\s+/);
  const resultArr = [];

  for (let word of wordArr) {
    if (word.length > num) {
      resultArr.push(word);
    }
  }

  return resultArr;
}

// console.log(problem2("I am not in danger, Skyler. I am the danger.", 5)); // ['danger', 'Skyler', 'danger']
// console.log(problem2("I am the one who knocks!", 5)); // ['knocks']
// console.log(problem2("", 5)); // []

// Problem 3-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem3(arg1, arg2) {
  if (!arg1 || !arg2) {
    return "Arguments can't be empty strings";
  }

  return arg1.endsWith(arg2);
}

// console.log(problem3("abc", "bc")); // true
// console.log(problem3("abc", "d")); // false
// console.log(problem3("qwe", "")); // Arguments can't be empty strings

// Problem 4-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem4(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentNum = arr[i];
    const nextNum = arr[i + 1];
    const average = (currentNum + (nextNum || 0)) / 2;
    resultArr.push(average);
  }

  return resultArr;
}

// console.log(problem4([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
// console.log(problem4([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
// console.log(problem4([0, 1.432, 3, -7])); // [0.716, 2.216, -2]

// Problem 5-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem5(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const modifiedString = string.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < modifiedString.length; i++) {
    if (vowels.includes(modifiedString[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(problem5("Celebration")); // 5;
console.log(problem5("Palm")); // 1;
console.log(problem5("Are you actually reading these stings?")); // 13

function problem5_2(string) {
  const lettersToRemove = ["a", "b", "c"];
  let hasCharToRemove = false;
  let result = "";

  for (let char of string) {
    const modifiedChar = char.toLowerCase();
    if (lettersToRemove.includes(modifiedChar)) {
      hasCharToRemove = true;
    } else {
      result += char;
    }
  }

  return hasCharToRemove ? result : null;
}

// console.log(problem5_2("This might be a bit hard")); // This might e  it hrd
// console.log(problem5_2("hello world")); // null

// Problem 6-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem6(arr1, arr2) {
  const resultArr = [];
  const commonArr = [...arr1, ...arr2];

  for (let element of commonArr) {
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  }

  return resultArr;
}

// console.log(problem6([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 100, 10]

// Problem 7-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem7(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// console.log(problem7({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })); // {#FF0000: 'red', #00FF00: 'green', #FFFFFF: 'white'}

// Problem 8-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem8(obj, limit) {
  const isObjectEmpty = Object.keys(obj).length === 0;
  const totalItemsSum = Object.values(obj).reduce(
    (acc, itemCost) => (acc += itemCost),
    0
  );
  if (isObjectEmpty || totalItemsSum < limit) {
    return "An object must always contain elements. A sum of objects must always be greater than the insurance.";
  }

  return totalItemsSum - limit;
}

// console.log(problem8({ "baseball bat": 20 }, 5)); // 15
// console.log(problem8({ skate: 10, painting: 20 }, 19)); // 11
// console.log(problem8({ skate: 15, shoes: 1 }, 200)); // "An object must always..."

// Problem 9-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem9(a, b, c, w, h) {
  if (
    (a <= w && b <= h) ||
    (a <= h && b <= w) ||
    (a <= w && c <= h) ||
    (a <= h && c <= w) ||
    (b <= w && c <= h) ||
    (b <= h && c <= w)
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(problem9(1, 1, 1, 1, 1)); // true
// console.log(problem9(1, 2, 1, 1, 1)); // true
// console.log(problem9(1, 2, 2, 1, 1)); // false

// Problem 10-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem10(path) {
  const fileName = path.split("\\").pop();
  const fileNameWithoutExtension = fileName.split(".").shift();

  return fileNameWithoutExtension;
}

// console.log(problem10("c:\\WebServers\\home\\testsite\\www\\myfile.txt")); // myfile

// Problem 11-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem11(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let concat = str1 + str1;

  if (concat.includes(str2)) {
    return true;
  }

  return false;
}

// console.log(problem11("ABCD", "CDAB")); // true
// console.log(problem11("ABCD", "ACBD")); // false

// Problem 12-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem12(arr) {
  if (arr.length % 2 !== 0) {
    return "Number of elements inside an array must be even";
  }
  const sortedArr = arr.sort((a, b) => a - b);
  const b = [];
  const c = [];

  while (sortedArr.length > 0) {
    const element1 = sortedArr.pop();
    const element2 = sortedArr.pop();
    c.unshift(element1);
    b.unshift(element2);
  }

  return {
    b,
    c,
  };
}

// console.log(problem12([1, 5, 3, 7, 2, 9, 6, 4])); // { b: [1, 3, 5, 7], c: [2, 4, 6, 9]}
// console.log(problem12([1, 2, 3])); // Number of elements inside an array must be even
// console.log(problem12([])); // { b: [], c: []}

// Problem 13-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem13(str) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const linkRegex = /https?:\/\/\S+/;
  const words = str.toLowerCase().split(" ");
  const modifiedFirstWord =
    words[0].charAt(0).toUpperCase() + words[0].slice(1);
  words[0] = modifiedFirstWord;

  const result = words
    .map((word) => {
      if (emailRegex.test(word)) {
        return "[контакти заборонені]";
      }
      if (linkRegex.test(word)) {
        return "[посилання заборонені]";
      }

      return word;
    })
    .join(" ");

  return result;
}

// console.log(problem13("tonight gehrman@gmail.com joins the https://hunt.net")); // Tonight [контакти заборонені] joins the [посилання заборонені]

// Problem 14-------------------------------------------------------------------------------------------------------------------------------------------------------------

function checkBrackets(str) {
  if (str.includes("(") || str.includes(")")) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) {
          console.error("Closing bracket without opening bracket.");
          return null;
        }
        stack.pop();
      }
    }
    if (stack.length > 0) {
      console.error("Unclosed opening brackets.");
      return null;
    }

    return str;
  } else {
    console.error("No round brackets found in the string.");
    return null;
  }
}

const userInput = "((Test string))";
const result = checkBrackets(userInput);

if (result === userInput) {
  const textElem = document.createElement("p");
  textElem.textContent = result;
  textElem.setAttribute("oncopy", "return false;");
  textElem.setAttribute("onmousedown", "return false;");
  textElem.setAttribute("onselectstart", "return false;");
  document.body.append(textElem);
}

// Problem 15-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem15() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";

  const passwordLength = Math.floor(Math.random() * 15) + 6;
  const underscoreIndex = Math.floor(Math.random() * passwordLength);

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    if (i === underscoreIndex) {
      password += "_";
    } else {
      const category = Math.floor(Math.random() * 3);
      switch (category) {
        case 0:
          password +=
            uppercaseLetters[
              Math.floor(Math.random() * uppercaseLetters.length)
            ];
          break;
        case 1:
          password +=
            lowercaseLetters[
              Math.floor(Math.random() * lowercaseLetters.length)
            ];
          break;
        case 2:
          if (
            password.split("").filter((char) => digits.includes(char)).length >=
            5
          ) {
            password +=
              uppercaseLetters[
                Math.floor(Math.random() * uppercaseLetters.length)
              ];
          } else {
            password += digits[Math.floor(Math.random() * digits.length)];
          }
          break;
      }
    }
  }

  const capitalIndices = [];
  for (let i = 0; i < passwordLength; i++) {
    if (password[i] === password[i].toUpperCase()) {
      capitalIndices.push(i);
    }
  }
  while (capitalIndices.length < 2) {
    const randomIndex = Math.floor(Math.random() * passwordLength);
    if (!capitalIndices.includes(randomIndex)) {
      password =
        password.substring(0, randomIndex) +
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)] +
        password.substring(randomIndex + 1);
      capitalIndices.push(randomIndex);
    }
  }

  for (let i = 0; i < passwordLength - 1; i++) {
    if (digits.includes(password[i]) && digits.includes(password[i + 1])) {
      password =
        password.substring(0, i + 1) +
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)] +
        password.substring(i + 2);
    }
  }

  return password;
}

// console.log(problem15());

// Problem 16-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem16(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const resultArr = [...sortedArr];

  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      resultArr[left] = sortedArr[i];
      left++;
    } else {
      resultArr[right] = sortedArr[i];
      right--;
    }
  }

  return resultArr;
}

// console.log(problem16([1, 2, 3, 4, 5]));

// Problem 17-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem17(str) {
  const charArr = str.replace(" ", "").split("");
  const charFrequency = charArr.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
      return acc;
    } else {
      acc[item] += 1;
      return acc;
    }
  }, {});
  const sortedArr = Object.entries(charFrequency).sort((a, b) => b[1] - a[1]);
  const result = sortedArr.reduce((acc, item) => (acc += item[0]), "");

  return result;
}

// console.log(problem17("test string")); // tsering
// console.log(problem17("bbbcddaa")); // bdac

// Problem 18-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem18(str1, str2) {
  const modifiedStr1 = str1.toLowerCase().replace(/\s/g, "");
  const modifiedStr2 = str2.toLowerCase().replace(/\s/g, "");
  let commonSubstring = "";
  for (let i = 0; i < modifiedStr1.length; i++) {
    for (let j = 0; j < modifiedStr2.length; j++) {
      let k = 0;
      while (
        i + k < modifiedStr1.length &&
        j + k < modifiedStr2.length &&
        modifiedStr1.charAt(i + k) === modifiedStr2.charAt(j + k)
      ) {
        k++;
      }
      if (k > commonSubstring.length) {
        commonSubstring = modifiedStr1.substring(i, i + k);
      }
    }
  }

  return commonSubstring;
}

// console.log(problem18("Eric Andre", "American Dream")); // ericandre
// console.log(problem18("Test string", "ring")); // ring

// Problem 19-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem19(str, num) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const charArr = str.toLowerCase().split("");
  const result = charArr
    .map((item) => {
      const alphabeticalPosition = alphabet.indexOf(item);
      if (alphabet.includes(item)) {
        if (alphabeticalPosition + num < 26) {
          return (item = alphabet[alphabeticalPosition + num]);
        } else {
          return (item = alphabet[(alphabeticalPosition + num) % 26]);
        }
      } else {
        return item;
      }
    })
    .join("");

  return result;
}

// console.log(problem19("zzzzz", 2)); // bbbbb
// console.log(problem19("Caesar would have been proud!", 11)); // nlpdlc hzfwo slgp mppy aczfo!

// Problem 20-------------------------------------------------------------------------------------------------------------------------------------------------------------

function problem20(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

// console.log(problem20("Leonardo da Vinci", "o draconian devil")); // true
// console.log(problem20("zelenskyi", "volodymyr")); // false

// Problem 21-------------------------------------------------------------------------------------------------------------------------------------------------------------

const University = {
  students: [],

  addStudent(student) {
    this.students.push(student);
  },

  deleteStudent(studentId) {
    this.students = this.students.filter((student) => student.id !== studentId);
  },

  getStudentById(studentId) {
    return this.students.find((student) => student.id === studentId);
  },

  getStudentsByCourse(course) {
    return this.students.filter((student) => student.course === course);
  },

  getStudentsByFaculty(faculty) {
    return this.students.filter((student) => student.faculty === faculty);
  },
};

University.addStudent({
  id: 1,
  name: "John Doe",
  course: "Computer Science",
  faculty: "Engineering",
});

University.addStudent({
  id: 2,
  name: "Jane Smith",
  course: "Physics",
  faculty: "Science",
});

University.addStudent({
  id: 3,
  name: "Alex Johnson",
  course: "Mathematics",
  faculty: "Science",
});

// console.log(University.students); // [student1, student2, student3]
// console.log(University.getStudentById(1)); // student1
// console.log(University.getStudentsByCourse("Physics")); // [student2]
// console.log(University.getStudentsByFaculty("Science")); // [student3]
// University.deleteStudent(2);

// Problem 22-------------------------------------------------------------------------------------------------------------------------------------------------------------

function analyzeText(text) {
  text = text.replace(/\s+/g, " ").trim();

  const charCount = text.length;
  const wordCount = text.split(" ").filter((word) => word !== " ").length;
  const sentenceCount = text
    .split(/[.?!]/g)
    .filter((sentence) => sentence !== "").length;

  return {
    charCount,
    wordCount,
    sentenceCount,
  };
}

function findMostFrequentWords(text, count) {
  const cleanText = text.replace(/[^\w\s]/g, "").toLowerCase();
  const words = cleanText.split(/\s+/g).filter((word) => word !== "");
  const wordCount = {};

  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const wordCountPairs = Object.entries(wordCount);
  wordCountPairs.sort((a, b) => b[1] - a[1]);
  const filteredWordCountPairs = wordCountPairs.slice(0, count);
  filteredWordCountPairs.forEach(([word, count]) => {
    console.log(word, "-", count, "occurrences");
  });
}

const text =
  "Who are you talking to right now? Who is it you think you see? Do you know how much I make a year? I mean, even if I told you, you wouldn't believe it. Do you know what would happen if I suddenly decided to stop going into work? A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!";

// console.log(analyzeText(text)); // {charCount: 554, wordCount: 117, sentenceCount: 14}
// findMostFrequentWords(text, 5); // you - 10 occurrences i - 7 occurrences who - 4 occurrences to - 4 occurrences it - 4 occurrences
