export default function ({ memo }) {
  return (
    <div className="main bg-green-400 flex-1">
          {
            <div>
              <h2 className="text-2xl p-4">{memo.title}</h2>
              <p className="p-4">{memo.contents}</p>
            </div>
          }
        </div>
  )
}
