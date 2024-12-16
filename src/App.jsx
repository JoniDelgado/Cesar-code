import { useState, useRef, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import getDataToTransform from "./utils/text-transform";

function App() {
  const [form, setForm] = useState({ text: "", steps: 0 });
  const inputText = useRef();

  let [codedText, setCodedText] = useState("");

  useEffect(() => {
    if (!form.text) return;
    let { text, steps } = form;
    setCodedText(getDataToTransform(text, steps));
  }, [form]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, text: inputText.current.value });
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <h1>Cifrado César</h1>
      <Input
        inputText={inputText}
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></Input>
      <Output codedText={codedText}></Output>
    </>
  );
}

export default App;
