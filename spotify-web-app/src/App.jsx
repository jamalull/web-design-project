import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="w-full grid grid-rows-[1fr_90px]">
        <div className="w-full h-[calc(100vh_-_90px)] grid grid-cols-[260px_1fr] justify-center">
          <Sidebar />
          {/* <MainView /> */}
        </div>
        {/* <MediaPlayer /> */}
    </div>
    </>
  )
}

export default App
