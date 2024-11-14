interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  room?: string;
  onSignUp?: () => void;
  flyerImage?: string;
}

export function EventCard({ title = "First Event", date = "November 28, 2024", time = "6:00 PM", location = "Carleton University", room, onSignUp, flyerImage }: EventCardProps) {
  return (
    <div className="w-full flex justify-center items-center my-8">
      <div className="rounded-lg border border-[#4A4F8C] p-6 max-w-4xl bg-white/50 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          {/* Event Information */}
          <div className="md:w-2/3 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#4A4F8C]">{title}</h3>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#4A4F8C]" />
                <span className="text-[#4A4F8C]">{date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#4A4F8C]" />
                <span className="text-[#4A4F8C]">{time}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-[#4A4F8C]" />
                <span className="text-[#4A4F8C]">{location}</span>
              </div>

              {room && (
                <div className="flex items-center gap-2">
                  <RoomIcon className="w-4 h-4 text-[#4A4F8C]" />
                  <span className="text-[#4A4F8C]">Room {room}</span>
                </div>
              )}
            </div>

            <button 
              onClick={onSignUp}
              className="w-fit group relative h-12 overflow-hidden rounded-md bg-[#4A4F8C] px-6 text-neutral-50 transition hover:bg-[#7B89B8] flex items-center justify-center"
            >
              Reserve a Spot!
              <div className="absolute inset-0 flex w-full [animation:shine_3.75s_ease-in-out_infinite]">
                <div className="relative h-full w-8 -skew-x-12 bg-white/20 translate-x-[-200%]"></div>
              </div>
            </button>
          </div>

          {/* Flyer Image */}
          {flyerImage && (
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={flyerImage} 
                alt={`Flyer for ${title}`}
                className="w-3/4 md:w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Icon components
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const RoomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3h18v18H3z"></path><path d="M9 3v18"></path><path d="M15 3v18"></path><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
);