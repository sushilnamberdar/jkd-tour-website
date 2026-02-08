import Gallery from "./Gallery";
import TourMeta from "./TourMeta";
import PricingCard from "./PricingCard";
import Tabs from "./Tabs";
import Tour from "./Tour";

const TourDetails = ({ data }) => {
  return (
    <div className="mt-[150px] bg-gray-50 py-4 max-w-6xl mx-auto px-4">
      {/* tour images  */}
      <div className="mt-[10px] mb-8">

        <Gallery images={data.gallery} />
      </div>
      <hr />
      {/* tour details description and info here */}
      <div className="mt-8">
        <Tour data={data} />
      </div>


      <section className="tour-details">
        <div className="tour-header">
          {/* <h1>{data.title}</h1> */}
          <div className="duration">
            {/* <span>{data.duration.days} Days</span> */}
            {/* <span>{data.duration.nights} Nights</span> */}
          </div>
        </div>

        <div className="tour-layout">
          <div className="left">
            {/* <TourMeta items={data.features} /> */}
            {/* <Tabs tabs={data.tabs} /> */}
          </div>

          <div className="right">
            {/* <PricingCard price={data.price} /> */}
          </div>
        </div>
      </section>
      <section>

      </section>

    </div>
  );
};

export default TourDetails;
