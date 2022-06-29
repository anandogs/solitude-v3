import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Skeleton() {
  return (
    <div>
        <Header />
        <div className="h-screen flex w-screen py-[20px] px-[20px]">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-screen w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Skeleton