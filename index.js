const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const arr = req.body.data;
  if (arr.length <= 0) {
    return res.status(400).json({
      is_success: false,
      error: "Invalid Array length ",
    });
  } else {
    const evenNumbers = arr.filter(
      (num) => num % 2 === 0 && !num.match(/[a-zA-Z]/),
    );
    const oddNumbers = arr.filter(
      (num) => num % 2 !== 0 && !num.match(/[a-zA-Z]/),
    );
    const alphabetsUppercase = arr
      .filter((char) => typeof char === "string" && char.match(/[a-zA-Z]/))
      .map((char) => char.toUpperCase());
    return res.status(200).json({
      is_success: true,
      user_id: "Himanshu Gupta",
      roll_number: "2110992168",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabetsUppercase,
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port`);
});
