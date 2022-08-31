import { toast } from "react-toastify"
import icon from "../../img/notification-icon.svg"
import './style.css'

function handleClick(){
    toast.info("SMS enviado com sucesso!");
}


function NotificationButton() {
    return (

        <div className="dsmeta-red-btn" onClick={() => handleClick()}>
            <img src={icon} alt="notificar" />
        </div>

    )
}

export default NotificationButton