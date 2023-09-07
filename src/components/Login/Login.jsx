import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: "", password: "" };

        if (!values.email) {
            newErrors.email = "El correo electrónico es obligatorio";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = "Dirección de correo electrónico no válida";
            isValid = false;
        }

        if (!values.password || values.password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("El formulario es válido");
        } else {
            console.log("El formulario no es válido");
        }

        if (validateForm()) {
            navigate("/inicio");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <main className="main">
            <div className="contenedorM mainLogin">
                <h2 className="sesion">Iniciar Sesión</h2>
                <form action="" id="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="user" className="form-label">
                        Usuario
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="user"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="error-message" style={{ 'color': 'red' }}>{errors.email}</div>

                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        aria-describedby="descriptionP"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <div className="error-message" style={{ 'color': 'red' }}>{errors.password}</div>

                    <button disabled={!validateForm} type="submit" name="Enviar" id="submit" className="btn btn-primary mt-4">
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    );
};
