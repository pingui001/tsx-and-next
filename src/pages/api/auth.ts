import { usuarios } from "@/utils/utils";
import { User } from "@/utils/types";

export interface authResponse {
    success: boolean;
    user?: User;
    message?: string;

}

export function authenticate(usuarioname: string, password: string): authResponse {
    const user = usuarios.find(
        (u) => u.usuarioname === usuarioname && u.password === password
    );
    if (user) {
    return { success: true, user };
} else {
    return { success: false, message: "Invalid credentials" };
}

}
