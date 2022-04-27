export default function ({ memo }) {
  console.log(memo)

  return (
    <div className="main bg-slate-400 flex-1">
          {
            <div>
              <h2>{memo.title}</h2>
              <p>{memo.contents}</p>
            </div>
          }
        </div>
  )
}
