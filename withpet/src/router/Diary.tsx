import AttachedPicture from 'components/Diary/AttachedPicture'
import SelectedPet from 'components/Diary/SelectedPet'

import React, { useState } from 'react'

const Diary: React.FC = () => {
  const [check, setCheck] = useState<number>(0)
  const now = new Date()
  const year = now.getFullYear()
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  const date = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`
  const current = `${year}-${month}-${date}`

  const [selectedDate, setSelectedDate] = useState<string>(current)
  const [textCount, setTextCount] = useState<number>(0)

  return (
    <section className="bg-primary-100 max-w-scr h-max min-h-screen mx-auto p-3.5 flex flex-col items-start gap-4 ">
      <SelectedPet/>
      <div className="">
        <label
          className={`mr-6 relative radio-before cursor-pointer ${
            check === 0 ? 'radio-after' : ''
          }`}
          htmlFor="public-btn"
        >
          <input
            className="hidden absolute"
            type="radio"
            id="public-btn"
            checked={check === 0}
            onChange={() => setCheck(0)}
          />
          <span className="relative inline-block pl-8 text-xs">공개</span>
        </label>
        <label
          className={`relative radio-before cursor-pointer ${
            check === 1 ? 'radio-after' : ''
          }`}
          htmlFor="private-btn"
        >
          <input
            className="hidden absolute"
            type="radio"
            id="private-btn"
            checked={check === 1}
            onChange={() => setCheck(1)}
          />
          <span className="relative inline-block pl-8 text-xs">비공개</span>
        </label>
      </div>
      <h2 className="font-bold w-full h-16">
        <input
          className="w-full h-full text-center text-2xl"
          type="text"
          placeholder="제목"
          maxLength={21}
          required
        />
      </h2>
      <div className="w-full h-16 bg-Gray-100 flex items-center p-5">
        <label className="grow" htmlFor="date">
          날짜
        </label>
        <input
          className="grow text-left cursor-pointer"
          type="date"
          id="date"
          max="2099-12-31"
          min="2000-01-01"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </div>
      <AttachedPicture />
      <div className="w-full relative">
        <textarea
          className="w-full resize-none bg-Gray-100 p-4 text-justify"
          name="description"
          cols={30}
          rows={10}
          placeholder="내용을 입력해주세요."
          maxLength={300}
          onChange={e => setTextCount(e.target.value.length)}
        ></textarea>
        <p className="absolute right-2 bottom-3 text-Gray-300">{`(${textCount}/300)`}</p>
      </div>
    </section>
  )
}

export default Diary