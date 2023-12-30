import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (date) => {
    if (date) {
        return format(date, "EEEE dd 'de' MMMM 'del' y", { locale: es })
    } else {
        return undefined
    }
}