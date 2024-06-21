import React, { useState } from "react";

const Form = ({ setShowAlert }) => {
  const dataInitialValue = {
    name: "",
    email: "",
    comment: "",
  };
  const errorInitValue = {
    messages: [],
  };

  const [data, setData] = useState(dataInitialValue);
  const [errors, setErrors] = useState(errorInitValue);

  const onChange = (event) => {
    if (errors.messages.length > 0) {
      setErrors(errorInitValue);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    setErrors(errorInitValue);
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*/g;

    let errorArr = [];
    if (!nameRegex.test(data.name) || data.name.length <= 5) {
      errorArr.push("Ingrese un nombre valido");
    }

    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/g;
    if (!emailRegex.test(data.email)) {
      errorArr.push("El correo electronico no cuenta con el formato adecuado");
    }

    if (data.comment.length < 25) {
      errorArr.push("El comentario debe contener minimo 25 caracteres");
    }
    setErrors({
      messages: errorArr,
    });

    if (errorArr.length == 0) {
      setShowAlert(true);
      setData(dataInitialValue);
    }
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={onChange}
        />
        <label htmlFor="email">Correo:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={data.email}
          onChange={onChange}
        />
        <label htmlFor="comment">Comentario:</label>
        <textarea
          name="comment"
          id="comment"
          rows={4}
          cols={20}
          value={data.comment}
          onChange={onChange}
        />
        {errors.messages.map((msg, i) => {
          return (
            <div className="error" key={i}>
              <span>
                <b>· </b>
              </span>
              <span>{msg}</span>
            </div>
          );
        })}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
