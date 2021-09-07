import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import TicketApi from "../services/TicketApi";
import HotelApi from "../services/HotelApi";
import ReservationApi from "../services/ReservationApi";
import ActivitiesApi from "../services/ActivitiesApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    ticket: new TicketApi(),
    hotels: new HotelApi(),
    reservation: new ReservationApi(),
    activity: new ActivitiesApi() 
  };
}
