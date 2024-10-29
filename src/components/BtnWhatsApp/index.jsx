import { FloatingWhatsApp } from "react-floating-whatsapp";
import perfil from "../../assets/perfil.jpeg"

export function BtnWhatsApp() {
    return (
            <FloatingWhatsApp
                phoneNumber="24999173920"
                accountName="Philipe Dev"
                chatMessage="Vamos construir algo juntos?"
                avatar={perfil}
            />
    )
}


