import { useState } from "react"

const Questions = () => {

  const [btn, setBtn] = useState(false);
  const [bold, setBold] = useState(false);

  const clickBtn = () => {
    setBtn(!btn);
    setBold(!bold);
  }

  return (
    <section className="w-9/12 mx-auto flex mt-16 gap-24 max-lg:w-[90%] max-lg:gap-6 max-lg:flex-col">
      <div className="flex flex-col gap-6 w-[30%] max-lg:w-full">
        <h2 className="font-bold text-2xl">Sleepstiq <span className="bg-yellowUnderneath ">Product</span> </h2>
        <p>Order</p>
        <p>Melantonin</p>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p className={`${bold ? 'font-bold' : ''}`} onClick={clickBtn}>Q1: How does it Work?</p>
          <p className={`text-black ${bold ? 'block' : 'hidden'}`}>Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q2: Why inhale melatonin?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q3: How much melatonin is there per inhale?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q4: Is it an e-cigarette or tobacco product?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q5: What&apos;s in it?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q6: What&apos;s not in it?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q7: How long does it last?</p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <hr />
          <p>Q8: How do I know it has run out/died?</p>
          <hr />
        </div>

      </div>
    </section>
  )
}

export default Questions
