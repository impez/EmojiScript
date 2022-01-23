import { useState } from "react";

const dictionary = {
  "🐶": "const",
  "🐱": "let",
  "🐭": "var",
  "🐹": "import",
  "🐰": "from",
  "🦊": "function",
  "🐻": "if",
  "🐼": "else",
  "🐨": "while",
  "🐯": "for",
  "🦁": "switch",
  "🐮": "case",
  "🐷": "break",
  "🐸": "return",
  "🐵": "default",
  "🦋": "constructor",
  "🐢": "this",
  "🐔": "try",
  "🐧": "catch",
  "🐦": "do",
  "🐤": "async",
  "🐺": "await",
  "🐗": "typeof",
  "🐴": "class",
  "🦄": "new",
  "🍏": "+",
  "🍎": "-",
  "🍊": "*",
  "🍋": "/",
  "🍌": "&",
  "🍉": "|",
  "🍇": "<",
  "🍓": ">",
  "🍑": "=",
  "🍈": "!",
  "🍒": "?",
  "🍆": "null",
};

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("No output.");

  const compile = (str) => {
    let expression = str;

    Object.entries(dictionary).forEach(([k, v]) => {
      expression = expression.replaceAll(k, v);
    });

    const result = new Function(expression)();
    setOutput(result);
  };

  return (
    <div className="container">
      <h2>EmojiScript</h2>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          compile(input);
        }}
      >
        Compile and run
      </button>
      <div className="output">Output:</div>
      <p>{output}</p>
    </div>
  );
}

export default App;
