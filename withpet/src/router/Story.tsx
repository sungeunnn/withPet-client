import React from 'react'
import Container from 'components/UI/Container'
import StoryCard from './../components/Story/StoryCard'
import Header from 'components/Header/Header'
import { auth } from 'firebase-config'

const Story = () => {
  return (
    <>
      <Header title={'Story'} />
      <Container style={'bg-Gray-100 pb-20 pt-20'}>
        <StoryCard />
      </Container>
      <button onClick={() => auth.signOut()}>로그아웃</button>
    </>
  )
}

export default Story
