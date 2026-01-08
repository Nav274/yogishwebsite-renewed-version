import whatsapp from "/whatsapp.png";

export default function Whatsapp() {
  return (
   <a
  href="https://wa.me/+919480385533"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl hover:bg-green-600 animate-bounce">
  {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"> */}
    <img src={whatsapp} className="w-7 h-7 text-white" />
  {/* </svg> */}
</a>

  );
}
