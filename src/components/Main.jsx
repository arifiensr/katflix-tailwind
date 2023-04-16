export default function Main() {
  return (
    <>
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-green-400">01</div>
        <div className="flex-initial w-64 bg-blue-500">02</div>
        <div className="flex-initial w-32 bg-red-500">03</div>
      </div>
      <br />
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-green-400 hover:flex-1">01</div>
        <div className="flex-1 w-64 bg-blue-500">02</div>
        <div className="flex-1 w-32 bg-red-500">03</div>
      </div>
      <br />
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-green-400 hover:flex-1">01</div>
        <div className="flex-auto w-64 bg-blue-500">02</div>
        <div className="flex-auto w-32 bg-red-500">03</div>
      </div>
      <br />
    </>
  )
}
