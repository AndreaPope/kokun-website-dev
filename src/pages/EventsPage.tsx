import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function EventsPage() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dknulbme8/image/upload/t_Grayscale/qcxon3z2kqbpeego4cap")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 z-10 bg-black/25" />

      <div className="relative z-20">
        <Navigation />

        <div className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-center leading-tight mt-24 sm:mt-32 md:mt-40">
          EVENTS
        </div>

        <main className="min-h-screen px-4 pb-24 pt-40 md:pt-48 flex justify-center">
          <div className="w-full max-w-5xl bg-black/70 p-4 rounded-md">
            <iframe
              src="https://luma.com/embed/calendar/cal-2Lsl1TNfl3bYTgr/events"
              width="100%"
              height="600"
              style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
              allowFullScreen
              title="Luma Event Calendar"
            ></iframe>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default EventsPage;
