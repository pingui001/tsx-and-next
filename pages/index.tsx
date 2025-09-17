import { SetStateAction, use, useState } from 'react';
//import handler from './api/hello';
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
            const userFound = usuarios.find((item) => item.name == user && item.password == Number(passWord) );
            
            if (userFound){
                router.push("/index2");
            } else {
                setPassWord("");
                setUser("");
                alert("Usuario o contraseña incorrectos");
            }



        };




       /* const [password, setPassword] = useState("");  

        //const handlerChangeUser = (e: { target: { value: SetStateAction<string>; }; }) => {
        //    setUser(e.target.value);
        //}

        const handlerChangePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
            setPassword(e.target.value);
        }
        console.log(handlerChangePassword);

        const router = useRouter();
        
        const handlerClick = () => {
            if (user == ""){
                alert("El usuario no puede estar vacio");
                return; 
            } else if (password == "123"){
                router.push("/index2");
            }
        } */
        

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