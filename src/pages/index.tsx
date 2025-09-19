"use client";
import React from 'react';
import { SetStateAction, use, useState } from 'react';
import { useRouter } from "next/router";   
import { usuarios } from '@/utils/utils';

const Login = () => {
    const router = useRouter();

        const [user, setUser] = useState("");
        const [passWord, setPassWord] = useState(""); 

        const handlerChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
            setUser(e.target.value);
        }

        const handlerChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
            setPassWord(e.target.value);
        }

        const handlerClick = () => {
            if (user == "" || passWord == ""){
                alert("El usuario y la contraseña no pueden estar vacios");
            }
            const userFound = usuarios.find((item) => item.usuarioname == user && item.password == (passWord) );
            
            if (userFound){
                router.push("/dashboard");
            } else {
                setPassWord("");
                setUser("");
                alert("Usuario o contraseña incorrectos");
            }



        };

    return (

        <div>
            <h1>Mi app</h1>

            <h3> Ingresa tu usuario y contraseña</h3>

            <form>
                <input value={user} onChange={handlerChangeUser} type="text" placeholder="Usuario" />
                <input value={passWord} onChange={handlerChangePass} type="password" placeholder="Contraseña" />
                <button onClick={handlerClick} type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;