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
  const [error, setError] = useState("");

  const compile = (str) => {
    let expression = str;

    Object.entries(dictionary).forEach(([k, v]) => {
      expression = expression.replaceAll(k, v);
    });

    try {
      const result = new Function(expression)();

      const last = expression.split(";")[expression.split(";").length - 2];
      if (!last?.includes("return")) {
        setError("Code snippet must end with a return.");
      } else {
        setError("");
      }

      setOutput(result);
    } catch (e) {
      setError(e.message);
    }
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
      <p className="error">{error}</p>
    </div>
  );
}

export default App;
