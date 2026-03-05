const IdentificationForm = ({ data, updateFieldHandler }) => {
  return (
    <>
      <div className="form-Control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-Control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </>
  );
};

export default IdentificationForm;
