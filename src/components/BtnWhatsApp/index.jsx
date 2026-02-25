import { FloatingWhatsApp } from "react-floating-whatsapp";
import perfil from "../../assets/perfil.jpeg"

export function BtnWhatsApp() {
    return (
            <FloatingWhatsApp
                phoneNumber="24999173920"
                accountName="Philipe Ferreira"
                chatMessage="Quer escalar seu negócio com um site profissional e tráfego pago estratégico no Instagram e Google? Eu crio sua estrutura de vendas completa. Clique aqui e peça seu orçamento gratuito!"
                avatar={perfil}
            />
    )
}