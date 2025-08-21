export default function Content({ content }) {
  return (
    <div className="relative flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[300px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-full h-[180px] object-cover"
      />
      <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
        모집중
      </span>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white">{content.title}</h3>
        <p className="text-sm text-gray-300">{content.subtitle}</p>
      </div>
    </div>
  );
}