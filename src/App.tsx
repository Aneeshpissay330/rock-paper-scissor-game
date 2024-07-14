import Game from "./pages/Game"

const App = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#63e_1%,#63e_100%)]"></div>
      <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#63e" offset="1%" />
            <stop stopColor="#63e" offset="100%" />
          </linearGradient>
        </svg>
      <Game />
      <p className="developer">
        Developed by 🧑‍💻 <span>Aneesh Pissay</span>
      </p>
    </div>
  )
}

export default App