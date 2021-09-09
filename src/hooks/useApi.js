import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import TicketPriceApi from "../services/TicketPriceApi";
import HotelApi from "../services/HotelApi";
import ReservationApi from "../services/ReservationApi";
import ActivitiesApi from "../services/ActivitiesApi";
import TicketApi from "../services/TicketApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    ticketPrices: new TicketPriceApi(),
    ticket: new TicketApi(),
    hotels: new HotelApi(),
    reservation: new ReservationApi(),
    activity: new ActivitiesApi() 
  };
}
