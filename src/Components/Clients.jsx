import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 w-[700vw] flex-nowrap`}>
    {/* Client Logos */}
    <div
      className={`${styles.flexCenter} flex-wrap w-full moving-client-logos`}
    >
      {clients.map((client, index) => (
        <div
          key={index}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
