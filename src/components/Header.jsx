export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      {/* 로고 */}
      <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
        OZ코딩스쿨
      </h2>

      {/* 메뉴 */}
      <ul className="flex items-center gap-6">
        {["로그인", "회원가입", "내클래스"].map((item) => (
          <li
            key={item}
            className="list-none text-white font-medium text-sm cursor-pointer hover:text-yellow-400 transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}