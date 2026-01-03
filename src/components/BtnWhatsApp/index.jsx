import { FloatingWhatsApp } from "react-floating-whatsapp";
import perfil from "../../assets/perfil.jpeg"

export function BtnWhatsApp() {
    return (
            <FloatingWhatsApp
                phoneNumber="24999173920"
                accountName="Philipe Ferreira"
                chatMessage="Quer aumentar as vendas do seu negócio com um site profissional? Clique aqui e peça um orçamento gratuito."
                avatar={perfil}
            />
    )
}