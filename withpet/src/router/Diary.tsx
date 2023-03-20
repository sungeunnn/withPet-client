import React, { useState, useEffect } from 'react'
import AttachedPicture from 'components/Diary/AttachedPicture'
import WeatherChoose from 'components/Diary/WeatherChoose'
import SelectedPet from 'components/Diary/SelectedPet'
import Container from 'components/UI/Container'
import Header from 'components/Header/Header'
import PublicChoose from 'components/Diary/PublicChoose'
import DateChoose from 'components/Diary/DateChoose'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const Diary: React.FC = () => {
  const [textCount, setTextCount] = useState<number>(0)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )

  useEffect(() => {
    console.log('다이어리페이지 정보', diary)
  }, [diary])

  return (
    <>
      <Header title={'Diary'} />
      <Container style={'bg-primary-100 gap-4 items-start pb-20 pt-16'}>
        <SelectedPet />
        <PublicChoose />
        <h2 className="font-bold w-full h-16 shrink-0">
          <input
            className="w-full h-full text-center text-2xl"
            type="text"
            placeholder="제목"
            maxLength={21}
            required
          />
        </h2>
        <DateChoose />
        <WeatherChoose />
        <AttachedPicture />
        <div className="w-full relative shrink-0">
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
      </Container>
    </>
  )
}

export default Diary
