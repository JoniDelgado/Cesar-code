export default function Input({ form, handleChange, handleSubmit, inputText }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          ref={inputText}
          placeholder="Escriba aquí su texto a cifrar"
        ></textarea>
        <div>{form.steps}</div>
        <input
          type="range"
          onChange={handleChange}
          name="steps"
          min="-20"
          max="20"
          step="1"
          value={form.steps}
        />
        <input type="submit" name="submit" value="Cifrar" />
      </form>
    </>
  );
}
