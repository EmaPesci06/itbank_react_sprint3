
export const Login = () => {
    return (
        <main class="main">
            <div class="contenedorM">
                <h2 class="sesion">Iniciar Sesión</h2>
                <form action="" id="loginForm">
                    <label for="user" class="form-label">Usuario</label>
                    <input type="text" name="usuario" id="user" class="form-control" />
                    <div class="form-text">Ingrese un email valido</div>

                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" name="contraseña" id="password" class="form-control"
                        aria-describedby="descriptionP" />
                    <div id="descriptionP" class="form-text">Ingrese una contraseña con 8 caracteres</div>

                    <button type="submit" name="Enviar" id="submit" class="btn btn-primary mt-4">Enviar</button>
                </form>

            </div>
        </main>
    )
}
